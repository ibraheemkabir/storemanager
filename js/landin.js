var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".submit");
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

window.onscroll = () => {
        const nav = document.querySelector('.nav');
        if(this.scrollY <= 10) nav.classList.remove("scroll"); else nav.classList.add("scroll");
      };

