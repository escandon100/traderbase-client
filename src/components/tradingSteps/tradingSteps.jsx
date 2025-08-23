import React from "react"
import { Link } from "react-router"
import "./tradingSteps.scss"


 const TradingSteps = () => {

    return (
        <div className="tradingSteps">
            <h1>FOUR STEPS TO START TRADING</h1>
                <div className="steps">
                    <div className="step">
                        <img src="mp-step-1.svg" alt="" />
                        <h3>Registration</h3>
                        <p>Open your live trading account after registration</p>
                    </div>
                    <div className="step">
                        <img src="mp-step-2.svg" alt="" />
                        <h3>Verify</h3>
                        <p>Upload your documents to activate your account</p>
                    </div>
                    <div className="step">
                        <img src="mp-step-3.svg" alt="" />
                        <h3>Fund</h3>
                        <p> Log in to your account and make a deposit</p>
                    </div>
                    <div className="step">
                    <img src="mp-step-4.svg" alt="" />
                    <h3>Trade</h3>
                    <p>Start trading using over 250 different trading tools</p>
                    </div>
                </div>
                
            <div className="registration">
                <Link className='button registerButton' to="/register">OPEN LIVE ACCOUNT</Link>    
                <Link className='button loginButton' to="/login">LOGIN ACCOUNT</Link>    
            </div>
         


        </div>
    )


 }


 export default TradingSteps