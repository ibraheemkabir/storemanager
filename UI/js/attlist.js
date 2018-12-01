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
      fetch(`http://localhost:3000/api/v1/users/${id}`,{
        method: 'DELETE', // or 'PUT' // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('token')).token
    
        }
        })
        .then(res => res.json())
        .then(response => 
    {
      console.log(response);
    })
  }
  toasterOptions();

  const newatt = (data) =>{
    fetch(`http://localhost:3000/api/v1/users/auth/signup`,{
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
    toastr.success(`attendant account succesfully created`);

  })
}

    fetch('http://localhost:3000/api/v1/users',{
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
          toastr.success(`attendant ${element.firstname} ${element.lastname} account succesfully deleted`);
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
 