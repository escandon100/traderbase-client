import React from "react"
import { Link } from "react-router";
import { useEffect , useState } from "react";
import { Outlet } from "react-router";
import axios from "axios";
import "./adminDashboard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faHeadset,
  faHistory,
  faCreditCard,
  faExchangeAlt,
  faBox,
  faUserFriends,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";



const AdminDashboard = () => {
      const [message, setMessage] = useState('');
      const [activeNav, setActiveNav] = useState();
      const [loading, setLoading] = useState(true);
      const [isNavExpanded, setIsNavExpanded] = useState(false);
  
      

  useEffect(() => {
      const token = localStorage.getItem('admin-token');
      if (!token) {
        window.location.href = '/adminLogin';
        return;
      }
  
      axios
        .get('/api/admin/adminAuthentication', {
          headers: {
            'x-auth-token': token,
          },
        })
        .then((res) => {
          setMessage(res.data.message)
          setLoading(false)
        
        }
        )
        .catch(() => {
          localStorage.removeItem('admin-token');
          window.location.href = '/adminLogin';
        });
    }, []);

      
    const handleLogout = (nav) => {
      setActiveNav(nav)
    localStorage.removeItem('admin-token');
    window.location.href = '/adminLogin';
  };


       const handleNav = (nav) => {
          setActiveNav(nav)
           if (isNavExpanded) {
            setIsNavExpanded(false);
          }
        }
     const toggleNav = () => {
        setIsNavExpanded(!isNavExpanded);
     };


      if(loading) return null;

    return (
        <div className='adminDashboard'>
          <div  className={`navigationMenu ${isNavExpanded ? "expanded" : "collapsed"}`}>
            <div className="menuToggle" onClick={toggleNav}>
              <img src={` ${isNavExpanded ? "/cancel.png" : "/menu.png"}`} alt="menu" />
           </div>
              <ul>
                <Link to="/"><img className="navHeader" src="/logo.png"/></Link>
                <Link to="registration"><li onClick={() => handleNav("registration")} className= {activeNav === "registration" ? "activeNav" : ""}> <FontAwesomeIcon className="icon" icon={faUserFriends} /><span className="label">Manage Registration</span></li></Link>
                <Link to="subscription"><li onClick={() => handleNav("subscription")} className= {activeNav === "subscription" ? "activeNav" : ""}><FontAwesomeIcon className="icon" icon={faUser} /><span className="label">Manage Subscription</span></li></Link>
                <Link to="transaction"><li onClick={() => handleNav("transaction")} className= {activeNav === "transaction" ? "activeNav" : ""}><FontAwesomeIcon className="icon" icon={faCreditCard} /><span className="label">Manage Transaction</span></li></Link>
                <li onClick={() => handleLogout("logout")} className= {activeNav === "logout" ? "activeNav" : ""}><FontAwesomeIcon className="icon" icon={faSignOut} /> <span className="label">Logout</span></li>
              </ul>
          </div>
          <div className="main">
            <Outlet/>
          </div>
        </div>
  
  );
  
}


  

export default AdminDashboard