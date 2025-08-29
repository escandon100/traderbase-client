import React, { useState } from "react";
import { useOutletContext } from "react-router";
import "./transactionHistory.scss";

const TransactionHistory = () => {
  const message = useOutletContext();
  const [transactions] = useState(message.transactions || []);

  return (
    <div className="transactionHistory">
      <h2 className="pageTitle">Transaction History</h2>

      <div className="tableWrapper">
        <table className="styledTable">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {transactions.length > 0 ? (
              transactions.map((transaction) => (
                <tr key={transaction._id}>
                  <td>  {new Date(transaction.date).toLocaleString("en-GB", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                        }).replace(/\//g, "-")}
                        </td>
                  <td className={`type ${transaction.type.toLowerCase()}`}>
                    {transaction.type}
                  </td>
                  <td>${transaction.amount.toLocaleString()}</td>
                  <td className={`status ${transaction.status.toLowerCase()}`}>
                    {transaction.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="noData">
                  No transaction found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
