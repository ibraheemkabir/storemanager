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


