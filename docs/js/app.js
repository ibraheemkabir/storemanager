let token = JSON.parse(localStorage.getItem('token'));

const toast= (msg) => {
  const div = document.createElement("div");
  div.id='toast';
  div.className= 'show';
  const text = document.createTextNode(msg);
  div.appendChild(text);
  document.body.appendChild(div);

  setTimeout(()=>{
    div.className=div.className.replace("show","");
    div.parentNode.removeChild(div);
  },3000);

}

const toasterror = (msg) => {
  const div = document.createElement("div");
  div.id='toasterror';
  div.className= 'show';
  const text = document.createTextNode(msg);
  div.appendChild(text);
  document.body.appendChild(div);

  setTimeout(()=>{
    div.className=div.className.replace("show","");
    div.parentNode.removeChild(div);
  },3000);

}

const attendantdashboard = ()=>{
let token = JSON.parse(localStorage.getItem('token'));

var toggle = document.querySelector(".nav-toggle");
var tog = document.querySelector("HTML");

function toggleModal() {
    toggle.classList.toggle("active");
    tog.classList.toggle("openNav")
}


toggle.addEventListener("click", toggleModal);
const id = JSON.parse(localStorage.getItem('token')).userid;
fetch(`https://store-maneger.herokuapp.com/api/v1/sales/${id}`,{
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
       
        if(response.cart[0].Product_Details.length === 0){
            const y = table.insertRow(2);
            y.innerHTML ='There have been no recent sales';
        }
        const arr=[];
        let quantity=0;
        let total=0;
        total= `N${response.cart[0].SaleTotal}`;
        quantity= response.cart[0].Product_Details.length;
      const value=document.querySelector(".value");
      value.innerHTML = total;
      const value2=document.querySelector(".value2");
      value2.innerHTML = quantity;   
    const map1 = response.cart[0].Product_Details.map(x=>x);
    
    map1.forEach(element => {
        quantity+=1;
        const y = table.rows.length;
        
            const newCell   = table.insertRow(y);
            
                const a = newCell.insertCell(0);
                a.innerHTML =element.saleid; 
                const b = newCell.insertCell(1);
                b.innerHTML =element.quantity; 
                const c = newCell.insertCell(2);
                c.innerHTML =element.product; 
                const d = newCell.insertCell(3);
                d.innerHTML =element.price; 
             
               
        })
        
    })
.catch(error => console.error('Error:', error));

}
const attendantlist = () => {
let token = JSON.parse(localStorage.getItem('token'));
window.addEventListener("load", ()=>{
  if(!token){
      document.body.classList.add(".has-overlay");
      toasterror(`you must be logged in to access this page`);
      setTimeout(() => window.location.assign('login.html'), 1000);

  }else if(token.priviledge!=1) {
      document.body.classList.add(".has-overlay");
      toasterror(`you are not authorised to view this page`);
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


  (function(){
    
   const icon = document.getElementsByClassName('icon');
   const products = document.getElementsByClassName('products');
  
    function hasClass(elem, className) {
      return elem.classList.contains(className);
    }
  
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

 const modal = document.querySelector(".modal");
   const trigger = document.querySelector("#atts");
   const closeButton = document.querySelector(".close-button");

    function toggleModal2() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal2();
        }
    }

    trigger.addEventListener("click", toggleModal2);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
   const modal2 = document.querySelector(".modal2");
   const trigger2 = document.querySelector(".icon");
   const closeButton2 = document.querySelector(".close-button");

    function toggleModal2() {
        modal2.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal2) {
            toggleModal2();
        }
    }

    trigger2.addEventListener("click", toggleModal2);
    closeButton2.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);

    const delatt = (id) =>{
      fetch(`https://store-maneger.herokuapp.com/api/v1/users/${id}`,{
        method: 'DELETE', // or 'PUT' // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('token')).token
        .then(res.json())
        .then(response => 
    {
      console.log(response);
    })
  }
});
}

  const newatt = (data) =>{
    fetch(`https://store-maneger.herokuapp.com/api/v1/users/auth/signup`,{
      method: 'POST', // or 'PUT' // data can be `string` or {object}!
      body: JSON.stringify(data), // data can be `string` or {object}
      headers:{
        'Content-Type': 'application/json',
        'token': JSON.parse(localStorage.getItem('token')).token
      }
      })
      .then(res => res.json())
      .then(response => 
  {
    toast(`attendant account succesfully created`);

  })
}

    fetch('https://store-maneger.herokuapp.com/api/v1/users',{
    method: 'GET', // or 'PUT' // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json',
      'token': JSON.parse(localStorage.getItem('token')).token

    }
    })
.then(res => res.json())
.then(response => 
    {
      const map1= response.attendants;
      map1.forEach(element => {
        const sign = document.createElement("article");
        const sig = document.querySelector(".products");
  
        const signs = document.querySelectorAll(".product");
       
        const cln =  signs[0].querySelector(".product__inner").cloneNode(true);
        const name = cln.querySelector(".name");
        const date = cln.querySelector(".date");
        const email = cln.querySelector(".email");
        const phone = cln.querySelector(".phone");
        const username = cln.querySelector(".username");
        const address = cln.querySelector(".address");
        const del = cln.querySelector(".del");
        del.value=`${element.authid}`;
        name.innerHTML= `${element.firstname} ${element.lastname}`;
        date.innerHTML=`${element.created}`;
        email.innerHTML=`${element.email}`;
        phone.innerHTML=`${element.phonenumber}`;
        address.innerHTML=`${element.address}`;
        username.innerHTML=`${element.username}`;
        sign.appendChild(cln);
        sign.classList.add("product");
        sig.appendChild(sign);
        del.addEventListener("click",()=>{
          delatt(del.value);
          toast(`attendant ${element.firstname} ${element.lastname} account succesfully deleted`);
          sign.remove();
        })
      });
  
    })
.catch(error => console.error('Error:', error));

const user = document.querySelector(".use");
const pass = document.querySelector(".pas");
const register = document.querySelector(".register");

register.addEventListener("click",()=>{
  console.log(user);
  const data = {username: user.value,password: pass.value};
  newatt(data);
  toggleModal2();
})
 
}
const managerdash = () => { 
let token = JSON.parse(localStorage.getItem('token'));
window.addEventListener("load", ()=>{
  if(!token){
      document.body.classList.add(".has-overlay");
      toasterror(`you must be logged in to access this page`);
      setTimeout(() => window.location.assign('login.html'), 1000);

  }else if(token.priviledge!=1) {
      document.body.classList.add(".has-overlay");
      toasterror(`you are not authorised to view this page`);
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
fetch(`https://store-maneger.herokuapp.com/api/v1/sales/`,{
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

}
const neworder = () => { 
let token = JSON.parse(localStorage.getItem('token'));
window.addEventListener("load", ()=>{
  if(!token){
      document.body.classList.add(".has-overlay");
      toasterror(`you must be logged in to access this page`);
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
    fetch(`https://store-maneger.herokuapp.com/api/v1/sales/`,{
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
  const sale = fetch(`https://store-maneger.herokuapp.com/api/v1/sales/`,{
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
  fetch(`https://store-maneger.herokuapp.com/api/v1/sales/cart/${saleid}`,{
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
  toast(`sale succesfully made`);
  localStorage.removeItem("cart");
  populate();
});

}
const products = () => { 
window.addEventListener("load", ()=>{
  let token = JSON.parse(localStorage.getItem('token'));
    if(!token){
        document.body.classList.add(".has-overlay");
        toasterror(`you must be logged in to access this page`);
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

      fetch(`https://store-maneger.herokuapp.com/api/v1/products/${id}`,{
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
          toast(`you now have ${quantity}  ${name} in the cart`);  
 
        }else{
        carts.push({'id':id,'name':name,'price':price,'quantity':1,'category':category});
        localStorage.setItem('cart', JSON.stringify(carts));      
        toast(`product ${name} successfully added to cart`);  
  
        }
      }else{
        carts.push({'id':id,'name':name,'price':price,'quantity':1,'category':category});
        localStorage.setItem('cart', JSON.stringify(carts)); 
        toast(`product ${name} successfully added to cart`);  
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
     images.src = `../${imager}`;
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
        toast(`product successfully added`);
        const product=document.querySelector(".product");
        product.remove();
        products();
      }else{
        
        toasterror(`${response.error}`);
        
      }
    } )
    .catch(error => console.error('Error:', error));
    
}

const addCategory = () => {
  const categories = document.querySelector(".categories");
  const data = {category:categories.value};
      fetch('https://store-maneger.herokuapp.com/api/v1/category',{
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
            toast(`category ${response.categories.category} successfully added`);
          }else{
            toasterror(`${response.error}`);
          }         
        }
      })
      .catch(error => console.error('Error:', error));
      
  }

  
  fetch('https://store-maneger.herokuapp.com/api/v1/category',{
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

  fetch(`https://store-maneger.herokuapp.com/api/v1/category/${id}`,{
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
    toast(response.message);
  }else{
    toasterror(`${response.error}`);
  }        
})
.catch(error => console.error('Error:', error));
  
}


const catstructure = (order, category, id)=>{
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
}
const profile = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    window.addEventListener("load", ()=>{
      if(!token){
          document.body.classList.add(".has-overlay");
          toasterror(`you must be logged in to access this page`);
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
    
    
      (function(){
        /**
         * jQuery
         */
        /*constiables */
        /*var icon = $('.icon');
       const products = $('.products');*/
      
      
        /* Do Something */
        /*$(icon).click(function(){
          if($(this).hasClass('active')) return;
          $(products).toggleClass('list').toggleClass('grid');
          $(icon).toggleClass('active');
        });*/
      
      
        /**
         * Vanilla JS
         */
        /*constiables */
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
      const first=document.getElementById("first");
      const last=document.getElementById("last");
      const email=document.getElementById("email");
      const age=document.getElementById("age");
      const phone=document.getElementById("phone");
      const add=document.getElementById("address");
      const contact=document.getElementById("contact");
     const modal = document.querySelector(".modal");
       const trigger = document.querySelector("#atts");
       const closeButton = document.querySelector(".close-button");
    
        function toggleModal() {
            modal.classList.toggle("show-modal");
        }
    
        function windowOnClick(event) {
            if (event.target === modal) {
                toggleModal();
            }
        }
    
        trigger.addEventListener("click", toggleModal);
        closeButton.addEventListener("click", toggleModal);
        window.addEventListener("click", windowOnClick);
    
    const id = JSON.parse(localStorage.getItem('token')).userid;
    const pop = () => {
      const values=document.querySelector(".product__details");
      while (values.firstChild) {
        values.removeChild(values.firstChild);
    }
      const vas=values.querySelector("section");
      if(vas){
       vas.remove();
      }
      fetch(`https://store-maneger.herokuapp.com/api/v1/users/730`,{
        method: 'GET', // or 'PUT'
        headers:{
        'Content-Type': 'application/json; charset=utf-8',
        'token': JSON.parse(localStorage.getItem('token')).token
        }
        })
      .then(res => res.json())
      .then(response =>  
        {
          console.log(response);
          const map1 = response.attendant.map(x=>x);
          map1.forEach(element => {
            for (var property1 in element) {
              if(property1=== 'id'||property1==='authid'||property1==='edited'||property1==='created'){
                continue;
              }
              const value=document.querySelector(".product__details");
              const first=document.getElementById("first");
              const last=document.getElementById("last");
              const email=document.getElementById("email");
              const age=document.getElementById("age");
              const phone=document.getElementById("phone");
              const add=document.getElementById("address");
              const contact=document.getElementById("contact");
              first.value= element.firstname;
              last.value=element.lastname;
              email.value=element.email;
              age.value=element.age;
              phone.value=element.phonenumber;
              add.value=element.address;
              contact.value=element.emergency_contact;
              const section = document.createElement("SECTION");
              const span = document.createElement("SPAN");
              const span1 = document.createElement("SPAN");
              section.classList.add("product__price");
              span1.classList.add("info");
              value.appendChild(section)
              section.appendChild(span);
              section.appendChild(span1);
              span.innerHTML= `${property1}:`;
              span1.innerHTML= element[property1];
              
            }
          });
        }
        )
      .catch(error => console.error('Error:', error));
        
    }
    pop();
    const populate = (data) =>{
      fetch(`https://store-maneger.herokuapp.com/api/v1/users/info/730`,{
        method: 'PUT', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
        'Content-Type': 'application/json; charset=utf-8',
        'token': JSON.parse(localStorage.getItem('token')).token
        }
        })
      .then(res => res.json())
      .then(response =>  
        {
          console.log(response);
        }
        )
      .catch(error => console.error('Error:', error));
        
    }
    const submit=document.querySelector(".submit");
    submit.addEventListener("click",()=>{
      const data = {firstname: first.value,lastname: last.value,email: email.value,age: age.value,phonenumber: phone.value,address: add.value,contact: contact.value};
      populate(data);
      toggleModal();
      pop();
      toast(`attendant info succesfully updated`);
    
    })
}
const records = () => {
let token = JSON.parse(localStorage.getItem('token'));
window.addEventListener("load", ()=>{
    if(!token){
        document.body.classList.add(".has-overlay");
        toasterror(`you must be logged in to access this page`);
        setTimeout(() => window.location.assign('login.html'), 1000);

    }else if(token.priviledge!=1) {
        document.body.classList.add(".has-overlay");
        toasterror(`you are not authorised to view this page`);
        setTimeout(() => window.location.assign('login.html'), 1000);

    }else{
        
    }
});
const art = document.querySelector('article');
const nav = document.querySelector('header');
const id = JSON.parse(localStorage.getItem('token')).userid;
fetch(`https://store-maneger.herokuapp.com/api/v1/sales/`,{
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
        console.log(response);
        if(response.result.length === 0){
            const y = table.insertRow(2);
            y.innerHTML ='There have been no recent sales';
        }
        const arr=[];
        let quantity=0;
        let total= 0;
    const map1 = response.result[0].sales.map(x=>x);
    
    map1.forEach(element => {
        quantity+=1;
        const y = table.rows.length;
        total+=element.Total;
            const newCell   = table.insertRow(y);
            
                const a = newCell.insertCell(0);
                a.innerHTML =element.saleid; 
                const b = newCell.insertCell(1);
                b.innerHTML =element.date; 
                const c = newCell.insertCell(2);
                c.innerHTML =element.product; 
                const d = newCell.insertCell(3);
                d.innerHTML =element.price; 
             
               
        })
       
    })
.catch(error => console.error('Error:', error));

}
const login = () => {
const login = document.getElementById("login");
const user = document.querySelector(".user");
const pass = document.querySelector(".pass");
const error = document.getElementById("response");
const  init = () => {
    const inputFields = document.querySelectorAll('input');
    inputFields.forEach((inputField) => {
        if (inputField.value) inputField.classList.add('active');
        else inputField.parentNode.classList.remove('error');
        inputField.addEventListener('focus', function () {
          this.classList.add('active');
          this.classList.remove('error');
         
        });
        inputField.addEventListener('blur', function () {
          this.classList.remove('error');
          error.innerHTML='';
          
        });
        return inputField;
      });
}

var url = 'localhost:3000/api/v1/users/signin';
init();
const validation = (data) => {
   
if(user.value==='' && pass.value === ''){
    user.classList.add("error");
     pass.classList.add("error");
    error.innerHTML="username and password field are required";
}else if(user.value===''){
    pass.classList.add("error");   
    toast('username field is required');
}else if(pass.value===''){
    pass.classList.add("error");
    toasterror('password field is required');
}else
fetch('http://localhost:3000/api/v1/users/auth/signin',{
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
        
      'Content-Type': 'application/json',
    }
    })
.then(res => res.json())
.then(response => 
    {
        if(response.token){
            localStorage.setItem('token', JSON.stringify(response));
            if(response.priviledge != 1){
                setTimeout(() => window.location.assign('attendantdash.html'), 1000);
            }else {setTimeout(() => window.location.assign('managerdash.html'), 1000);}
        }else{
          toasterror(response.message);
        }
    })
.catch(error => console.error('Error:', error));
}

login.addEventListener("click", () => {  
    const data = {username: user.value,password: pass.value};
    validation(data);
    
}); 

}

switch (window.location.pathname) {
    case '/storemanager/docs/attendantdash.html':
    attendantdashboard();
      break;
      case '/storemanager/docs/attendantlist.html':
      attendantlist();
        break; 
        case '/storemanager/docs/managerdash.html':
        attendantlist();
          break;
          case '/storemanager/docs/newOrder.html':
          neworder();
            break;
            case '/Users/kabiribraheem/Documents/bootcamp/storemanager/docs/products.html':
          products();
            break;  
            case '/storemanager/docs/profile.html':
          profile();
            break;
            case '/storemanager/docs/salesrecords.html':
          records();
            break;
            case '/Users/kabiribraheem/Documents/bootcamp/storemanager/docs/login.html':
          login();
            break;       
   
}