import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faLineChart } from '@fortawesome/free-solid-svg-icons';

import "./carriers.scss";


const Carriers = () => {

    return (
        <>
            <div className="carriersNav">
                <Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566" /><p>Main</p></Link><span>/ Energy carriers</span>
            </div>

            <div className="carriers">
                <div className="main">
                    <h1>SPECIFIC ASPECTS OF DIFFERENT ASSET TYPES</h1>
                    <h3>TRADING WITH ENERGY RESOURCES</h3>

                    <p>
                        Today Forex advertises enable financial specialists and brokers to work with vitality assets (ex: oil and gas).
                        Before, they pulled in a great deal of consideration on account of oil, It is famous that vitality assets are profoundly unpredictable, as of late, oil cost hopped down from $100 to $50 and that opened new skylines for merchants For Forex trading, this is twice as imperative, as a vast scattering in costs and solid pattern developments give extra acquiring chances.
                        Another essential normal for this sort of advantage is a cozy association with the worldwide economy and has a huge number of co-related resources (counting monetary forms, stocks, and files). Occasions on the planet, alongside climatic conditions and diverse different elements, have an extraordinary impact on vitality assets.
                        To put it plainly, everything that can influence the extraction and transportation of oil and gas to some degree will influence the last estimation of the item, and subsequently, the market estimation of the advantage generally changes.

                    </p>
                    <p>
                        A great influence on energy carriers has events in the world, climatic conditions, and other factors. In short, everything that can in any way affect the extraction and transportation of oil and gas will have an impact on the final cost of the product, and hence the market value of the asset will vary.
                        A vivid example of recent years is the statement of a number of countries in the Middle East about the increase in oil production. Of course, after that, the cost fell, because the demand remained the same, and the supply increased significantly.
                    </p>


                    <table>
                        <thead>
                            <tr>
                                <th>Instrument</th>
                                <th>Spread</th>
                                <th>ECN Spread</th>
                                <th>Leverage</th>
                                <th>Contract Size</th>
                                <th>Min. Trade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>UKOIL</td>
                                <td>6</td>
                                <td>3</td>
                                <td>1:10</td>
                                <td>100</td>
                                <td>0.1</td>
                            </tr>
                            <tr>
                                <td>USOIL</td>
                                <td>6</td>
                                <td>3</td>
                                <td>1:10</td>
                                <td>100</td>
                                <td>0.1 </td>
                            </tr>
                        </tbody>
                    </table>
                    <button>
                        <h1><FontAwesomeIcon className="icon" icon={faLineChart} /></h1>
                        <h3>START TRADING NOW</h3>

                    </button>

                </div>
                <div className="side">
                    <h3>Trading tools</h3>
                    <ul>
                        <li><Link to="/forex">Forex</Link></li>
                        <li><Link to="/futures">Commodity futures</Link></li>
                        <li><Link to="/indexes">Share indexes</Link></li>
                        <li className="carriersClicked"><Link to="/carriers">Energy carriers</Link></li>
                    </ul>
                </div>

            </div>



        </>
    )

}


export default Carriers