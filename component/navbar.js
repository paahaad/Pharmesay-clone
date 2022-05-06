let navbar = () =>{
    return ` <div id="upper_nav">
     <div id="logo">
         <img src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" alt=""/> 
     </div>
       
     <div id="pinCode">
      <select>
          <option>Select Pincode
              <span style="background-color:#8897a2"><i class="fa-solid fa-caret-down"></i></span>
             
          </option>
      </select>
     </div>
     
     <div id="searchBar">
          <input  id="innerbar" type="text" placeholder="Search Medicines/Healthcare Products @18% off"
           class="Search"/>
          <div class="iconse">
           <i class="fa-solid fa-magnifying-glass fa-2x"></i>
        </div>
 
     </div>
 
 </div>
 
  <!-- LOWER NAVBAR START -->
 <div id="lowerNav">
     <div class="leftnav">
         <div class="let">
             <a href="ordermedicines.html">Order Medicines</a> 
             </div>
         <div class="let">
             <a href="hcareProduct.html">Healthcare Products</a> 
         </div>
         <div class="let">
             <a href="diagnose.html">Lab Tests</a>
         </div>
         <div class="let">
              <a href="diagnose.html">RTPCR</a>
         </div> 
     </div>
         
     <div class="rightnav">
         <div class="symbol1">
             <img class="on" src="https://assets.pharmeasy.in/web-assets/dist/275c07e1.svg" alt=""/>
             <h4 class="off"><a href="offer.html">Offers</a></h4>
         </div>
         <div class="symbol1">
             <img class="on" src="https://assets.pharmeasy.in/web-assets/dist/5eb42971.svg" alt=""/>
             <h4 class="off"><a href="login.html">Login/Signup</a></h4>
         </div>
         <div class="symbol1">
             <img class="on" src="https://assets.pharmeasy.in/web-assets/dist/21b0b5ba.svg" alt=""/>
             <h4 class="off"><a href="cart.html">Cart</a></h4>
         </div>
     </div>
 
 </div>`
 }
 
 export {navbar}