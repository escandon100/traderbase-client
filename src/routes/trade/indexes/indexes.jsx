import React from "react";
import { Link  } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faLineChart } from '@fortawesome/free-solid-svg-icons';

import "./indexes.scss";


const Indexes = () => {

    return (
        <>
            <div className="indexesNav">
                <Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566"/><p>Main</p></Link><span>/ Share indexes</span>
             </div>
            <div className="indexes">
                <div className="main">
                    <h1>SPECIFIC ASPECTS OF DIFFERENT ASSET TYPES</h1>
                    <h3>TRADING STOCK INDICES</h3>

                    <p>
                        Stock records serve as an impetus for the economy of the entire country, explicit ventures, and when all is said in done it shows to what degree a specific circle of the market is created and what potential it has.
                         Working with stock lists, as an exchanging tool, is significant since it gives points of interest which different kinds of advantages need. 
                        Specifically, the broker has the chance to work with more exactness. Mostly, the lists are made so that they can describe the nation's economy, the advancement of financial divisions, involve comparable organizations, etc.
                         Along these lines, a broker can get the records that he sees generally precisely.
                    </p>
                    <p>
                        An important characteristic of assets is their high prediction. It is much easier to work with indices than with currency, commodity or stocks. 
                        This is due to the fact that in most cases a number of large companies are determined, and it is much easier to predict a separate industry than to deal with all the subtleties of a particular company. 
                        For example, the S & P 500 is calculated based on the stocks of the 500 largest firms.
                    </p>

                    <table>
                        <thead>
                            <tr>
                                <th>Instrument</th>
                                <th>Spread</th>
                                <th>ECN Spread	</th>
                                <th>Leverage</th>
                                <th>Contract Size</th>
                                <th>Min. Trade	</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>AUS200</td>
                                <td>6</td>
                                <td>2</td>
                                <td>1:20</td>
                                <td>1 Contract</td>
                                <td>0.01 </td>  
                                                               
                            </tr>
                               <tr>
                                <td>CAC40</td>
                                <td>3</td>
                                <td>1.3</td>
                                 <td>1:20</td>
                                <td>1 Contract</td>
                                 <td>0.01 </td>  
                                                                 
                            </tr>
                               <tr>
                                <td>DAX30</td>
                                <td>3</td>
                                <td>1.5</td>
                                 <td>1:20</td>
                                <td>1 Contract</td>
                                <td>0.01 </td>  
                                                                  
                            </tr>
                               <tr>
                                <td>FTSE100</td>
                                <td>3</td>
                                <td>1.3</td>
                                 <td>1:20</td>
                                <td>1 Contract</td>
                                 <td>0.01 </td>  
                                                             
                            </tr>
                               <tr>
                                <td>JPN225</td>
                                <td>2</td>
                                <td>8</td>
                                <td>1:20</td>
                                <td>1 Contract</td>
                                <td>0.01 </td>  
                                                            
                            </tr>
                               <tr>
                                <td>USA100</td>
                                <td>3</td>
                                <td>1</td>
                                 <td>1:20</td>
                                <td>1 Contract</td>
                                <td>0.01</td>                              
                            </tr>
                               <tr>
                                <td>USA30</td>
                                <td>4</td>
                                <td>3</td>
                                <td>1:20</td>
                                <td>1 Contract</td>
                                <td>0.01</td>  
                            </tr>
                               <tr>
                                <td>USA500</td>
                                <td>2</td>
                                <td>1</td>
                               <td>1:20</td>
                                <td>1 Contract</td>
                                 <td>0.01</td>  
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
                        <li><Link to="/futures">Commodity futures</Link></li>
                        <li className="indexesClicked"><Link to="/indexes">Share indexes</Link></li>
                        <li><Link to="/carriers">Energy carriers</Link></li>
                    </ul>
                </div>
                
            </div>
        </>

    )

}


export default Indexes