import React, { useState } from "react";
import { Copy, Check } from "lucide-react";  // 👈 Lucide icons
import "./depositWithdrawal.scss";

const DepositWithdrawal = () => {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [confirmation, setConfirmation] = useState("");
  const [btcAddress, setBtcAddress] = useState("");
  const [copied, setCopied] = useState(false);

  const WALLET_ADDRESS = "bc1qexampleyourbtcaddress12345";

  const paymentOptions = [
    {name : "Bitcoin" , img: "/bitcoin.png"},
      {name : "Bank Transfer" , img: "/bank.png"},
      {name : "Credit Card" , img: "/visa.png"},
      {name : "Yandex" , img: "/yandex.png"},
      {name : "Neteller" , img: "/neteller.png"},
      {name : "Webmoney" , img: "/webmoney.svg"},
      {name :"QiWi Wallet", img:"/qiwi.png"},
      {name :"Skrill", img:"/skrill.png"}

  ]

  const resetState = () => {
  setShowOptions(false);
  setBtcAddress("");
  setConfirmation("");
};

  const handleDeposit = (e) => {
    e.preventDefault();
    resetState()
    if (!depositAmount) {
      setConfirmation("⚠️ Please enter an amount before depositing.");
      return;
    }
    setShowOptions(true);
    setConfirmation("");
  };

  const handleWithdrawal = (e) => {
    e.preventDefault();
    if (!withdrawAmount) {
      setConfirmation("⚠️ Please enter an amount before withdrawing.");
      return;
    }
    setConfirmation(`✅ You requested a withdrawal of $${withdrawAmount}.`);
    setWithdrawAmount("");
    setBtcAddress("")
  };

  const handlePaymentOption = (method) => {
    if (method === "Bitcoin") {
      setConfirmation(`✅ Depositing $${depositAmount} via Bitcoin.`);
      setBtcAddress(WALLET_ADDRESS);
    } else {
      setConfirmation(`✅ Depositing $${depositAmount} via ${method}.`);
      setBtcAddress("");
    }
    setDepositAmount("");
    setShowOptions(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(btcAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="depositWithdrawal">
      <div className="card">
        <form onSubmit={handleDeposit}>
          <h1>💰 Make a Deposit</h1>
          <div className="input-group">
            <span>$</span>
            <input
              type="number"
              placeholder="Enter amount"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              onFocus={() => {setShowOptions(false) ; setConfirmation("")}}
            />
          </div>

          {!showOptions ? (
            <button type="submit" className="deposit-btn">
              Deposit
            </button>
          ) : (
            <div className="payment-options">
              <h3>Select Payment Method</h3>
              <div className="options-grid">
                {paymentOptions.map((option)=>{
                  return(
                     <div className={`${option.name === "Bitcoin" ? "recommended ":""} option-card`} onClick={()=>handlePaymentOption(option.name)} >
                      <img src={`${option.img}`} alt="" />
                      <span>{option.name}</span>
                      {option.name === "Bitcoin" ? <span className="badge">Recommended</span> : ""}
                  </div>
                   )

                  })
                }
              </div>
            </div>
          )}
        </form>
      </div>

      <div className="card">
        <form onSubmit={handleWithdrawal}>
          <h1>🏦 Make a Withdrawal</h1>
          <div className="input-group">
            <span>$</span>
            <input
              type="number"
              placeholder="Enter amount"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
              onFocus={() => setConfirmation("")}
            />
          </div>
          <button type="submit" className="withdraw-btn">
            Withdraw
          </button>
        </form>
      </div>

      {confirmation && (
        <div className="confirmation">
          <p>{confirmation}</p>
          {btcAddress && (
            <div className="btc-address">
              <span>Send BTC to:</span>
              <div className="address-row">
                <p>{btcAddress}</p>
                <button onClick={handleCopy} >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DepositWithdrawal;
