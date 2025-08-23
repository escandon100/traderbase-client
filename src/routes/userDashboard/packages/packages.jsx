import React, { useState } from "react";
import { Link } from "react-router";
import "./packages.scss"

const Packages = () => {
    const [showPayment , setShowPayment] = useState(false)
    const [paymentReport , setPaymentReport] = useState(false)
    const [successReport , setSuccessReport] = useState(false)
    const [failReport , setFailReport] = useState(false)
    const [selectedPlan , setSelectedPlan] = useState("")

    const handleClick = (e) => {
        e.preventDefault()
        const plan = e.target.name
        setSelectedPlan(plan)
        setShowPayment(true)


    }
      const closePayment = () => {
    setShowPayment(false);
    setPaymentReport(false)
    
        setSuccessReport(false)

    setSelectedPlan("");  
  };

  const confirmPayment = () => {
    setShowPayment(false)
    setPaymentReport(true)
  };

    return(
        <div className="packages">
          {showPayment && (
          <div className="paymentOverflow">
            <div className="paymentBox">
              <h2> {selectedPlan} Plan</h2>
              <p> Please send BTC payment to this address:</p>
              <p><strong>bc1q2hq5sf6f9wfxg7jqm6mruwdpuymmcs7xw7gmvp</strong></p>
              <button onClick={closePayment} className="cancelButton absolute">X</button>

              
              <button onClick={confirmPayment} className="confirmButton">Confirm Payment</button>
            </div>
          </div>
        )}
        {
          paymentReport && (
          <div className="paymentOverflow">
            <div className="paymentBox">
              <img src="/public/loading.gif" alt="" />
                <h2>Our system is currently processing your payment</h2>
              <button onClick={closePayment} className="cancelButton absolute">X</button>
            </div>

            </div>
        
          )
        
        }
        {
          successReport && (
          <div className="paymentOverflow">
            <div className="paymentBox">
              <img src="/public/success.png" alt="" />
                <h2>Payment Successful</h2>
              <button onClick={closePayment} className="cancelButton absolute">X</button>
            </div>

            </div>
        
          )
        
        }
        {
          failReport && (
          <div className="paymentOverflow">
            <div className="paymentBox">
              <img src="/public/failed.jpg" alt="" />
                <h2>Payment Failed</h2>
              <button onClick={closePayment} className="cancelButton absolute">X</button>
            </div>

            </div>
        
          )
        
        }
        

      <div className="weekly">
        <h1>WEEKLY PLANS</h1>
        <div className="weeklyBody">
            <div className="basic plan">
                <h3>BASIC</h3>
                <ul>
                    <li> Minimum Amount: $ 1000</li>
                    <li> Roi: 50% Daily</li>
                    <li> Maximum Amount: $ 2000</li>
                    <li> Referal Bonus: 10%</li>
                    <li> Duration: 1 Week</li>
                    <li> Type: Short Time</li>
                </ul>
                <Link name = "Basic" onClick={handleClick} className='button' to="/userDashboard/dashboard">SUBSCRIBE</Link>    
                </div>
            <div className="deluxe plan">
                <h3>DELUXE</h3> 
                <ul>
                    <li> Minimum Amount: $ 2,000</li>
                    <li> Maximum Amount: $ 5,000</li>
                    <li> Roi: 50% Daily</li>
                    <li> Referal Bonus: 10%</li>
                    <li> Duration: 1 Week</li>
                    <li> Type: Short Time</li>
                </ul>
                <Link name = "Deluxe" onClick = {handleClick} className='button' to="/userDashboard/dashboard">SUBSCRIBE</Link>    


            </div>
            <div className="executive plan">
                <h3>EXECUTIVE</h3>
                <ul>
                    <li>Minimum Amount: $ 10,000</li>
                    <li> Maximum Amount: $ 90,00</li>
                    <li> Roi: 50% Daily</li>
                    <li> Referal Bonus: 10%</li>
                    <li> Duration: 1 Week</li>
                    <li> Type: Short Time</li>
                </ul>
                <Link name="Executive" onClick={handleClick} className='button' to="/userDashboard/dashboard">SUBSCRIBE</Link>    

            </div>
            <div className="gold plan">
                <h3>GOLD</h3>
                <ul>
                    <li> Minimum Amount: $ 10,000</li>
                    <li> Maximum Amount: $ 15,000</li>
                    <li> Roi: 50% Daily</li>
                    <li> Referal Bonus: 10%</li>
                    <li> Duration: 1 Week</li>
                    <li> Type: Short Time</li>
                </ul>
                <Link name="Gold" onClick={handleClick} className='button' to="/userDashboard/dashboard">SUBSCRIBE</Link>    


            </div>

        </div>
        

      </div>
      <div className="monthly">
        <h1>MONTHLY PLANS</h1>
        <div className="monthlyBody">
            <div className="premium plan">
                <h3>PREMIUM</h3>
                <ul>
                    <li> 75% Deposit Bonus</li>
                    <li> Negative Balance Protection</li>
                    <li> Spreads: 1.9 </li>
                    <li> Scalping </li>
                    <li> Daily Signals</li>
                    <li> Financial Plan</li>
                </ul>
                <Link name="Premium" onClick={handleClick} className='button' to="/userDashboard/dashboard">SUBSCRIBE</Link>    


            </div>
            <div className="vip plan">
                <h3>VIP</h3>
                <ul>
                    <li> 95% Deposit Bonus</li>
                    <li> Negative Balance Protection</li>
                    <li> Spreads: 1.5</li>
                    <li> Scalping </li>
                    <li> Daily Signals</li>
                    <li> Financial Plan</li>
                </ul>
                <Link name="Vip" onClick={handleClick} className='button' to="/userDashboard/dashboard">SUBSCRIBE</Link>    

                
            </div>
            <div className="vipLuxury plan">
                <h3>VIP LUXURY</h3>
                <ul>
                    <li> 120% Deposit Bonus</li>
                    <li> Negative Balance Protection</li>
                    <li> Spreads: 1.2</li>
                    <li> Scalping</li>
                    <li> Daily Signals</li>
                    <li> Financial Plan</li>
                </ul>

                <Link name="Vip Luxury" onClick={handleClick} className='button' to="/userDashboard/dashboard">SUBSCRIBE</Link>    


            </div>
            <div className="platinum plan">
                <h3>PLATINUM</h3>
                <ul>
                    <li> 145% Deposit Bonus</li>
                    <li> Negative Balance Protection</li>
                    <li> Spreads: 1.2</li>
                    <li> Scalping</li>
                    <li> Daily Signals</li>
                    <li> Financial Plan</li>
                </ul>  

                <Link name = "Platinum" onClick={handleClick} className='button' to="/userDashboard/dashboard">SUBSCRIBE</Link>    
 

            </div>
           

          
        </div>

      </div>
           </div>
  )
}




export default Packages