import React from 'react'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import "./verification.scss"

const Verification = () => {
    return ( 
        <>
        <div className="verificationNav">
             <Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566"/><p>Main</p></Link><span>/ Account Verification Documents</span>
        </div>
        
        <div className="verification">
            <div className="main">
                <h1>DOCUMENTS REQUIRED FOR VERIFICATION</h1>
                <ol>
                    <li>PROOF OF ID
                        <p>Scan / take a photo of your passport. Please make sure that ALL 4 corners of the document and the applicant’s full name are visible.</p>
                        <p>You can also scan / take a photo of your ID, national identity card or your driver’s license.</p>
                    </li>
                    <li>PROOF OF RESIDENCE
                        <p>Bank or financial record, ongoing service bill dated inside the most recent three months, water charge, electric bill, phone bill or officially sanctioned archive demonstrating the candidate's private address. Your full name, address and a date must be obviously unmistakable and the archive must be dated inside 3 months. Kindly ensure that ALL 4 corners of the report are noticeable.</p>
                    </li>
                    <li>CREDIT CARD
                        <p>In the event that you make a store utilizing a charge card, it would be ideal if you send a sweep/photograph, of the front and back of the card. For your security, it's encouraged to cover the card number (it would be ideal if you make a point to keep the last 4 digits unmistakable), the termination date of the Visa and the CVV number on the back.</p>
                        <p>Documents can be emailed to: [support@traderbasefx.com ] Documents may also be uploaded in the Upload tab on Settings section of the account dashboard.</p>
                    </li>
                </ol>
                <p>Please note thateqtradesmay require additional forms and documentation to complete the application process.</p>

            </div>
           <div className="side">
                   <h3>Trading tools</h3>
                   <ul>
                       <li className='verificationClicked'><Link to="#">Account Verification Documents</Link></li>
                   </ul>
            </div>
        </div>
        </>
     );
}

export default Verification;