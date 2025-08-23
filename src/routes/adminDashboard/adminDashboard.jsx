import React from "react"
import { Link } from "react-router";
import { useEffect , useState } from "react";
import { Outlet } from "react-router";
import axios from "axios";
import "./adminDashboard.scss"


const AdminDashboard = () => {
      const [loading, setLoading] = useState(true); 
        const [message, setMessage] = useState('');
              const [activeNav , setActiveNav] = useState()
        
      
  
    const handleLogout = (nav) => {
      setActiveNav(nav)
    localStorage.removeItem('admin-token');
    window.location.href = '/adminLogin';
  };

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

       const handleNav = (nav) => {
          setActiveNav(nav)
        }


      if(loading) return null;

    return (
        <div className='adminDashboard'>
          <div className="navigationMenu">
            <ul>
              <Link to="registration"><li onClick={() => handleNav("registration")} className= {activeNav === "registration" ? "activeNav" : ""}>Manage Registration</li></Link>
              <Link to="subscription"><li onClick={() => handleNav("subscription")} className= {activeNav === "subscription" ? "activeNav" : ""}>Manage Subscription</li></Link>
              <Link to="transaction"><li onClick={() => handleNav("transaction")} className= {activeNav === "transaction" ? "activeNav" : ""}>Manage Transaction</li></Link>
              <li onClick={() => handleLogout("logout")} className= {activeNav === "logout" ? "activeNav" : ""}>Logout</li>
            </ul>
          </div>
          <div className="main">
            <Outlet/>
          </div>
        </div>
  
  );
  
}


  


export default AdminDashboard