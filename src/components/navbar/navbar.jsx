import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Trade from './links/trade/trade';
import Education from './links/education/education';
import About from './links/about/about';

import './navbar.scss';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open , setOpen] = useState(false)


  const toggleSection = (section) => {
    setActiveLink(prev => (prev === section ? "" : section));
  };

  const handleMenu = () => {
    setOpen(true)
  }
  const handleCancel = () => {
    setOpen(false)
  }


  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/"><img src="logo.png" alt="Logo" /></Link>
      </div>
      <div className="accountButtonsMobile">
          <Link to="/userRegister" href="/userRegister" className=' button registrationButton'>OPEN AN ACCOUNT</Link>
          <Link to="/userDashboard" className=' button loginButton'>LOGIN</Link>
        </div>
      <div className="navIcons">
 
        <div onClick={handleMenu} className={`menuIcon ${open ? "hide" : ""}`}>
          <Link to="#"><img src="menu.png" alt="" /></Link>
        </div>
        <div onClick={handleCancel} className={`cancelIcon ${open?"" : "hide"}`}>
          <Link to="#"><img src="cancel.png" alt="" /></Link>
  
        </div>

      </div>
    

      <div className={` links ${open? "activeMenu" : ""}`}>
        <ul>
          <li>
            <Link 
              to="#"
              onClick={() => toggleSection("trade")}
              className={`link ${activeLink === "trade" ? "active" : ""}`}
            >
              TRADE <img className="arrow" src="right-arrow.png" alt="" />
            </Link>
          </li>
          <li>
            <Link
              to="#"
              onClick={() => toggleSection("education")}
              className={`link ${activeLink === "education"   ? "active" : ""}`}
            >
              EDUCATION & ANALYTICS <img className="arrow" src="right-arrow.png" alt="" />
            </Link>
          </li>
          <li>
            <Link
              to="#"
              onClick={() => toggleSection("about")}
              className={`link ${activeLink === "about" ? "active" : ""}`}
            >
              ABOUT COMPANY <img className="arrow" src="right-arrow.png" alt="" />
            </Link>
          </li>
        </ul>
        <div className={`linksBody ${open?"activeLinkBody" : ""}`}>
          {activeLink === "trade" && <Trade closeMenu={()=> {setActiveLink("")}}/>}
          {activeLink === "education" && <Education closeMenu={()=> {setActiveLink("")}} />}
          {activeLink === "about" && <About closeMenu={()=> {setActiveLink("")}} />}
        </div>
      </div>
        <div className="accountButtons">
          <Link to="/userRegister" className='button registrationButton'>OPEN AN ACCOUNT</Link>
          <Link to="/userDashboard/dashboard" className='button loginButton'>LOGIN</Link>
      </div>
    </div>
  );
};

export default Navbar;