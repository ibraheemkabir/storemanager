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

    }else if(token.priviledge!=1) {
        document.body.classList.add(".has-overlay");
        toastr.error(`you are not authorised to view this page`);
        setTimeout(() => window.location.assign('login.html'), 1000);

    }else{
        
    }
});
const art = document.querySelector('article');
const nav = document.querySelector('header');
const id = JSON.parse(localStorage.getItem('token')).userid;
fetch(`http://localhost:3000/api/v1/sales/`,{
    method: 'GET', // or 'PUT'
    headers:{
        'Content-Type': 'application/json; charset=utf-8',
        'token': JSON.parse(localStorage.getItem('token')).token
    }
    })
.then(res => res.json())
.then(response => 
    
    {
        const table = document.getElementById("mytable");
        console.log(response);
        if(response.result.length === 0){
            const y = table.insertRow(2);
            y.innerHTML ='There have been no recent sales';
        }
        const arr=[];
        let quantity=0;
        let total= 0;
    const map1 = response.result[0].sales.map(x=>x);
    
    map1.forEach(element => {
        quantity+=1;
        const y = table.rows.length;
        total+=element.Total;
            const newCell   = table.insertRow(y);
            
                const a = newCell.insertCell(0);
                a.innerHTML =element.saleid; 
                const b = newCell.insertCell(1);
                b.innerHTML =element.date; 
                const c = newCell.insertCell(2);
                c.innerHTML =element.product; 
                const d = newCell.insertCell(3);
                d.innerHTML =element.price; 
             
               
        })
       
    })
.catch(error => console.error('Error:', error));
