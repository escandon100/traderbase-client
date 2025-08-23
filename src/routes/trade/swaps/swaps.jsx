import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router';
import "./swaps.scss"

const Swaps = () => {
    return ( 
        <>
        <div className="swapsNav">
            <Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566"/><p>Main</p></Link><span>/ Swaps</span>
        </div>
        <div className="swaps">
            <div className="main">
                <h1>SWAP</h1>
                <p>
                    The swap is an extraordinary instrument for trading resources between two market members. As a rule, this is communicated in the way that the two gatherings go into an agreement for the buy (deal) of a specific resource through carefully stipulated terms that the two gatherings find adequate. 
                    The primary objective of swap contracts is to build the number of exchanges, along these lines expanding the cash turnover on the store.
                     Additionally, the swap is utilized as a supporting thing for hazard change.
                </p>
                <p>
                    Today there is a lot of swap contracts in the financial markets, however, there is just a single cash swap utilized in the forex advertise.
                </p>

            </div>
               <div className="side">
                    <h3>Trading tools</h3>
                    <ul>
                        <li className='swapsClicked'><Link to="#">Swaps</Link></li>
                        
                    </ul>
                </div>

        </div>

        </>
     );
}

export default Swaps;