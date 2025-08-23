import React from "react";
import { useOutletContext } from "react-router";
import "./account.scss";

const Account = () => {
  const message  = useOutletContext();

  return (
    <div className="account">
      <h1>Personal Details</h1>
      <h3>{`First Name: ${message.firstName}`}</h3>
      <h3>{`Last Name: ${message.lastName}`}</h3>
      <h3>{`Email Address: ${message.email}`}</h3>
      <h3>{`County: ${message.country}`}</h3>
      <h3>{`Phone Number: ${message.phoneNumber}`}</h3>



    </div>
  );
};

export default Account;
