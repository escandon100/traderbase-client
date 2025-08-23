import React from 'react'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import "./safety.scss"


const Safety = () => {
    return ( 
        <> 
            <div className="safetyNav">
                    <Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566"/><p>Main</p></Link><span>/ Safety of Funds</span>
                </div>
                <div className="safety">
                    <div className="main">
                        <h1>SAFETY OF FUNDS</h1>
                        <h3>SAFETY OF FUNDS</h3>
                        <p>As a directed merchant, it is of central significance to eqtradesthat customers' cash is secured and regarded consistently. Guidelines forced upon P24O Ltd. guarantee thateqtrades is dependably in consistency with guidelines so customers can trade with certainty safe in the information that their assets remain their funds consistently.</p>
                        <h3>Regulated by MFSA</h3>
                        <p>P24O Ltd. is controlled by the MFSA, a standout amongst the most regarded administrative bodies built up inside the steadiest economies in Europe. As a directed broker, P24O Ltd. is authorized to work a Forex Brokerage. To keep up its permit, P24O Ltd. is liable to stringent controls and trial of monetary and accounting transparency.</p>
                        <h3>Segregation of Client Funds</h3>
                        <p>All customer funds saved with P24O Ltd. are 100% isolated from the organization's funds, and, as required by MFSA, are saved into independent bank balances. This isolation of funds guarantees customers deposits cannot be utilized for any reason other than customer account trading. Our universal auditor, PwC (Price Waterhouse Coopers) is there to autonomously confirm thateqtrades's business tasks meet and surpass the highest industry norms.</p>
                        <h3>Partnership with Investment Grade Banks</h3>
                        <p>P24O Ltd. accomplices with Tier 1 venture evaluation European and universal banks that appreciate probably the most astounding appraisals by Moody's, Fitch and S&P. P24O Ltd. has joined forces with Barclays, CitiFX Pro, UBS and Deutsche Bank empoweringeqtradesto use stable banking facilities with limited exposure to credit hazard and guarantee our customers approach profound liquidity when they trade.</p>
                        <h3>Negative Balance Protection</h3>
                        <p>A vital piece of our exclusive innovation is centered around hazard management for our customers. At P24O Ltd. we've created both the systems and techniques to robotize observing of each transaction and risk-management procedure. This is done so as to ensure that customer account balance dependably stay in credit, while open positions are shielded from misfortunes past the original investment.</p>
                        <p>Utilization of logos of any financial regulator or expert does not connote endorsement or endorsement by such authority of the items or services offered byeqtrades.</p>
                   
                    </div>
                      <div className="side">
                        <h3>Trading tools</h3>
                        <ul>
                            <li className='safetyClicked'><Link to="#">Safety of Funds</Link></li>
                            
                        </ul>
                    </div>
                </div>
        </>
     );
}

export default Safety;