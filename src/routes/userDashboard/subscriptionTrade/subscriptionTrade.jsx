import React from "react";
import "./subscriptionTrade.scss"
import { useOutletContext } from "react-router";

const SubscriptionTrade = () => {

    const message = useOutletContext()

    return(
        <div className="SubscriptionTrade">
            <h1>{`Plan Name : ${message.subscriptions[0].planName}`}</h1>
            <h1>{`Amount : $ ${message.subscriptions[0].amount}`}</h1>
            <h1>{`Profit Percentaage : ${message.subscriptions[0].profitPercent}%`}</h1>
            <h1>{`Duration : ${message.subscriptions[0].duration} days`}</h1>
            <h1>{`Status : ${message.subscriptions[0].status}`}</h1>
            <h1>{`Start Date : ${message.subscriptions[0].startDate}`}</h1>
            <h1>{`End Date : ${message.subscriptions[0].endDate}`}</h1>
        </div>

    )


}


export default SubscriptionTrade