import React from "react";
import { useOutletContext } from "react-router";
import "./account.scss";

const Account = () => {
  const message = useOutletContext();

  return (
    <div className="account">
      <div className="account-card">
        <h2 className="title">Personal Details</h2>

        <div className="account-info">
          <div className="info-item">
            <span className="label">First Name:</span>
            <span className="value">{message.firstName}</span>
          </div>

          <div className="info-item">
            <span className="label">Last Name:</span>
            <span className="value">{message.lastName}</span>
          </div>

          <div className="info-item">
            <span className="label">Email Address:</span>
            <span className="value">{message.email}</span>
          </div>

          <div className="info-item">
            <span className="label">Country:</span>
            <span className="value">{message.country}</span>
          </div>

          <div className="info-item">
            <span className="label">Phone Number:</span>
            <span className="value">{message.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
