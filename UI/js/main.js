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


const login = document.getElementById("login");
const user = document.querySelector(".user");
const pass = document.querySelector(".pass");
const error = document.getElementById("response");
const  init = () => {
    const inputFields = document.querySelectorAll('input');
    inputFields.forEach((inputField) => {
        if (inputField.value) inputField.classList.add('active');
        else inputField.parentNode.classList.remove('error');
        inputField.addEventListener('focus', function () {
          this.classList.add('active');
          this.classList.remove('error');
         
        });
        inputField.addEventListener('blur', function () {
          this.classList.remove('error');
          error.innerHTML='';
          
        });
        return inputField;
      });
}

var url = 'localhost:3000/api/v1/users/signin';
init();
const validation = (data) => {
    toasterOptions();
if(user.value==='' && pass.value === ''){
    user.classList.add("error");
     pass.classList.add("error");
    error.innerHTML="username and password field are required";
}else if(user.value===''){
    pass.classList.add("error");   
    toastr.error('username field is required');
}else if(pass.value===''){
    pass.classList.add("error");
    toastr.error('password field is required');
}else
fetch('http://localhost:3000/api/v1/users/auth/signin',{
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
        
      'Content-Type': 'application/json',
    }
    })
.then(res => res.json())
.then(response => 
    {
        if(response.token){
            localStorage.setItem('token', JSON.stringify(response));
            if(response.priviledge != 1){
                setTimeout(() => window.location.assign('attendantdash.html'), 1000);
            }else {setTimeout(() => window.location.assign('managerdash.html'), 1000);}
        }else{
            toastr.error(response.message);
        }
    })
.catch(error => console.error('Error:', error));
}

login.addEventListener("click", () => {  
    const data = {username: user.value,password: pass.value};
    validation(data);
    
}); 


