import React, { useState } from "react";
import { Link } from "react-router";
import { Copy , Check} from "lucide-react";
import "./packages.scss";

const Packages = () => {
  const [showPayment, setShowPayment] = useState(false);

  const [selectedPlan, setSelectedPlan] = useState("");
  const [showBTCAddress, setShowBTCAddress] = useState(false);
  const [copied, setCopied] = useState(false); 

  const paymentOptions = [
    { name: "Bitcoin", icon: "/bitcoin.png", recommended: true, address: "bc1q2hq5sf6f9wfxg7jqm6mruwdpuymmcs7xw7gmvp" },
    { name: "Bank Transfer", icon: "/bank.png" },
    { name: "Credit Cards", icon: "/visa.png" },
    { name: "Yandex", icon: "/yandex.png" },
    { name: "Neteller", icon: "/neteller.png" },
    { name: "Webmoney", icon: "/webmoney.svg" },
    { name: "QiWi Wallet", icon: "/qiwi.png" },
    { name: "Skrill", icon: "/skrill.png" },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    const plan = e.target.name;
    setSelectedPlan(plan);
    setShowPayment(true);
    setShowBTCAddress(false);
  };

  const closePayment = () => {
    setShowPayment(false);
    setSelectedPlan("");
    setShowBTCAddress(false);
  };

  const handlePayment = (e) => {
    e.preventDefault()

  }
  const handleOptionClick = (option) => {
    if (option.name === "Bitcoin") {
      setShowBTCAddress(true);
    } else {
      alert(`Selected payment method: ${option.name}`);
    }
  };

  const copyBTC = (address) => {
    navigator.clipboard.writeText(address);
    setCopied(true)
  };

  return (
    <div className="packages">
      {/* Payment Modal */}
      {showPayment && (
        <div className="paymentOverlay">
          <div className="paymentBox">
            <button onClick={closePayment} className="closeBtn">✕</button>
            <h2>{selectedPlan} Plan</h2>

            {!showBTCAddress ? (
              <div className="optionsGrid">
                {paymentOptions.map((option, idx) => (
                  <div
                    key={idx}
                    className={`optionCard ${option.recommended ? "recommended" : ""}`}
                    onClick={() => handleOptionClick(option)}
                  >
                    <img src={option.icon} alt={option.name} />
                    <span>{option.name}</span>
                    {option.recommended && <span className="recommendedTag">Recommended</span>}
                  </div>
                ))}
              </div>
            ) : (
              <div className="btcAddress">
                <p className="wallet">{paymentOptions[0].address}</p>
                <button className="copyBtn" onClick={() => copyBTC(paymentOptions[0].address)}>
                  <Copy size={16} /> Copy Address
                  {copied && <Check size={16} className="copiedIcon" />}
                </button>
                 {copied && (
      <button
        className="confirmBtn"
        onClick={handlePayment}
      >
        I've made the payment
      </button>
    )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Weekly Plans */}
      <section className="plansSection">
        <h1>Weekly Plans</h1>
        <p className="subtitle">Choose a weekly investment plan that matches your trading goals.</p>
        <div className="plansGrid">
          {[
            { name: "Basic", details: ["Minimum Amount: $1,000", "ROI: 50% Daily", "Maximum Amount: $2,000", "Referral Bonus: 10%", "Duration: 1 Week", "Type: Short Time"] },
            { name: "Deluxe", details: ["Minimum Amount: $2,000", "Maximum Amount: $5,000", "ROI: 50% Daily", "Referral Bonus: 10%", "Duration: 1 Week", "Type: Short Time"] },
            { name: "Executive", details: ["Minimum Amount: $10,000", "Maximum Amount: $90,000", "ROI: 50% Daily", "Referral Bonus: 10%", "Duration: 1 Week", "Type: Short Time"] },
            { name: "Gold", details: ["Minimum Amount: $10,000", "Maximum Amount: $15,000", "ROI: 50% Daily", "Referral Bonus: 10%", "Duration: 1 Week", "Type: Short Time"] },
          ].map((plan, idx) => (
            <div className="planCard" key={idx}>
              <h3>{plan.name}</h3>
              <ul>{plan.details.map((d, i) => <li key={i}>{d}</li>)}</ul>
              <Link name={plan.name} onClick={handleClick} className="subscribeBtn" to="#">
                Subscribe
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Monthly Plans */}
      <section className="plansSection">
        <h1>Monthly Plans</h1>
        <p className="subtitle">Unlock long-term opportunities with our monthly plans.</p>
        <div className="plansGrid">
          {[
            { name: "Premium", details: ["75% Deposit Bonus", "Negative Balance Protection", "Spreads: 1.9", "Scalping", "Daily Signals", "Financial Plan"] },
            { name: "VIP", details: ["95% Deposit Bonus", "Negative Balance Protection", "Spreads: 1.5", "Scalping", "Daily Signals", "Financial Plan"] },
            { name: "VIP Luxury", details: ["120% Deposit Bonus", "Negative Balance Protection", "Spreads: 1.2", "Scalping", "Daily Signals", "Financial Plan"] },
            { name: "Platinum", details: ["145% Deposit Bonus", "Negative Balance Protection", "Spreads: 1.2", "Scalping", "Daily Signals", "Financial Plan"] },
          ].map((plan, idx) => (
            <div className="planCard" key={idx}>
              <h3>{plan.name}</h3>
              <ul>{plan.details.map((d, i) => <li key={i}>{d}</li>)}</ul>
              <Link name={plan.name} onClick={handleClick} className="subscribeBtn" to="#">
                Subscribe
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Packages;
