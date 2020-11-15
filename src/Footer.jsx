
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./Cssmain.css";
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <>
        <div>
<footer class="footer_style">
<main class="container-fluid">
 <div class="row p-3">
  <div class="col-md-5 col-12 col-lg-5 col-xxl-5 offset-md-1"> 
   <h6 class="mt-5 text-justify mr-5"> Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.
Currently v4.5.2. The Bootstrap Blog is open source under the MIT license. </h6>
   <h6 class="text-capitalize p-4"> &#169 2020 by <i class="fas fa-heart text-warning"></i> sougata sikdar. All right reserved. </h6>
  </div>

  <div class="col-md-4 col-8 mt-4 mt-sm-5 pt-md-0 p-4">
    <h4>Contacts</h4>
              <dl>
                <dt><h5 class="pt-2"><i class="fas fa-map-marker-alt"></i> Address:</h5></dt>
                <dd><h6>Kolkata, WestBengal </h6></dd>
              </dl>
              <dl>
                <dt><h5 class="pt-2"><i class="fas fa-envelope"></i> email:</h5></dt>
                <dd><h6><a to="mailto:thapa@thapa.com" >sougata.sikdar1997@mail.com</a></h6></dd>
              </dl>
              <dl>
                <dt><h5 class="pt-2"><i class="fas fa-phone"></i> phones:</h5></dt>
                <dd><h6><a href="tel:1234567898">+91 1234567898</a> <span>or</span> <a href="tel:8697000000">+91 8697000000 </a></h6>
                </dd>
              </dl>
  </div>

  <div class="col-md-2 col-3 mt-4  mt-sm-5 pt-md-0 p-4">
   <h4 class="pb-2">Links</h4>
              <ul>
                <li><h6><NavLink to="/Service">Services</NavLink></h6></li>
                <li><h6><NavLink to="/">Portfolio</NavLink></h6></li>
                <li><h6><NavLink to="/">Home</NavLink></h6></li>
                <li><h6><NavLink to="/Contact">Contacts</NavLink></h6></li>
                <li><h6><NavLink to="/About">About</NavLink></h6></li>
              </ul>
  </div>
 </div>

 <div class="d-flex flex-row justify-content-center align-items-center flex-wrap sougata">

   <div class="p-md-5 p-4 flex-fill "><h4><a href="https://www.facebook.com/sougata.sikdar.14/"> <i class="fab fa-facebook-square"></i> <span>  Facebook</span> </a></h4> </div>

   <div class="p-md-5 p-2 flex-fill "><h4><a href="https://www.instagram.com/"><i class="fab fa-instagram"></i><span>  Instagram</span></a></h4></div>

   <div class="p-md-5 p-2 flex-fill "><h4><a href="#"><i class="fab fa-twitter"></i><span>  Twitter</span></a></h4></div>

   <div class="p-md-5 p-4 flex-fill "><h4><a href="https://www.youtube.com/"><i class="fab fa-youtube"></i><span> Youtube</span></a></h4></div>
  
 </div>
</main>
</footer>
</div>

        </>
    );
};
export default Footer;