var modal = document.querySelector(".nav-title");
    var trigger = document.querySelector(".submit");
    var closeButton = document.querySelector(".close-button");

    trigger.addEventListener("click", () => {
        location.href = "login.html";
    });  
    modal.addEventListener("click", () => {
        location.href = "index.html";
    });  

window.onscroll = () => {
        const nav = document.querySelector('.nav');
        if(this.scrollY <= 10) nav.classList.remove("scroll"); else nav.classList.add("scroll");
      };


