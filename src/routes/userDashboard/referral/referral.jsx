import React from "react";
import "./referral.scss";
import { Copy } from "lucide-react";

const Referral  = () => {
  const referralLink = "https://traderbase.com/register?ref=USER123"; // Replace dynamically
  const referredUsers = [
    { name: "John Doe", email: "john@example.com", status: "active", joined: "2025-08-10" },
    { name: "Jane Smith", email: "jane@example.com", status: "pending", joined: "2025-08-12" },
    { name: "Mike Brown", email: "mike@example.com", status: "inactive", joined: "2025-08-14" },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied!");
  };

  return (
    <div className="refer-users">
      <div className="refer-card">
        <h2 className="title">Refer & Earn</h2>
        <p className="subtitle">Invite your friends and earn rewards when they join.</p>

        <div className="referral-box">
          <input type="text" value={referralLink} readOnly />
          <button onClick={copyToClipboard} className="copy-btn">
            <Copy size={18} /> Copy
          </button>
        </div>
      </div>

      <div className="users-card">
        <h3 className="section-title">Your Referrals</h3>
        {referredUsers.length > 0 ? (
          <table className="referral-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Joined</th>
              </tr>
            </thead>
            <tbody>
              {referredUsers.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className={`status ${user.status}`}>{user.status}</span>
                  </td>
                  <td>{new Date(user.joined).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-referrals">You haven’t referred anyone yet.</p>
        )}
      </div>
    </div>
  );
};

export default Referral;
