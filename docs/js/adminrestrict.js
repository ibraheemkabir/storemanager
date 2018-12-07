window.addEventListener("load", ()=>{
    if(!token){
        document.body.classList.add(".has-overlay");
        toastr.error(`you must be logged in to access this page`);
        setTimeout(() => window.location.assign('login.html'), 1000);

    }else if(token.priviledge!=1) {
        document.body.classList.add(".has-overlay");
        toastr.error(`you are not authorised to view this page`);
        setTimeout(() => window.history.back(), 300);
    }else{
        
    }
});