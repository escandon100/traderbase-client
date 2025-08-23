import React from "react";
import { Link  } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLineChart } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import "./futures.scss"

const Futures = () => {
    return (
        <>
        <div className="futuresNav">
            <Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566"/><p>Main</p></Link><span>/ Commodity futures</span>
        </div>
        <div className="futures">
            <div className="main">
            <h1>SPECIFIC ASPECTS OF DIFFERENT ASSET TYPES</h1>
            <h3>TRADING COMMODITIES</h3>
            <p>
                Commodity futures are one of the most seasoned resources to invest it. For many years, individuals have been selling wheat, corn, sugar, oil, and so on. 
                The principal feature of such resources is their physical presence. That is, we do not purchase paper, however, put resources into solid, genuine merchandise.
                 From one perspective, this is a vital favorable position, yet then again, it forces various explicit capacities that must be considered.
            </p>
            <p>
               The main element is the ability to cycles. For instance, pretty much consistently on the eve of the virus season, the vitality area is winding up increasingly costly. 
               The reason here is not that the vitality supply goes up or down, however, that there is an expanded interest for it.
            </p>
            <p>
               The second part of items is the effortlessness of anticipating the pattern, particularly on medium-term contracts.
                Since the work is finished with physical articles, commodities are impacted by the outer condition.
                In this manner, if the mid-year is dry, clearly the reap of wheat, espresso and different yields subject to summer dampness will be powerless.           
            </p>
       
            <table>
                <thead>
                    					
                    <tr>
                        <th>Instrument</th>
                        <th>Spread</th>
                        <th>Leverage</th>
                        <th>Contract Size</th>
                        <th>Min. Trade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>GOLD: XAUEUR</td>
                        <td>60</td>
                        <td>1:50</td>
                        <td>100	</td>
                        <td>0.1</td>
                    </tr>
                    <tr>
                        <td>GOLD: XAUUSD</td>
                        <td>60</td>
                        <td>1:50</td>
                        <td>100	</td>
                        <td>0.1 </td>
                    </tr>
                    <tr>
                        <td>SILVER: XAGEUR</td>
                        <td>5</td>
                        <td>1:50</td>
                        <td>100</td>
                        <td>0.1 </td>
                    </tr>
                    <tr>
                        <td>SILVER: XAGUSD</td>
                        <td>5</td>
                        <td>1:50</td>
                        <td>100</td>
                        <td>0.1 </td>
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
                    <li><Link to="/forex">Forex</Link></li>
                    <li className="futuresClicked"><Link to="/futures">Commodity futures</Link></li>
                    <li><Link to="/indexes">Share indexes</Link></li>
                    <li><Link to="/carriers">Energy carriers</Link></li>
                </ul>
            </div>
            

        </div>
    </>
    )
}

export default Futures