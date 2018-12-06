document.write('\
\
<li>\
<a class="dash" href="attendantdash.html">Dashboard</a>\
\<span class="icon">\
\
<img id="icon" src="images/dashbord.png">\
</i></span></li>\
<li class="menu-hasdropdown">\
    <a href="newOrder.html">New Order!</a><span class="icon"><img id="icon" src="images/order.png"></i></span>\
</li>\
<li><a href="products.html">Products Available.</a><span class="icon"><img id="icon" src="images/personn.png"></i></span></li>\
\ <li class="res1">\
<a href="attendantlist.html">attendantlist</a><span class="icon"><img id="icon" src="images/order.png"></i></span>\
</li>\
<li class="res2"><a href="salesrecords.html">sales Records</a><span class="icon"><img id="icon" src="images/records.png"></i></span></li>\
<li class="res3"><a href="profile.html">My  Profile</a><span class="icon"><img id="icon" src="images/records.png"></i></span></li>\
\
');
let tokens = JSON.parse(localStorage.getItem('token'));
const dash= document.querySelector(".dash");
const res1= document.querySelector(".res1");
const res2= document.querySelector(".res2");
const res3= document.querySelector(".res3");

if(tokens.priviledge!=1){

        res1.setAttribute('style','display:none') 
        res2.setAttribute('style','display:none') 
    
    dash.href="attendantdash.html" 
  }else{
    dash.href="managerdash.html" 
    res3.setAttribute('style','display:none') 

  }