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
    /**
     * jQuery
     */
    /* Variables */
    /*var icon = $('.icon');
    var products = $('.products');*/
  
  
    /* Do Something */
    /*$(icon).click(function(){
      if($(this).hasClass('active')) return;
      $(products).toggleClass('list').toggleClass('grid');
      $(icon).toggleClass('active');
    });*/
  
  
    /**
     * Vanilla JS
     */
    /* Variables */
    var icon = document.getElementsByClassName('icon');
    var products = document.getElementsByClassName('products');
  
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

  var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".edit");
    var closeButton = document.querySelector(".close-button");

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
