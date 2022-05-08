// let data=JSON.parse(localStorage.getItem('cartdata'));
import {navbar} from './component/navbar.js'
document.getElementById('navbar').innerHTML=navbar();
// import {footer_start} from './component/footer.js'
// document.getElementById('footer').innerHTML=footer_start();


let cart=JSON.parse(localStorage.getItem("cartdata"))||[];

if(cart==[]){
console.log("blank")
} 
console.log(cart)
document.querySelector(".noOfItem").innerText=Number(localStorage.getItem("quantity")) || cart.length;

if(cart.length>1){
  document.querySelector(".items").innerText="Items In Cart"
}
let mrp=0;
let totalmrp=0;
let totalprice=0;
let discounted;
appendcart(cart);

// console.log(container);
function appendcart(cart){
    let container=document.getElementById("addeditems");
    
    cart.map((elem,i)=>{
        let day=new Date().getDate()
        let month=new Date().getMonth()+1;
        let num=localStorage.getItem("quantity");

let s_img=document.createElement("div");
s_img.setAttribute("id", "s-img");
let logo_img=document.createElement("div");
logo_img.setAttribute("id", "logoimg");
let image=document.createElement("img");
image.src=elem.image_url;
logo_img.append(image);
s_img.append(logo_img);


totalmrp=totalmrp+(+(elem.mrp));

let s_text=document.createElement("div");
s_text.setAttribute("id", "s-text");
let top_row=document.createElement("div");
top_row.setAttribute("class", "toprow");
let cart_item=document.createElement("div");
cart_item.setAttribute("id", "cartitemname");
cart_item.innerText=elem.name;
let dltbtn=document.createElement("div");
dltbtn.setAttribute("id", "dltbtn");
dltbtn.innerHTML=`<img
src="https://assets.pharmeasy.in/web-assets/dist/2fb50086.svg"
alt=""
/>`;
top_row.append(cart_item,dltbtn);

let company=document.createElement("div");
company.setAttribute("id", "comapany");
company.innerText=elem.company;


let qty_price=document.createElement("div");
qty_price.setAttribute("class","qty_price");
let qty=document.createElement("div");
qty.setAttribute("class","qty");
qty.innerHTML=`<div class="qty">
<span class="num">Qty</span>
<select name="qty" id="quantity">
<option id="a" class="opt" ></option>
  <option id="a" class="opt" value="1">1</option>
  <option id="b" class="opt"  value="2">2</option>
  <option id="c" class="opt"  value="3">3</option>
  <option id="c" class="opt"  value="4">4</option>
  <option id="d"  class="opt" value="5">5</option>
  <option id="e"  class="opt" value="6">6</option>
  <option id="f"  class="opt" value="7">7 <span class="lightfont">Max Qty</span></option>
</select>`;



qty_price.append(qty);


let price_section=document.createElement('div');

price_section.setAttribute('id', 'price-section');

let discount=document.createElement('div');
discount.setAttribute('id', 'discount');
mrp=elem.mrp;
discount.innerHTML=` <span class="off">${elem.discount}</span>% Off
<span> &#8377;<del class="lightfont" id="del">${elem.mrp}</del> </span>`;
let price=document.createElement('div');
price.setAttribute('id', 'price')
price.style.textAlign="right";
price.innerHTML=`<span>&#8377;</span>${(elem.mrp-(elem.mrp/100)*elem.discount).toFixed(2)} <br>`;



 discounted = elem.mrp-(elem.mrp/100)*elem.discount;
console.log(discounted)

totalprice=totalprice+discounted;
console.log(totalprice)


price_section.append(discount,price)
qty_price.append(qty,price_section)

let delivery=document.createElement("div");
delivery.setAttribute("class","delivery");
delivery.innerHTML=` <span class="lightfont">Delivery</span>
<span class="minday">${day+4} may</span> -
<span class="maxday">${day+8} may </span>`;




let hr=document.createElement("p");
hr.innerHTML=`<hr>`;
// p.style.width="100%";
s_text.append(top_row,company,qty_price,price_section,delivery,hr);

container.append(s_img,s_text)
dltbtn.addEventListener("click",()=>{
  remove(elem,i)

})

    })
}

// let a=document.getElementById('quantity');
document.getElementById('quantity').addEventListener("click",()=>{
  let selected=document.getElementById('quantity').value;
  console.log(selected);
  let changedprice=discounted*(+(selected))
  document.getElementById("price").innerText=changedprice.toFixed(2);
  document.querySelector(".finalprice").innerText=(changedprice+totalprice).toFixed(2);
  document.querySelector("#final").innerText=(changedprice+totalprice).toFixed(2);
  document.querySelector(".noOfItem").innerText=cart.length+(+selected);
  localStorage.setItem("quantity",cart.length+(+selected))
  document.getElementById("del").innerText=+mrp*(+selected);
  if(selected===""){
    localStorage.setItem('quantity',selected);
    document.getElementById("price").innerText=discounted.toFixed(2);
    document.querySelector(".noOfItem").innerText=cart.length;
    // window.location.reload()
  }
  
  // document.querySelector(".num").innerText=localStorage.getItem("quantity");
})

// let b=document.querySelectorAll(".opt")
// console.log(b)
// b.map((element,i)=>{
//   elem.addEventListener("click",(e)=>{

//   })
// })
// b.addEventListener('click',()=>{
//   console.log(this.value);
//   let opt=document.getElementById('a').value;
//   console.log(opt);
// })
function remove(elem,i){
  cart.splice(i,1)
  localStorage.setItem("cartdata",JSON.stringify(cart));
  window.location.reload();
}
document.getElementById("mrp").innerText=totalmrp.toFixed(2)
document.querySelector(".finalprice").innerText=totalprice.toFixed(2)
document.getElementById("final").innerText=totalprice.toFixed(2);

console.log(totalprice.toFixed(2),totalmrp.toFixed(2))
let day=new Date().getDate()
let month=new Date().getMonth()+1;
// day=day.getDate();
// console.log(day)
// console.log(month)
// console.log(cart)
  
//   console.log(data);

  
localStorage.setItem("cartdata",JSON.stringify(data));

document.querySelector(".addaddress").addEventListener("click",()=>{

// window.location.href=""
})