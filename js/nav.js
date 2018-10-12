var modal = document.querySelector(".nav-toggle");
var mod = document.querySelector("HTML");

function toggleModal() {
    modal.classList.toggle("active");
    mod.classList.toggle("openNav")
}


modal.addEventListener("click", toggleModal);

