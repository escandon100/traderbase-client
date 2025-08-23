import React from 'react';
import { Link } from "react-router";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faLineChart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./aboutPage.scss"

const AboutPage = () => {
    return (  
        <>
         <div className="aboutNav">
            <Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566" /><p>Main</p></Link><span>/ About</span>

        </div>
        
        <div className="aboutPage">
            <div className="main">
                <h1>ABOUT US</h1>
                <p>
                    Trader Base FX. was established by a crew of experts in the financial sphere with a clear-sighted perception of making a directed web trading brokerage that would give investments administrations to a wide range of brokers and foundations, all around the world.
                </p>
                <p>
                    The organization's innovative foundation was developed within a profound comprehension of the broker's progressing needs. 
                    Joined with robust associations inside the banking system and with liquidity suppliers, Trader Base FX. intends to offer a standout amongst the best trading encounters in the market today.
                </p>
                <p>
                    Despite offering top of the line innovative arrangements,Trader Base FX. Is focused on giving an expert and straightforward trading condition.
                </p>
                <p>
                    Trader Base FX. trusts that keeping up the accompanying three pillars: Innovative Trading Platforms, Innovative Trading Tools, & Excellent Trading Conditions to the highest benchmarks empowers this.
                </p>
                <p>
                    Trader Base FX. trusts the best way to deal with this announcement Is through the foundation of 3 Pillars. The 3 Pillar Concept is based on the possibility that educated trading originates from giving Innovative Trading Platforms, Innovative Trading Tools, and Excellent Trading Conditions.
                </p>
                <h3>
                    GLOBAL OPERATIONS
                </h3>
                     <ol>
                        <li>
                            Trader Base FX. is a Maltese directed investment services supplier that works under European and Maltese guidelines. 
                            Trader Base FX. administrations are oriented to the English, French, German, Italian, and Arabic markets.
                        </li>
                        <li>
                            Trader Base FX. is a creative broker with a worldwide stance. 
                            Don't hesitate to get in touch with us to check whether we can support your venture needs. As P24O pushes ahead our significant advances, contributions and services will dependably suit.
                        </li>
                        <li>Trader Base FX.'s way to deal with innovation can be put basically 'advancement".
                             Advancement is consolidated into each structure and framework of Trader Base FX. 
                            Produces, to make the most ideal, instinctive items conceivable.
                        </li>
                        <li>
                            Trader Base FX. has built up a flawless data safety foundation, propelled arrangements and capacities that put our customers trading background at the bleeding edge.
                        </li>
                        <li>
                            Theeqtradesmain innovative witticism is that: "Our customer's ventures shouldn't be restricted or influenced by an innovative requirement outside of their control or desire."
                        </li>
                        <li>
                            Please audit Our Technology page to comprehend in more prominent detail how Trader Base FX. Technologies work.
                        </li>
                </ol>
                <h3>
                    OUR VISION
                </h3>
                <p>
                    Our statement grapples NFSX Ltd. even more, formalizes our company's objectives, principles, and qualities for our customers, workers, Senior Management, and our Board.
                </p>
                <p>
                    Statement of purpose:Trader Base FX. tries to reform the online trading industry by engaging dealers through encouraging progressed inventive, innovative arrangements and stages.
                </p>
                <p>
                    Trader Base FX. trusts the best way to deal with this statement is throughthe foundation of 3 Pillars. The 3 Pillar Concept is based on the possibility that educated trading originates from giving Innovative Trading Platforms, Innovative Trading Tools, and Excellent Trading Conditions.
                </p>
                <button>
                    <h1><FontAwesomeIcon className="icon" icon={faLineChart} /></h1>
                    <div>
                        <h3>START TRADING NOW</h3>
                    </div>
             
                </button>

            </div>
            <div className="side">
                <h3>Trading tools</h3>
                <ul>
                    <li className='aboutClicked'><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/affiliate">Affiliate Program</Link></li>
                </ul>
            </div>
        </div>

        </>
    );
}

export default AboutPage;