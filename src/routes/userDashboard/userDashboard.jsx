import{ useState , React , useEffect }from "react"
import axios from "axios";
import "./userDashboard.scss"
import EarningsPopup from "../../components/earningsPopup/earningsPopup";
import { Link } from "react-router";
import { Outlet } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faUser , faHeadset , faCircleUser, faChartLine , faHistory , faCreditCard , faExchangeAlt , faBox , faUserFriends, faSignOut } from '@fortawesome/free-solid-svg-icons';
import Dashboard from "./dashboard/dashboard";


const UserDashboard = () => {
      const [message, setMessage] = useState('');
      const [activeNav , setActiveNav] = useState()
      const [loading, setLoading] = useState(true); 


      useEffect(() => {
        const token = localStorage.getItem('user-token');

        if (!token) {
          window.location.href = '/userLogin';
          return;
        }
    
        axios.get('http://localhost:5000/api/userDashboard/send/', { headers: { 'user-token': token}}).then((res) => {
             setMessage(res.data.userInfo)
             console.log(message)
             setLoading(false)
          }
          )
          .catch(() => {
            localStorage.removeItem('user-token');
            window.location.href = '/userLogin';
          });
      }, []);

        const handleLogout = (nav) => {

              setActiveNav(nav)
              localStorage.removeItem('user-token');
              window.location.href = '/userLogin';
        };

        const handleNav = (nav) => {
          setActiveNav(nav)
        }

        if(loading) return null;


    return(
        <div className="userDashboard">
          <EarningsPopup/>
            <div className="navigationMenu">
              <ul>
                <li><Link to="/"> <img src="/public/logo.png" alt="" /></Link></li>
                <li className="profile">{`Hey ${message.firstName}`} </li>
                <Link to="dashboard">  <li onClick={() => handleNav("home")} className= {activeNav === "home" ? "activeNav" : ""}><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566" />Dashboard</li></Link>
                <Link to="account"> <li onClick={() => handleNav("account")} className= {activeNav === "account" ? "activeNav" : ""}><FontAwesomeIcon className="icon" icon={faUser} color="#4a5566" />Account</li></Link>
                <Link to="support"> <li onClick={() => handleNav("support")} className= {activeNav === "support" ? "activeNav" : ""}><FontAwesomeIcon className="icon" icon={faHeadset} color="#4a5566" />Support</li></Link>
                <Link to="transactionHistory"> <li onClick={() => handleNav("t/h")} className= {activeNav === "t/h" ? "activeNav" : ""}><FontAwesomeIcon className="icon" icon={faHistory} color="#4a5566" />Transaction History</li></Link>
                <Link to="depositWithdrawal"> <li onClick={() => handleNav("d/w")} className= {activeNav === "d/w" ? "activeNav" : ""}><FontAwesomeIcon className="icon" icon={faCreditCard} color="#4a5566" />Deposit/Withdrawal</li></Link>
                <Link to="subscriptionTrade"> <li onClick={() => handleNav("s/t")} className= {activeNav === "s/t" ? "activeNav" : ""}><FontAwesomeIcon className="icon" icon={faExchangeAlt} color="#4a5566" />Subscription Trade</li></Link>
                <Link to="packages"> <li onClick={() => handleNav('packages')} className= {activeNav === "packages" ? "activeNav" : ""}><FontAwesomeIcon className="icon" icon={faBox} color="#4a5566" />Packages</li></Link>
                <Link to="referral"> <li onClick={() => handleNav("referral")} className= {activeNav === "referral" ? "activeNav" : ""}><FontAwesomeIcon className="icon" icon={faUserFriends} color="#4a5566" />Refer Users</li></Link>
                <li onClick={() => handleLogout("logout")} className= {activeNav === "logout" ? "activeNav" : ""}><FontAwesomeIcon className="icon" icon={faSignOut} color="#4a5566" />Logout</li>
              </ul>

            </div>

              <div className="main">
                <Outlet context = {message} />
              </div>

        </div>
    )

}



export default UserDashboard