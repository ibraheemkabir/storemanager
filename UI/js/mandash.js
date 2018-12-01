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

  }else if(token.priviledge!=1) {
      document.body.classList.add(".has-overlay");
      toastr.error(`you are not authorised to view this page`);
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


window.onscroll = () => {
    const nav = document.querySelector('.new-wrapper');
    nav.classList.add("scroll");
  };

  (function(){
    
   const icon = document.getElementsByClassName('icon');
   const products = document.getElementsByClassName('products');
  
    /* Functions */
    // Has class
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
fetch(`http://localhost:3000/api/v1/sales/`,{
    method: 'GET', // or 'PUT'
    headers:{
        'Content-Type': 'application/json; charset=utf-8',
        'token': JSON.parse(localStorage.getItem('token')).token
    }
    })
.then(res => res.json())
.then(response => 
    
    {
        const table = document.getElementById("mytable");
       
        if(response.result[0].sales=== 0){
            const y = table.insertRow(2);
            y.innerHTML ='There have been no recent sales';
        }
        let quantity=0;
        let total=0;
        
        quantity= response.result[0].sales.length;
        total= `N${response.result[0].total}`;
      const value=document.querySelector(".value");
      value.innerHTML = total;
      const value2=document.querySelector(".value2");
      value2.innerHTML = quantity;   
        
    const map1 = response.result[0].sales.map(x=>x);
    
    map1.forEach(element => {
        quantity+=1;
        const y = table.rows.length;
        
            const newCell   = table.insertRow(y);
            
                const a = newCell.insertCell(0);
                a.innerHTML =element.saleid; 
                const b = newCell.insertCell(1);
                b.innerHTML =element.attendant; 
                const c = newCell.insertCell(2);
                c.innerHTML =element.quantity; 
                const d = newCell.insertCell(3);
                d.innerHTML =element.product; 
                const e = newCell.insertCell(4);
                e.innerHTML =element.price; 
             
               
        })
        
    })
.catch(error => console.error('Error:', error));
