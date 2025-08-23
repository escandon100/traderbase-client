import React from 'react';
import { Link } from "react-router";
import { faHandshake, faHome } from '@fortawesome/free-solid-svg-icons';
import { faLineChart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./affiliate.scss"

const Affiliate = () => {
    return ( 
        <>
        <div className="affiliateNav">
            <Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566" /><p>Main</p></Link><span>/ Affiliate Program</span>
        </div>
        <div className="affiliate">
            <div className="main">
                <h1>AFFILIATE PROGRAM</h1>
                <p>In case that you have an Internet asset committed to Forex or exchanging the financial markets in common, you can grow your abilities with our associate program.eqtradesoffers transparent conditions for every one of its accomplices.</p>
                <h3>WHY SHOULD YOU PAY ATTENTION TO OUR PROGRAM?</h3>
                <p>eqtradesoffers special conditions for the clients just as a creative exchanging platform, which fundamentally expands the potential for conversions. We offer the majority of our accomplices the alternative to work with both RevShare (income imparting to an accomplice) and CPA frameworks.</p>
                <p>Every one of our accomplices is given clear working conditions, boundless commission, right tracking, which can be checked in a flash whenever of the day.</p>
                <p>eqtradesAffiliate Cooperation Program is organized the accompanying way: you educate your guests about us, they index.php and deposit into an exchanging account. In this way, you set up trust-based relations between you, your guests andeqtrades.</p>
                <p>The consequence of such participation within you andeqtrades is the chance of acquiring financial compensation for the client securing (by means of the site, informal communities' page, email).</p>
                <h3>FOR OUR PARTNERS</h3>
                <p>Our accomplices approach special marketing materials so your chances of accomplishing the fundamental objective of a subsidiary program will rise. Guests to your site or interpersonal organizations' page will see the standards and this will be the initial move towards your income.</p>
                <p>You will approach an individual record, which will enable you to screen your guests' exercises statistics. By utilizing these statistics you'll realize precisely the amount you will procure.</p>
                <p>In case you are keen on our offer, pursue the connection and complete the enlistment procedure. Spot our flags on your site and begin winning witheqtrades.</p>
                <p>Traders can likewise move toward becoming accomplices of theeqtrades. Bring your companions and get additional assets and rewards into your trading account!</p>
                <button>
                    <h1><FontAwesomeIcon className="icon" icon={faHandshake}/></h1>
                        <div>
                            <h3>BECOME A PARTNER NOW</h3>
                        </div>                   
                </button>
            </div>
             <div className="side">
                <h3>Trading tools</h3>
                <ul>
                    <li ><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li className='affiliateClicked'><Link to="/affiliate">Affiliate Program</Link></li>
            </ul>
            </div>
        </div>

        </>
     );
}

export default Affiliate;