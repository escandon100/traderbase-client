import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router';
import "./information.scss"

const Information = () => {
    return ( 
        <>
            <div className="informationNav">
                <Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566"/><p>Main</p></Link><span>/ Information Security</span>

            </div>
            <div className="information">
                <div className="main">
                    <h1>INFORMATION SECURITY</h1>
                    <h3>THE IMPORTANCE OF INFORMATION SECURITY</h3>
                    
                    <p>Data security is of fundamental significance to Trader Base FX.eqtradesdeals with the security of its customers' information by guaranteeing there is no loss of Confidentiality (unapproved exposure), Integrity (unapproved changes and alteration) and Availability (assurance from conscious or coincidental misfortune, obliteration or intrusion of administrations) of any data having a place with the customer stored on our servers. As a state of its permitting commitments as a directed agent,eqtradesmust guarantee that it is agreeable with guidelines and enactment relating to adherence to data security best practices.</p>
                    <h3>HOW DOES TRADER BASE FX PROTECT CUSTOMER DATA</h3>
                    <p>Data Security arrangements are defined dependent on industry security best practices, for example, ISO 27001 and actualized by the board. Best benchmarks manage the controls which are received byeqtradesworkers and partners and control shield customers’ information from dangers and vulnerabilities.</p>

                </div>
                   <div className="side">
                        <h3>Trading tools</h3>
                        <ul>
                            <li className='informationClicked'><Link to="#">Information Security</Link></li>
                            
                        </ul>
                    </div>


            </div>
        </>

     );
}

export default Information;