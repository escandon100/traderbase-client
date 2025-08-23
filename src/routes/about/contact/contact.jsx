import React from 'react';
import { Link } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome ,faClock } from '@fortawesome/free-solid-svg-icons';
import "./contact.scss"

const Contact = () => {
    return ( 
        <>
        <div className="contactNav">
            <Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566" /><p>Main</p></Link><span>/ Contact Us</span>
        </div>
        <div className="contact">
            <div className="main">
                <div className="main1">
                      <h1>WRITE TO US</h1>
                 <form action="">
                    <label htmlFor="">Message topic</label>
                    <input type="text" />
                    <label htmlFor="">Name</label>
                    <input type="text" />
                    <label htmlFor="">Email</label>
                    <input type="email" />

                    <textarea className='textarea'  name="" id=""></textarea>
                    <button>Send</button>
                </form>     

                </div>
              
                <div className="main2">
                    <h1>CONTACTS</h1>                  
                    <p><FontAwesomeIcon className="icon" icon={faEnvelope} color="#4a5566" />[support@traderbasefx.com]</p>
                    <p><FontAwesomeIcon className="icon" icon={faClock} color="#4a5566" /> working hours of technical support: 08:00 - 20:00 (GMT+3) </p>
                </div>

            </div>
            <div>
              
            </div>
         

             <div className="side">
                <h3>Trading tools</h3>
                <ul>
                    <li ><Link to="/about">About Us</Link></li>
                    <li className='contactClicked'><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/affiliate">Affiliate Program</Link></li>
             </ul>
            </div>

        </div>
        </>
     );
}

export default Contact;