import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./conflict.scss"
import { Link } from 'react-router';


const Conflict = () => {
    return ( 
        <>
        <div className="conflictNav">
            <Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566"/><p>Main</p></Link><span>/ Conflict of Interest</span>

        </div>
        <div className="conflict">
            <div className="main">
                <h1>CONFLICT OF INTEREST</h1>
                <h3>CONFLICT OF INTERESTS</h3>
                <p>
                    The www.traderbasefx.com site is possessed by P24O Ltd. ("the Company") a venture firm controlled by the Malta Financial Services Authority with permit number IS/56519. The Company is required, according to the European Union's Markets in Financial Instruments Directive (MiFID) and as per the Investment Services Act 2004 (Chapter 370 of the Laws of Malta), to give data on the Company's arrangement in regards to irreconcilable circumstances and its way with dealing with any irreconcilable circumstances genuinely: both between www.traderbasefx.com , our executives, representatives and our customers, and between your interests and those of different customers.
                </p>
                <h3>DEFINITION OF CONFLICT OF INTERESTS</h3>
                <p>
                    The Company characterizes an irreconcilable situation as any circumstance where either the Company or an individual is in a situation to abuse an expert or authority limit somehow or another for either corporate or individual advantage.</p>
                <h3>CONFLICT OF INTEREST MEASURES</h3>
                <p>
                    Broad measures have been embraced by the Company to Prevent, Control and Manage the trading of data between applicable people occupied with exercises that may include a Risk of Conflict of Interest.
                </p>
                <h3>DISCLOSURE OF CONFLICT OF INTEREST</h3>
                <p>
                    At the point when the measures taken by the Company to oversee irreconcilable situations are not sufficient to ensure, with reasonable certainty, that the danger of harm to customer's advantage will be kept, the Company will reveal the Conflicts of Interest to the customer so as to keep a Risk of Damage to Client's Interest. Preceding completing an exchange or giving speculation or subordinate support of a customer, the Company must unveil any Actual or Potential Conflict of Interest. 
                    The revelation will be in sufficient time, in a sturdy style.
                </p>
                <h3>RECORD KEEPING</h3>
                <p>
                    For record staying with purposes, the Company keeps up a precise log which will be refreshed regularly of a wide range of ventures and auxiliary administrations or speculation exercises did by the Company or for its benefit; in which an irreconcilable circumstance involving a material danger of harm to the interests of at least one customers has arisen.
                </p>
            </div>
            <div className="side">
                <h3>Trading tools</h3>
                <ul>
                    <li className='conflictClicked'><Link to="#">Conflict of Interest</Link></li>
                </ul>
            </div>

        </div>

         </>
     );
}

export default Conflict;