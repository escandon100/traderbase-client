import { useState, React, useEffect } from "react";
import axios from "axios";
import "./userDashboard.scss";
import EarningsPopup from "../../components/earningsPopup/earningsPopup";
import { Link, Outlet } from "react-router";
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

const UserDashboard = () => {
  const [message, setMessage] = useState("");
  const [activeNav, setActiveNav] = useState();
  const [loading, setLoading] = useState(true);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("user-token");

    if (!token) {
      window.location.href = "/userLogin";
      return;
    }

    axios
      .get("http://localhost:5000/api/userDashboard/send/", {
        headers: { "user-token": token },
      })
      .then((res) => {
        setMessage(res.data.userInfo);
        setLoading(false);
      })
      .catch(() => {
        localStorage.removeItem("user-token");
        window.location.href = "/userLogin";
      });
  }, []);

  const handleLogout = (nav) => {
    setActiveNav(nav);
    localStorage.removeItem("user-token");
    window.location.href = "/";
  };

  const handleNav = (nav) => {
    setActiveNav(nav);
  if (isNavExpanded) {
    setIsNavExpanded(false);
  }
  };

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };
  

  if (loading) return null;

  return (
    <div className="userDashboard">
      <EarningsPopup />
      <div
        className={`navigationMenu ${isNavExpanded ? "expanded" : "collapsed"}`}
      >

        <div className="menuToggle" onClick={toggleNav}>
          <img src={` ${isNavExpanded ? "/cancel.png" : "/menu.png"}`} alt="menu" />
        </div>
       

        <ul>
          <Link to="/"><img className="navHeader" src="/logo.png"/></Link>
          <Link to="dashboard">
            <li
              onClick={() => handleNav("home")}
              className={activeNav === "home" ? "activeNav" : ""}
            >
              <FontAwesomeIcon className="icon" icon={faHome} />
              <span className="label">Dashboard</span>
            </li>
          </Link>
          <Link to="account">
            <li
              onClick={() => handleNav("account")}
              className={activeNav === "account" ? "activeNav" : ""}
            >
              <FontAwesomeIcon className="icon" icon={faUser} />
              <span className="label">Account</span>
            </li>
          </Link>
          <Link to="support">
            <li
              onClick={() => handleNav("support")}
              className={activeNav === "support" ? "activeNav" : ""}
            >
              <FontAwesomeIcon className="icon" icon={faHeadset} />
              <span className="label">Support</span>
            </li>
          </Link>
          <Link to="transactionHistory">
            <li
              onClick={() => handleNav("t/h")}
              className={activeNav === "t/h" ? "activeNav" : ""}
            >
              <FontAwesomeIcon className="icon" icon={faHistory} />
              <span className="label">Transaction History</span>
            </li>
          </Link>
          <Link to="depositWithdrawal">
            <li
              onClick={() => handleNav("d/w")}
              className={activeNav === "d/w" ? "activeNav" : ""}
            >
              <FontAwesomeIcon className="icon" icon={faCreditCard} />
              <span className="label">Deposit/Withdrawal</span>
            </li>
          </Link>
          <Link to="subscriptionTrade">
            <li
              onClick={() => handleNav("s/t")}
              className={activeNav === "s/t" ? "activeNav" : ""}
            >
              <FontAwesomeIcon className="icon" icon={faExchangeAlt} />
              <span className="label">Subscription Trade</span>
            </li>
          </Link>
          <Link to="packages">
            <li
              onClick={() => handleNav("packages")}
              className={activeNav === "packages" ? "activeNav" : ""}
            >
              <FontAwesomeIcon className="icon" icon={faBox} />
              <span className="label">Packages</span>
            </li>
          </Link>
          <Link to="referral">
            <li
              onClick={() => handleNav("referral")}
              className={activeNav === "referral" ? "activeNav" : ""}
            >
              <FontAwesomeIcon className="icon" icon={faUserFriends} />
              <span className="label">Refer Users</span>
            </li>
          </Link>
          <li
            onClick={() => handleLogout("logout")}
            className={activeNav === "logout" ? "activeNav" : ""}
          >
            <FontAwesomeIcon className="icon" icon={faSignOut} />
            <span className="label">Logout</span>
          </li>
        </ul>
      </div>

      <div className="main">
        <Outlet context={message} />
      </div>
    </div>
  );
};

export default UserDashboard;
