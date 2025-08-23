import React from 'react'
import {Link} from "react-router-dom"
import "./plans.scss"

const Plans = () => {
  return (
    <div className='accountType'>    

      <div className="weekly">
        <h1>WEEKLY PLANS</h1>
        <div className="weeklyBody">
            <div className="basic plan">
                <h3>BASIC</h3>
                <ul>
                    <li> Minimum Amount: $ 1000</li>
                    <li> Maximum Amount: $ 2000</li>
                    <li> Roi: 50% Daily</li>
                    <li> Referal Bonus: 10%</li>
                    <li> Duration: 1 Week</li>
                    <li> Type: Short Time</li>
                </ul>
                <Link className='button' to="/userDashboard/packages">SUBSCRIBE</Link>    
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
                <Link className='button' to="/userDashboard/packages">SUBSCRIBE</Link>    


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
                <Link className='button' to="/userDashboard/packages">SUBSCRIBE</Link>    

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
                <Link className='button' to="/userDashboard/packages">SUBSCRIBE</Link>    


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
                <Link className='button' to="/userDashboard/packages">SUBSCRIBE</Link>    


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
                <Link className='button' to="/userDashboard/packages">SUBSCRIBE</Link>    

                
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

                <Link className='button' to="/userDashboard/packages">SUBSCRIBE</Link>    


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

                <Link className='button' to="/userDashboard/packages">SUBSCRIBE</Link>    
 

            </div>
        
        
          
        </div>

      </div>
    </div>
  )
}

export default Plans
