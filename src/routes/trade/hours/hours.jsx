import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router';
import "./hours.scss"

const Hours = () => {
    return ( 
        <>
        <div className="hoursNav">
             <Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566"/><p>Main</p></Link><span>/ Trading hours</span>

        </div>
        <div className="hours">
            <div className="main">
                <h1>FOREX TRADING HOURS</h1>
                <p>
                    It is realized that the Forex advertises permits exchanging nonstop, from Monday to Friday. On ends of the week and occasions, the business sectors are shut. 
                    Moreover, exchanging hours are equal to the open time of banks. 
                    This is associated with the way that this market does not work throughout the end of the week (banks have likewise days off).
                </p>
                <p>
                    24-hour accessibility of the Forex work is conceivable because of the way that the market isn't fixing to a particular district, however, is accessible to all nations around the world. In this way, when the night comes in a single corner of the globe and the banks get shut, morning comes in the other piece of the world and different banks open. 
                    This is the guideline of congruity of work.
                     This division of the world into zones relying upon the season of the day is alluded to as "Exchanging Sessions". There are four fundamental sessions and they come in a steady progression, even covering for a brief span.
                </p>
                <p>
                    Market sessions are a vital component of exchanging hours since they straightforwardly rely upon the guideline of work. 
                    All things considered, every session has its own subtleties and qualities, which are communicated in expanding or bringing down instability, higher volume in explicit money sets, etc.
                </p>
                <p>
                    As exchange is led everywhere throughout the world, it is important to put together the information with respect to solitary planning, which would go about as a standard. For quite a while, GMT (Greenwich, London) has been such a standard. 
                    At present, it is viewed as that this standard is outdated, and it was supplanted by the UTC (Universal Coordinated Time) standard.
                </p>
                <p>
                    Here are the primary four sessions, their biggest trades and the working time:
                </p>
                <ol>
                        <li>Asian session – Tokyo, Hong Kong, Singapore – 02:00 to 11:00</li>
                        <li>European session – Frankfurt, London – 08:00 to 17:00</li>
                        <li>US session – New York, Chicago – 15:00 to 24:00</li>
                        <li>Pacific session – Wellington, Sydney 22:00 to 06:00</li>
                </ol>
                
            </div>
            <div className="side">
                <h3>Trading tools</h3>
                <ul>
                    <li className='hoursClicked'><Link to="#">Trading hours</Link></li>
                    
                </ul>
                
            </div>
        </div>
        </>
     );
}

export default Hours;