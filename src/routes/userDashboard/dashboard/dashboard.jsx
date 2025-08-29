import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faCoins, faGift, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { useOutletContext } from "react-router";
import "./dashboard.scss";

const Dashboard = () => {
  const message = useOutletContext();



  const finance = message.finances[0] || {
  deposited: 0,
  profit: 0,
  bonus: 0,
  refBonus: 0,
  balance: 0
};

  


  const finances = [
    { icon: faDownload, label: "Deposit", value: finance.deposited || "$0" },
    { icon: faCoins, label: "Profit", value: finance.profit || "$0" },
    { icon: faGift, label: "Bonus", value: finance.bonus || "$0" },
    { icon: faRetweet, label: "Ref. Bonus", value: finance.refBonus || "$0" },
    { icon: faCoins, label: "Balance", value: finance.balance || "$0" },
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

      <div className="finances">
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
