import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faCoins, faGift, faRetweet} from "@fortawesome/free-solid-svg-icons";

import "./dashboard.scss"
import { useOutletContext } from "react-router";

const Dashboard = () => {

    const message = useOutletContext()

    return(
        <div className="dashboard">
            <h1>Welcome to your TraderBase FX Dashboard!
Here, you can track your investments in real time — from deposits and profits to bonuses and overall balance. Our platform is designed to give you full transparency and control over your trading journey. Remember, investing involves both opportunities and risks, so always trade wisely and within your means. We’re committed to providing you with a secure and reliable experience as you grow your financial portfolio.
</h1>

            <div className="finances">
                  <div className="finance">
                <FontAwesomeIcon className="icon" icon={faDownload} />
                <h1>Deposit</h1>
            </div>
             <div className="finance">
                <FontAwesomeIcon className="icon" icon={faCoins}/>
                <div className="financeInfo">
                    <h1>Profit </h1>
                </div>
                
            </div>
             <div className="finance">
                <FontAwesomeIcon className="icon" icon={faGift}/>
                <h1>Bonus</h1>
            </div>
             <div className="finance">
                <FontAwesomeIcon className="icon" icon={faRetweet}/>
                <h1>Ref.Bonus</h1>
            </div>
            <div className="finance">
               <FontAwesomeIcon className="icon" icon={faCoins}/>
                <h1>Balance</h1>
            </div>

            </div>

          
        


        </div>

    )

  

}


export default Dashboard