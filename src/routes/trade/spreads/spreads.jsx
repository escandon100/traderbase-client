import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router';
import "./spreads.scss"

const Spreads = () => {
    return (
        <>
        <div className="spreadsNav">
            <Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566"/><p>Main</p></Link><span>/ Spreads</span>
        </div>
        <div className="spreads">
            <div className="main">
                <h1>SPREAD</h1>
                <p>Spread is the contrast between the purchasing cost and the selling cost. 
                    Its esteem differs relying upon the chose currency pair.</p>
                    <h3>WHAT IS SPREAD ?</h3>
                <p>In the opening window of the exchange request, you can see two costs. For instance, in the event that you open EUR/USD, you can see something like 1.11756/1.11762.
                     As needs are, the primary figure is the cost to purchase, while the second figure is the cost to sell. 
                     The distinction between them is known as the spread. 
                     Truth be told, it is this distinction that in a roundabout way fills in as a commission for opening exchange on the stage.</p>
                <h3>FOR WHAT REASON DO I NEED THE SPREAD?</h3>
                <p>For the most part, the thing that matters is because of the present patterns in the economy and finance. 
                    For instance, each individual has managed money trade benefits at any rate once in his life. 
                    As you can know, there are constantly two costs: for buy and available to be purchased. 
                    That is, this is the incentive at which the bank is prepared to trade the currency.
                     The distinction between these figures is the commission or the benefit of the bank.
                     A comparative circumstance we have in the Forex advertise.
                </p>
                <p>
                    The spread is paid when the position is opened. 
                    When the financial specialist opens the exchange, the amount of the commission is charged from the record,the span of which is controlled by the organization's policy, and the estimation of which is shown on the exchanging platform.
                </p>
            </div>
            <div className="side">
                <h3>Trading tools</h3>
                <ul>
                    <li className='spreadsClicked'><Link to="#">Spreads</Link></li>
                    
                </ul>
            </div>
        </div>
        </>
      );
}

export default Spreads;