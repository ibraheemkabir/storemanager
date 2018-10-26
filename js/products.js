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