import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faLineChart } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router';
import "./webinars.scss"

const Webinars = () => {
    return (  
        <>
        <div className="webinarsNavigation">
                   <Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566"/><p>Main</p></Link><span>/ Webinars</span>
        </div>
        <div className="webinars">
            <div className="main">
                <h1>FOREX WEBINARS</h1>
                 <p>
                    EQ trades webinars are current preparing workshops directed by experienced merchants. 
                    Each web exercise is organized in a manner to break down at least one issues (systems, exchanging approaches) progressively or to examine the present market circumstance with the goal to draw up a medium-term and long-term investment plan later on.
                 </p>
                 <p>
                    Our online courses are free and accessible to every one of our customers. You can remove a portion from any gadget. 
                    You should simply to be enlisted.
                 </p>



                    <button>
                        <h1><FontAwesomeIcon className="icon" icon={faLineChart} /></h1>
                        <div>
                            <h3>START TRADING NOW</h3>
                        </div>
                
                        </button>

            </div>
                <div className="side">
                          <h3>Trading tools</h3>
                          <ul>
                            <li className='webinarsClicked'><Link to="/webinars">Webinars</Link></li>
                            <li><Link to="/calendar">Calendar Webinars</Link></li>
                            <li><Link to="/ebook">Ebook</Link></li>   
                          </ul>
                      </div>
        </div>
        </>
    );
}

export default Webinars;