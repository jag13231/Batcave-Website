import Logo from "../../Assets/Logo.png";
import "./Header.css";
import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { FaBars,FaTimes } from "react-icons/fa";
const Header = () => {
  const[icon,setIcon] = useState(false)
  const handleClick = () => {
    setIcon(!icon)
  }
  const closeSideBar = () => {
    setIcon(false)
  }
  return (
    <>
      <div className="navbar_container">
        <img src={Logo} alt="Logo" />
        <div className="menu-icon" onClick={handleClick}>{icon ? <FaTimes className="fa-times"></FaTimes>:<FaBars className="fa-bars"></FaBars>}
        </div>
        <div className="navItems">
          <ul className={ icon ? 'nav-menu active':'nav-menu'}>
            <li className="nav-link" onClick={closeSideBar}><Link to = '/'>Home</Link> </li>
            <li className="nav-link" onClick={closeSideBar}><Link  to = '/'>About us</Link> </li>
            <li className="nav-link" onClick={closeSideBar}><Link  to = '/events'>Event</Link> </li>
            <li className="nav-link" onClick={closeSideBar}><Link  to = '/'>Gallery</Link> </li>
            <li className="nav-link" onClick={closeSideBar}><Link  to = '/blog'> News / Blogs </Link></li>
            <li className="nav-link" onClick={closeSideBar}><Link  to = '/'>Membership</Link> </li>
            <li className="nav-link" onClick={closeSideBar}><Link  to = '/'>Contact</Link> </li>
            <li><button className="navButton">Login</button></li>
          </ul>
        </div>
        <button className="res-Button">Login</button>
      </div>
    </>
  );
};

export default Header;
