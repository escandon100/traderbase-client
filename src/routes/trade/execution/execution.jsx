import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router';
import "./execution.scss"

const Execution= () =>{
    return ( 
     <>
        <div className="executionNav">
            <Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566"/><p>Main</p></Link><span>/ Order Execution</span>
                  
        </div>
        <div className="execution">
            <div className="main">
                <h1>EXECUTION OF ORDERS</h1>
                <p>Trader base endeavor to give merchants quick execution of requests with costs that are not in a general sense not quite the same as those expressed.
                    Execution of requests is completed in two different ways:</p>

                    <ol>
                        <li>Promptly – the exchange opens right when the financial specialist has formalized his application.</li>
                        <li>At the point when the correct conditions arrive – the investor indicates the conditions (for instance, achieving a cost of a specific dimension) at the beginning of which execution happens.</li>
                    </ol>

                    <p>Clients can oversee orders, indicating every one of their parameters, and furthermore making changes to them during the time spent work.</p>
                    <p>It would be ideal if you note that the request execution costs at any time might be somewhat not the same as those expressed. This is because of the unpredictability and liquidity of the market. We endeavor to guarantee the best execution of the exchange, picking the best cost available on the market!</p>
            </div>
                <div className="side">
                <h3>Trading tools</h3>
                <ul>
                    <li className='executionClicked'><Link to="#">Order execution</Link></li>
                    
                </ul>
            </div>
            
        </div>
     </>
     );
}

export default Execution;