import React from 'react';
import { Link } from "react-router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import "./withdrawal.scss"


const Withdrawal = () => {
    return ( 
        <>       
            <div className="withdrawalNav">
                <Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566"/><p>Main</p></Link><span>/ Profit Withdrawal</span>
            </div>
            <div className='withdrawal'>
                <div className="main">
                    <h1>WITHDRAWAL INFORMATION AND GENERAL FEES</h1>
                    <p>Deposit funds to youreqtradesTrading account using one of our convenient options below. 
                        All deposit activity is secure and trackable. 
                        Please contact your Client Services Representative for further assistance or clarification.</p>

                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>Process Time</th>
                                    <th>Fees</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src=" bitcoin.png" alt="" /></td>
                                    <td>Bitcoin</td>
                                    <td>Instant</td>
                                    <td>$0</td>
                                    <td><button>Fund your account</button></td>
                                </tr>
                                 <tr>
                                    <td><img src="visa.png" alt="" /></td>
                                    <td>Credit Card</td>
                                    <td>Instant</td>
                                    <td>$0</td>
                                    <td><button>Fund your account</button></td>
                                </tr>
                                 <tr>
                                    <td><img src="yandex.png" alt="" /></td>
                                    <td>Yandex Money</td>
                                    <td>Instant</td>
                                    <td>$0</td>
                                    <td><button>Fund your account</button></td>
                                </tr>
                                 <tr>
                                    <td><img src="bank.png" alt="" /></td>
                                    <td>Bank Transfer</td>
                                    <td>Between 2-3 days</td>
                                    <td>$0</td>
                                    <td><button>Fund your account</button></td>
                                </tr>
                                 <tr>
                                    <td><img src="qiwi.png" alt="" /></td>
                                    <td>Qiwi Wallet</td>
                                    <td>Instant</td>
                                    <td>$0</td>
                                    <td><button>Fund your account</button></td>
                                </tr>
                                 <tr>
                                    <td><img src="neteller.png" alt="" /></td>
                                    <td>Neteller</td>
                                    <td>Instant</td>
                                    <td>$0</td>
                                    <td><button>Fund your account</button></td>
                                </tr>
                                 <tr>
                                    <td><img src="webmoney.svg" alt="" /></td>
                                    <td>Webmoney</td>
                                    <td>Instant</td>
                                    <td>$0</td>
                                    <td><button>Fund your account</button></td>
                                </tr>
                                 <tr>
                                    <td><img src="skrill.png" alt="" /></td>
                                    <td>Skrill</td>
                                    <td>Instant</td>
                                    <td>$0</td>
                                    <td><button>Fund your account</button></td>
                                </tr>
                           
                            </tbody>
                        </table>
                        <p><strong>Please note that all deposit activity is secure and trackable.</strong></p>
                        <p>For further assistance, please contact your <Link className='clientServices'>Client Services Representative.</Link></p>
                        <p><strong>Withdrawal Request Fees</strong></p>
                        <p>To withdraw funds, simply click Withdrawal Request on the dashboard and type the amount you wish to withdraw. 
                            Once the request has been made,eqtradeswill process the withdrawal within 1 business day.</p>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                     <th></th>
                                      <th>Process Time</th>
                                       <th>Fees</th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src=" bitcoin.png" alt="" /></td>
                                    <td>Bitcoin</td>
                                    <td>Instant</td>
                                    <td>Account manager inquiry</td>
                                </tr>
                                   <tr>
                                    <td><img src="visa.png" alt="" /></td>
                                    <td>Credit Card</td>
                                    <td>Up to 1 business day</td>
                                    <td>Account manager inquiry</td>
                                </tr>
                                   <tr>
                                    <td><img src="yandex.png" alt="" /></td>
                                    <td>Yandex Money</td>
                                    <td>Up to 1 business day</td>
                                    <td>Account manger inquiry</td>
                                </tr>
                                   <tr>
                                    <td><img src="bank.png" alt="" /></td>
                                    <td>Bank Transfer</td>
                                    <td>Up to 2 business days</td>
                                    <td>Account manager inquiry</td>
                                </tr>
                                   <tr>
                                    <td><img src="qiwi.png" alt="" /></td>
                                    <td>QiWi Wallet</td>
                                    <td>Up to 1 business day</td>
                                    <td>Account manager inquiry</td>
                                </tr>
                                   <tr>
                                    <td><img src="neteller.png" alt="" /></td>
                                    <td>Neteller</td>
                                    <td>Up to 1 business day</td>
                                    <td>2.9%</td>
                                </tr>
                                   <tr>
                                    <td><img src="webmoney.svg" alt="" /></td>
                                    <td>Webmoney</td>
                                    <td>Up to 1 business day</td>
                                    <td>Account manager inquiry</td>
                                </tr>
                                   <tr>
                                    <td><img src="skrill.png" alt="" /></td>
                                    <td>Skrill</td>
                                    <td>Up to 1  business day</td>
                                    <td>2.9%</td>
                                </tr>

                            </tbody>
                            
                        </table>
                        <p>Please check with your payment solution provider if any additional fees may apply on their side.</p>
                </div>
                <div className="side">
                    <h3>Trading tools</h3>
                    <ul>
                        <li className='futuresClicked'><Link to="#">Withdrawal information and general fees</Link></li>
                        
                    </ul>
                </div>

            </div>
        </>

     );
}

export default Withdrawal;