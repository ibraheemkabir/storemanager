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
  toasterOptions();
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
  fetch(`http://localhost:3000/api/v1/users/730`,{
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
  fetch(`http://localhost:3000/api/v1/users/info/730`,{
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
  toastr.success(`attendant info succesfully updated`);

})