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
   const modal = document.querySelector(".modal2");
   const trigger = document.querySelector(".icon");
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
