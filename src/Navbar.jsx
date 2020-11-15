import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import 'tachyons';
import { NavLink } from 'react-router-dom';
import "./Cssmain.css";


const Navbar = () =>
{
    return (
        <>
<nav  className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink  className="navbar-brand  px-5" to="/">SOUGATA <FavoriteIcon className="text-danger "/></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto px-5">
      <li className="nav-item ">
        <NavLink activeClassName="menu_active" exact className="nav-link navmenu active" aria-current="page" to="/"> Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" className="nav-link navmenu" to="/About">About Us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" className="nav-link navmenu" to="/Service">Services</NavLink>
      </li>
    
      <li className="nav-item">
        <NavLink activeClassName="menu_active" className="nav-link navmenu" to="/Contact" >Contact Us</NavLink>
      </li>
    </ul>
  
  </div>
</nav>
</>
    );
};

export default Navbar;