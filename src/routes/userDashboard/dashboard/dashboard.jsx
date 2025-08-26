import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faCoins, faGift, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { useOutletContext } from "react-router";
import "./dashboard.scss";

const Dashboard = () => {
  const message = useOutletContext();

  const finances = [
    { icon: faDownload, label: "Deposit", value: message.deposit || "$0" },
    { icon: faCoins, label: "Profit", value: message.profit || "$0" },
    { icon: faGift, label: "Bonus", value: message.bonus || "$0" },
    { icon: faRetweet, label: "Ref. Bonus", value: message.refBonus || "$0" },
    { icon: faCoins, label: "Balance", value: message.balance || "$0" },
  ];

  return (
    <div className="dashboard">
      <div className="welcomeCard">
        <h1>Welcome, {message.firstName}!</h1>
        <p>
          Here you can track your investments, deposits, profits, and bonuses in real-time.
          Our platform provides full transparency and control over your trading journey.
        </p>
      </div>

      <div className="financesGrid">
        {finances.map((item, idx) => (
          <div className="financeCard" key={idx}>
            <FontAwesomeIcon className="icon" icon={item.icon} />
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
