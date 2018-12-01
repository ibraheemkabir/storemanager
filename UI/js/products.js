let token = JSON.parse(localStorage.getItem('token'));

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
window.addEventListener("load", ()=>{
  let token = JSON.parse(localStorage.getItem('token'));
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


 const modal2 = document.querySelector(".modal2");
   const trigger2 = document.querySelector(".actives");
   const closeButton2 = document.querySelector(".close-buttons");

    function toggleModal2() {
        modal2.classList.toggle("show-modal");
    }

    function windowOnClick2(event) {
        if (event.target === modal2) {
            toggleModal2();
        }
    }

    trigger2.addEventListener("click", toggleModal2);
    closeButton2.addEventListener("click", toggleModal2);
    window.addEventListener("click", windowOnClick2);

   const modal3 = document.querySelector(".modal3");
   const trigger3 = document.querySelector(".actives2");
   const closeButton3 = document.querySelector(".close-buttons");

    function toggleModal3() {
        modal3.classList.toggle("show-modal");
    }

    function windowOnClick3(event) {
        if (event.target === modal3) {
            toggleModal3();
        }
    }

    trigger3.addEventListener("click", toggleModal3);
    closeButton3.addEventListener("click", toggleModal3);
    window.addEventListener("click", windowOnClick3);
 
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


    const deleteproduct =(id)=>{

      fetch(`http://localhost:3000/api/v1/products/${id}`,{
        method: 'DELETE', // or 'PUT'
    // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('token')).token
        }
        })
    .then(res => res.json())
    .then(response => {
     console.log(response);       
    })
    .catch(error => console.error('Error:', error));
      
    }
    let sid=[];
    let quantity=1;
    let carts = [];
    const cart = (id,price,category,name) => {
      if(localStorage.getItem('cart')){
        for(i=0;i<carts.length;i++){
          sid.push(carts[i].id);
        }
        var n = sid.includes(id);
        if(n===true){
          const pos = carts.findIndex( x => x.id === id );
          quantity=carts[pos].quantity;
          quantity+=1;
          carts.splice(pos,1,{'id':id,'name':name,'price':price,'quantity':quantity,'category':category});
          localStorage.setItem('cart', JSON.stringify(carts));
          toastr.success(`you now have ${quantity}  ${name} in the cart`);  
 
        }else{
        carts.push({'id':id,'name':name,'price':price,'quantity':1,'category':category});
        localStorage.setItem('cart', JSON.stringify(carts));      
        toastr.success(`product ${name} successfully added to cart`);  
  
        }
      }else{
        carts.push({'id':id,'name':name,'price':price,'quantity':1,'category':category});
        localStorage.setItem('cart', JSON.stringify(carts)); 
        toastr.success(`product ${name} successfully added to cart`);  
      }
    }
    
const structure = (product,name, category, quantity, prices, date, imager, id)=>{
     const article = document.createElement("ARTICLE");
     const inner = document.createElement("DIV");
     const image = document.createElement("SECTION");
     const price = document.createElement("SECTION");
     const details = document.createElement("DIV");
     const productname = document.createElement("SPAN");
     const productcategory = document.createElement("SPAN");
     const productprice = document.createElement("SPAN");
     const productquantity = document.createElement("SPAN");
     const productdate = document.createElement("SPAN");
     const images = document.createElement('IMG');
     const del = document.createElement('IMG');
     const edit = document.createElement('IMG');
     const btnspan = document.createElement('DIV');
     const btn = document.createElement('BUTTON');
     images.src = `../storemanager/${imager}`;
     del.src= 'images/delete.png';
     del.id= `${id}`;
     btn.id=`${id}`
     btn.price=`${prices}`
     btn.category=`${category}`
     btn.name=`${name}`
     edit.src='images/edit.png';
     product.appendChild(article);
     inner.appendChild(image);
     inner.appendChild(details);
     article.appendChild(inner);
     details.appendChild(price);
     price.appendChild(productname);
     price.appendChild(productcategory);
     price.appendChild(productprice);
     price.appendChild(productquantity);
     price.appendChild(productdate);
     price.appendChild(btnspan)
     price.appendChild(btnspan)
     image.appendChild(images);
     btnspan.appendChild(btn);
     btnspan.appendChild(del);
     btnspan.appendChild(edit);
     
      
      del.classList.add("dels");
      edit.classList.add("dels");
     article.classList.add("product");
     image.classList.add("product__image");
     details.classList.add("product__details");
     inner.classList.add("product__inner");
     price.classList.add("product__price"); 
     btn.classList.add("add")
     productname.innerHTML = `product name: ${name}`;
     productcategory.innerHTML = `product category: ${category}`;
     productquantity.innerHTML = `quantity in stock: ${quantity}`;
     productprice.innerHTML = `product price: ${prices}`;
     productdate.innerHTML = `Date stocked: ${date}`;
     btn.innerHTML = 'add to cart';
     if(token.priviledge!=1){
      
        del.setAttribute('style','display:none') 
        edit.setAttribute('style','display:none') 
      }
    
 del.addEventListener("click", () => {
   article.remove();
      deleteproduct(del.id);
   });


btn.addEventListener("click", () => {
    cart(btn.id,btn.price,btn.category,btn.name);
});

}

    
     
const products = () =>{
      fetch('http://localhost:3000/api/v1/products',{
        method: 'GET', // or 'PUT'
    // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('token')).token
        }
        })
    .then(res => res.json())
    .then(response => 
      {
        console.log(response);
        const product=document.querySelector(".products");
        const map1 = response.product.map(x=>x);
        map1.forEach(element => {
           structure(product,element.name,element.category,element.quantity,element.price,element.created,element.image,element.id);
           
          })
      }
      )
    .catch(error => console.error('Error:', error));
} 

products();


    const add= document.getElementById("add");
    const cat= document.getElementById("catsubmit");
const addProduct = () => {
const price= document.querySelector(".price");
const name = document.querySelector(".name");
const category = document.querySelector(".category");
console.log(category.value);
const quantity = document.querySelector(".quantity");
var image = document.getElementById("image").files[0];
var data = {name: name.value,category: category.value,price: price.value,quantity: quantity.value,image: image};
var formData = new FormData();
formData.append('name',name.value);
formData.append('category',category.value);
formData.append('price',price.value);
formData.append('quantity',quantity.value);
formData.append('image', image);
    fetch('http://localhost:3000/api/v1/products',{
      method: 'POST', // or 'PUT'
      body: formData, // data can be `string` or {object}!
      headers:{
                'token': JSON.parse(localStorage.getItem('token')).token
      }
    })
    .then(res => res.json())
    .then(response =>{
      if(!response.error){
        toastr.success(`product successfully added`);
        const product=document.querySelector(".product");
        product.remove();
        products();
      }else{
        
        toastr.error(`${response.error}`);
        
      }
    } )
    .catch(error => console.error('Error:', error));
    
}

const addCategory = () => {
  const categories = document.querySelector(".categories");
  const data = {category:categories.value};
      fetch('http://localhost:3000/api/v1/category',{
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!        // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('token')).token
        }
      })
      .then(res => res.json())
      .then(response =>{
        {
          if(response.categories){
            const product=document.querySelector(".catlist"); 
            catstructure(product,response.categories.category);
            toastr.success(`category ${response.categories.category} successfully added`);
          }else{
            toastr.error(`${response.error}`);
          }         
        }
      })
      .catch(error => console.error('Error:', error));
      
  }

  
  fetch('http://localhost:3000/api/v1/category',{
    method: 'GET', // or 'PUT'
// data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json',
      'token': JSON.parse(localStorage.getItem('token')).token
    }
    })
.then(res => res.json())
.then(response => 
  {
    console.log(response);
    const product=document.querySelector(".catlist");
      const map1 = response.categories.map(x=>x);
      map1.forEach(element => {
        const category = document.querySelector(".category");
        let options = document.createElement('option');
        options.text=element.category;
        category.appendChild(options);
        catstructure(product,element.category,element.id);
    
      })
  }
  )
.catch(error => console.error('Error:', error));

const deletecategory =(id)=>{

  fetch(`http://localhost:3000/api/v1/category/${id}`,{
    method: 'DELETE', // or 'PUT'
// data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json',
      'token': JSON.parse(localStorage.getItem('token')).token
    }
    })
.then(res => res.json())
.then(response => {
  if(response){
    toastr.success(response.message);
  }else{
    toastr.error(`${response.error}`);
  }        
})
.catch(error => console.error('Error:', error));
  
}


const catstructure = (order, category, id)=>{
  toasterOptions();
  const list = document.createElement("LI");
  const imgs = document.createElement("img");
  const im = document.createElement("i");
  order.appendChild(list);
  imgs.classList.add("del");
  list.innerHTML = `${category}`;
  list.appendChild(im);
  im.appendChild(imgs);
  imgs.src=`images/delete.png`;
  imgs.id=`${id}`;
  list.id=`${id}`;
  
  imgs.addEventListener("click", () => {
   deletecategory(imgs.id);
   list.animate({opacity: '0'},150, () =>{
     list.animate({height:'0px'},150,() => {
       list.remove();
   });
   });
});
}

add.addEventListener("click", () => {
    addProduct();
    
});

cat.addEventListener("click", () => {
    addCategory();
}); 

const hide= document.querySelector(".heads");
const hid= document.querySelector(".head");

if(token.priviledge!=1){
  hide.setAttribute('style','display:none') 
  hid.setAttribute('style','display:block')
}else{
  
}