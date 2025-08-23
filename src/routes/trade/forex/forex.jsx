import React from "react";
import { Link  } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faLineChart } from '@fortawesome/free-solid-svg-icons'

import "./forex.scss"

const Forex = () => {
     
    return (
        <>
        <div className="forexNav">
            <Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566"/><p>Main</p></Link><span>/ Forex</span>
        </div>
        <div className="forex">
            <div className="main">
                <h1>SPECIFIC ASPECTS OF DIFFERENT ASSET TYPES</h1>
            <h3>TRADING CURRENCY PAIRS (FOREX)</h3>
            <p>
                Forex, additionally called the foreign trade market, is a global currency advertise that contains the activities finished with the coasting and fixed currencies the world over. 
                Fundamentally, Forex is for a cash equivalent to real-estate is for a house. At whatever point you go to trade your cash for another, you naturally manage the Forex advertise. 
                The particular thing about this market is that there is no focal power that could deal with or control the market. 
                Forex isn't constrained by any imposing business model, be it an administration, universal office, bank, IMF, or whatever it might be.
            </p>
            <p>
                Brokers like to hypothesize on money sets in light of the fact that Forex is the most fluid market on the planet. You should realize that every day exchanging volume surpasses $5 trillion, 
                which makes it by a long shot the biggest market on the planet.
                 Another extraordinary favorable position that Forex merchants love is the accessibility of the market – it's open 24 hours from Monday to Friday late around evening time.
            </p>
            <p>
                Today, exchanging money sets is accessible to everyone(there used to be confinement, and just organizations with substantial capital were permitted to exchange). 
                To open an exchange, traders, for example,eqtradesare ready to help. The Forex specialist gives a stage on which you can open and screen exchanges.
            </p>
            <p>
                It would be ideal if you note that the organization may change its medium-term rollover rates occasionally because of changes in credit markets.
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Instrument</th>
                        <th>Spreads (as low as)</th>
                        <th>Leverage (up to)</th>
                        <th>Trading Hours (GMT)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>EUR/USD</td>
                        <td>3(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                   <tr>
                        <td>GBP/USD</td>
                        <td>3(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                     </tr>
                     <tr>
                        <td>USD/CHF</td>
                        <td>3(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>

                     </tr>
                    <tr>
                        <td>USD/JPY</td>
                        <td>3(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td>AUD/USD</td>
                        <td>4(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td>EUR/CHF</td>
                        <td>4(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td> EUR/GBP</td>
                        <td>4(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td>EUR/JPY</td>
                        <td>4(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td> NZD/USD</td>
                        <td>4(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td> USD/CAD</td>
                        <td>4(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td>AUD/CAD</td>
                        <td>10(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td>AUD/CHF</td>
                        <td>10(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td>AUD/JPY</td>
                        <td>5(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td>AUD/NZD</td>
                        <td>20(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td>CAD/CHF</td>
                        <td>10(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td>CAD/JPY</td>
                        <td>6(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td>CHF/JPY</td>
                        <td>6(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td>CHF/PLN</td>
                        <td>40(pips)</td>
                        <td>1:200</td>
                        <td>21:15 - 20:57</td>
                    </tr>
                    <tr>
                        <td>EUR/AUD	</td>
                        <td> 9(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td>EUR/CAD</td>
                        <td>9(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td>EUR/CZK</td>
                        <td>3.5(pips)</td>
                        <td>1:100</td>
                        <td>07:17 - 14:14</td>
                    </tr>
                    <tr>
                        <td>EUR/HUF</td>
                        <td>72(pips)</td>
                        <td>1:200</td>
                        <td>21:17 - 20:57</td>
                    </tr>
                    <tr>
                        <td>EUR/NOK	</td>
                        <td>40(pips)</td>
                        <td>1:200</td>
                        <td>21:15 - 20:57</td>
                    </tr>
                    <tr>
                        <td>EUR/NZD</td>
                        <td>20(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td>EUR/PLN</td>
                        <td>35(pips)</td>
                        <td>1:200</td>
                        <td>21:15 - 20:57</td>
                    </tr>
                    <tr>
                        <td>EUR/SEK</td>
                        <td>50(pips)</td>
                        <td>1:200</td>
                        <td>21:15 - 20:57</td>
                    </tr>
                    <tr>
                        <td>EUR/TRY</td>
                        <td>30(pips)</td>
                        <td>1:100</td>
                        <td>21:05 - 20:55</td>
                    </tr>
                    <tr>
                        <td>EUR/RON</td>
                        <td>250(pips)</td>
                        <td>1:200</td>
                        <td>07:20 - 11:55</td>
                    </tr>
                    <tr>
                        <td>EUR/RUB</td>
                        <td>100(pips)</td>
                        <td>1:25</td>
                        <td>07:05 - 16:00</td>
                    </tr>
                    <tr>
                        <td>GBP/AUD</td>
                        <td>9(pips)	</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td>GBP/CAD</td>
                        <td>12(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td>GBP/CHF</td>
                        <td>8(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td>GBP/JPY</td>
                        <td>7(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>   
                    <tr>
                        <td>GBP/NZD</td>
                        <td>25(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td>GBP/RON</td>
                        <td>250(pips)</td>
                        <td>1:200</td>
                        <td>07:20 - 11:55</td>
                    </tr>
                    <tr>
                        <td>GBP/SGD</td>
                        <td>30(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>          
                    <tr>
                        <td>NZD/CAD</td>
                        <td>10(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr> 
                    <tr>     
                        <td> NZD/CHF</td>
                        <td>10(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td>NZD/JPY</td>
                        <td>7(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td>USD/CZK</td>
                        <td>3(pips)</td>
                        <td>1:100</td>
                        <td>07:17 - 14:14</td>
                    </tr>
                    <tr>
                        <td>USD/DKK</td>
                        <td>20(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td>USD/HUF</td>
                        <td>75(pips)</td>
                        <td>1:200</td>
                        <td>21:17 - 20:57</td>
                    </tr>
                    <tr>
                        <td> USD/MXN</td>
                        <td>10(pips)</td>
                        <td>1:50</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td>USD/NOK</td>
                        <td>50(pips)</td>
                        <td>1:200</td>
                        <td>21:15 - 21:57</td>
                    </tr>
                    <tr>
                        <td>USD/PLN</td>
                        <td>30(pips)</td>
                        <td>1:200</td>
                        <td>21:15 - 20:57</td>
                    </tr>
                    <tr>
                        <td>USD/SEK</td>
                        <td>50(pips)</td>
                        <td>1:200</td>
                        <td>21:15 - 20:57</td>
                    </tr>
                    <tr>
                        <td>USD/SGD</td>
                        <td>8(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td>USD/TRY</td>
                        <td>30(pips)</td>
                        <td>1:100</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td> USD/ZAR</td>
                        <td>12(pips)</td>
                        <td>1:200</td>
                        <td>24h</td>
                    </tr>
                        <tr>
                        <td>USD/RUB</td>
                        <td>75(pips)</td>
                        <td>1:25</td>
                        <td>07:05 - 16:00</td>
                    </tr>
                    <tr>
                        <td> USD/RON</td>
                        <td>200(pips)</td>
                        <td>1:200</td>
                        <td>07:20 - 11:55</td>
                    </tr>
                    <tr>
                        <td>USD/BRL</td>
                        <td>60(pips)</td>
                        <td>1:50</td>
                        <td>13:05 - 19:54</td>
                    </tr>
                    <tr>
                        <td> USD/INR</td>
                        <td>100(pips)</td>
                        <td>1:50</td>
                        <td>03:45 - 09:59</td>
                    </tr>
                    <tr>
                        <td>USD/CNH</td>
                        <td>25(pips)</td>
                        <td>1:50</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td>BP/TRY</td>
                        <td>30(pips)</td>
                        <td>1:100</td>
                        <td>24h</td>
                    </tr>
                    <tr>
                        <td> USD/ILS</td>
                        <td>80(pips)</td>
                        <td>1:200</td>
                        <td>05:00 -15:00</td>
                    </tr>
                    <tr>
                        <td>GBP/ILS</td>
                        <td>110(pips)</td>
                        <td>1:200</td>
                        <td>05:00 -15:00</td>
                    </tr>
                    <tr>
                        <td>EUR/ILS</td>
                        <td>80(pips)</td>
                        <td>1:200</td>
                        <td>05:00 -15:00</td>
                    </tr>
                    <tr>
                        <td>BTC/USD</td>
                        <td>240(pips)</td>
                        <td>1:2	</td>
                        <td>24h</td>
                    </tr>
                    
                </tbody>
            </table>
            <button>
                <h1><FontAwesomeIcon className="icon" icon={faLineChart}/></h1>
                <div>
                    <h3>START TRADING NOW</h3>
                </div>

            </button>

            </div>
            <div className="side">
                <h3>Trading tools</h3>
                <ul>
                    <li className="forexClicked"><Link to="/forex">Forex</Link></li>
                    <li><Link to="/futures">Commodity futures</Link></li>
                    <li><Link to="/indexes">Share indexes</Link></li>
                    <li><Link to="/carriers">Energy carriers</Link></li>
                </ul>
            </div>
            

        </div>
    </>
    )
}

export default Forex