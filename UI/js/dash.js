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

var toggle = document.querySelector(".nav-toggle");
var tog = document.querySelector("HTML");

function toggleModal() {
    toggle.classList.toggle("active");
    tog.classList.toggle("openNav")
}


toggle.addEventListener("click", toggleModal);
const id = JSON.parse(localStorage.getItem('token')).userid;
fetch(`http://localhost:3000/api/v1/sales/${id}`,{
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
       
        if(response.cart[0].Product_Details.length === 0){
            const y = table.insertRow(2);
            y.innerHTML ='There have been no recent sales';
        }
        const arr=[];
        let quantity=0;
        let total=0;
        total= `N${response.cart[0].SaleTotal}`;
        quantity= response.cart[0].Product_Details.length;
      const value=document.querySelector(".value");
      value.innerHTML = total;
      const value2=document.querySelector(".value2");
      value2.innerHTML = quantity;   
    const map1 = response.cart[0].Product_Details.map(x=>x);
    
    map1.forEach(element => {
        quantity+=1;
        const y = table.rows.length;
        
            const newCell   = table.insertRow(y);
            
                const a = newCell.insertCell(0);
                a.innerHTML =element.saleid; 
                const b = newCell.insertCell(1);
                b.innerHTML =element.quantity; 
                const c = newCell.insertCell(2);
                c.innerHTML =element.product; 
                const d = newCell.insertCell(3);
                d.innerHTML =element.price; 
             
               
        })
        
    })
.catch(error => console.error('Error:', error));
