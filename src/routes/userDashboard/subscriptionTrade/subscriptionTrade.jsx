import React from "react";
import "./subscriptionTrade.scss";
import { useOutletContext } from "react-router";

const SubscriptionTrade = () => {
  const message = useOutletContext();
  const subscriptions = message.subscriptions || []; 

    if (subscriptions.length === 0) {
    return (
      <div className="subscription-trade">
        <div className="trade-card">
          <h2 className="title">Subscription Details</h2>
          <p className="no-subscription">No active subscriptions</p>
        </div>
      </div>
    );
  }

    const subscription = subscriptions[0];


  return (
    <div className="subscription-trade">
      <div className="trade-card">
        <h2 className="title">Subscription Details</h2>

        <div className="trade-info">
          <div className="info-item">
            <span className="label">Plan Name:</span>
            <span className="value">{subscription.planName}</span>
          </div>

          <div className="info-item">
            <span className="label">Amount:</span>
            <span className="value">${subscription.amount}</span>
          </div>

          <div className="info-item">
            <span className="label">Profit Percentage:</span>
            <span className="value">{subscription.profitPercent}%</span>
          </div>

          <div className="info-item">
            <span className="label">Duration:</span>
            <span className="value">{subscription.duration} days</span>
          </div>

          <div className="info-item">
            <span className="label">Status:</span>
            <span
              className={`value status ${
                subscription.status === "Active" ? "active" : "inactive"
              }`}
            >
              {subscription.status}
            </span>
          </div>

          <div className="info-item">
            <span className="label">Start Date:</span>
            <span className="value">{new Date(subscription.startDate).toLocaleDateString()}</span>
          </div>

          <div className="info-item">
            <span className="label">End Date:</span>
            <span className="value">{new Date(subscription.endDate).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionTrade;
