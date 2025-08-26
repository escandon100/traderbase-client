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

  // ⚡ Same BTC address you used in Packages.jsx
  const WALLET_ADDRESS = "bc1qexampleyourbtcaddress12345";

  const handleDeposit = (e) => {
    e.preventDefault();
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
      {/* Deposit Section */}
      <div className="deposit card">
        <form onSubmit={handleDeposit}>
          <h1>💰 Make a Deposit</h1>
          <div className="input-group">
            <span>$</span>
            <input
              type="number"
              placeholder="Enter amount"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              onFocus={() => setShowOptions(false)}
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
                <div
                  className="option-card recommended"
                  onClick={() => handlePaymentOption("Bitcoin")}
                >
                  <img src="/bitcoin.png" alt="Bitcoin" />
                  <span>Bitcoin</span>
                  <span className="badge">Recommended</span>
                </div>
                <div className="option-card" onClick={() => handlePaymentOption("Bank Transfer")}>
                  <img src="/bank.png" alt="Bank" />
                  <span>Bank Transfer</span>
                </div>
                <div className="option-card" onClick={() => handlePaymentOption("Credit Card")}>
                  <img src="/visa.png" alt="Visa" />
                  <span>Credit Card</span>
                </div>
                <div className="option-card" onClick={() => handlePaymentOption("Yandex")}>
                  <img src="/yandex.png" alt="Yandex" />
                  <span>Yandex</span>
                </div>
                <div className="option-card" onClick={() => handlePaymentOption("Neteller")}>
                  <img src="/neteller.png" alt="Neteller" />
                  <span>Neteller</span>
                </div>
                <div className="option-card" onClick={() => handlePaymentOption("Webmoney")}>
                  <img src="/webmoney.svg" alt="Webmoney" />
                  <span>Webmoney</span>
                </div>
                <div className="option-card" onClick={() => handlePaymentOption("QiWi Wallet")}>
                  <img src="/qiwi.png" alt="QiWi" />
                  <span>QiWi Wallet</span>
                </div>
                <div className="option-card" onClick={() => handlePaymentOption("Skrill")}>
                  <img src="/skrill.png" alt="Skrill" />
                  <span>Skrill</span>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>

      {/* Withdrawal Section */}
      <div className="withdrawal card">
        <form onSubmit={handleWithdrawal}>
          <h1>🏦 Make a Withdrawal</h1>
          <div className="input-group">
            <span>$</span>
            <input
              type="number"
              placeholder="Enter amount"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
            />
          </div>
          <button type="submit" className="withdraw-btn">
            Withdraw
          </button>
        </form>
      </div>

      {/* Confirmation Section */}
      {confirmation && (
        <div className="confirmation">
          <p>{confirmation}</p>
          {btcAddress && (
            <div className="btc-address">
              <strong>Send BTC to:</strong>
              <div className="address-row">
                <p>{btcAddress}</p>
                <button onClick={handleCopy} title="Copy BTC Address">
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
