const toasterOptions = () => {
  toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-full-width",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    };
  };
toasterOptions();  
let token = JSON.parse(localStorage.getItem('token'));
window.addEventListener("load", ()=>{
  if(!token){
      document.body.classList.add(".has-overlay");
      toastr.error(`you must be logged in to access this page`);
      setTimeout(() => window.location.assign('login.html'), 1000);

  }else{
      
  }
});
var toggle = document.querySelector(".nav-toggle");

var tog = document.querySelector("HTML");

function toggleModal() {
    toggle.classList.toggle("active");
    tog.classList.toggle("openNav")
}


toggle.addEventListener("click", toggleModal);

const art = document.querySelector('article');
const nav = document.querySelector('header');

  (function(){
  
   const icon = document.getElementsByClassName('icon');
   const products = document.getElementsByClassName('products');
  
    function hasClass(elem, className) {
      return elem.classList.contains(className);
    }
  
    /* Do stuff */
    // For each icon
    for (var i = 0, len = icon.length; i < len; i++) {
      // On click of icon
      icon[i].addEventListener('click', function() {
        // If clicked icon has 'active' class
        if (hasClass(this, 'active')) {
          // Do nothing
          return;
        // If clicked icon doesn't have 'active' class
        } else {
          // For each icon
          for (var j = 0, len = icon.length; j < len; j++) {
            // Toggle the 'active' class
            icon[j].classList.toggle('active');
          }
          // Toggle the 'list' and 'grid' classes
          products[0].classList.toggle('list');
          products[0].classList.toggle('grid');
  
        }
  
      });
  
    }
  })();


const id = JSON.parse(localStorage.getItem('token')).userid;
const populate = () =>{
  if(localStorage.getItem('cart')){
    fetch(`http://localhost:3000/api/v1/sales/`,{
      method: 'GET', // or 'PUT'
      headers:{
          'Content-Type': 'application/json; charset=utf-8',
          'token': JSON.parse(localStorage.getItem('token')).token
          
      }
      })
  .then(res => res.json())
  .then(async response => 
      
      {
          const table = document.getElementById("mytable");
         
         const cart = JSON.parse(localStorage.getItem('cart'))
         let total=0;
         for(i=0;i<cart.length;i++){
          total+=(parseInt(cart[i].price,10)*parseInt(cart[i].quantity,10));
          }
          const tot = document.querySelector(".total");
          tot.innerHTML=`N${total}`
      const map1 = cart.map(x=>x);
      
      map1.forEach(element => {
          const y = table.rows.length;
          
              const newCell   = table.insertRow(y);
              
                  const a = newCell.insertCell(0);
                  a.innerHTML =element.name; 
                  const b = newCell.insertCell(1);
                  b.innerHTML =element.category; 
                  const c = newCell.insertCell(2);
                  c.innerHTML =element.quantity; 
                  const d = newCell.insertCell(3);
                  d.innerHTML =element.price; 
               
                 
          })
          
      })
  .catch(error => console.error('Error:', error));
  
  }else{
   
    const none = document.querySelector(".nones");
    const submit = document.querySelector(".submit");
    const tot = document.querySelector(".tot");
    const table = document.getElementById("mytable");
    table.remove();
    submit.remove();
    tot.remove();
    none.innerHTML=`Cart Empty`
    none.classList.add("none");
  }
} 
populate();
const checkout= async () =>{
  const cart = JSON.parse(localStorage.getItem('cart'))
  let data = {productsId:cart[0].id,Total:cart[0].price,quantity:cart[0].quantity};
  console.log(data);
  const sale = fetch(`http://localhost:3000/api/v1/sales/`,{
   method: 'POST', // or 'PUT'
   body: JSON.stringify(data), 
   headers:{
       'Content-Type': 'application/json',
       'token': JSON.parse(localStorage.getItem('token')).token
   }
   })
.then(res => res.json())
.then(response => response.Order.saleid)

const saleid = await sale;
 let sales =[]

for(i=1;i<cart.length;i++){
sales.push( {'productsId':cart[i].id,'Total':cart[i].price,'quantity':cart[i].quantity})
}
sales.forEach(element=>{
  fetch(`http://localhost:3000/api/v1/sales/cart/${saleid}`,{
   method: 'POST', // or 'PUT'
   body: JSON.stringify(element), 
   headers:{
       'Content-Type': 'application/json',
       'token': JSON.parse(localStorage.getItem('token')).token
   }
   })
.then(res => res.json())
.then(response => console.log(response))
})
}

const btn = document.querySelector(".submit");
btn.addEventListener("click",()=>{
  checkout();
  toastr.success(`sale succesfully made`);
  localStorage.removeItem("cart");
  populate();
});
