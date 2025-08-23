import React from 'react';
import { Link } from 'react-router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faLineChart } from '@fortawesome/free-solid-svg-icons';

import "./ebook.scss";

const Ebook = () => {
    return (  
        <>
            <div className="ebookNav">
                <Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566"/><p>Main</p></Link><span>/ Ebook</span>
            </div>

        
        <div className="ebook">
            <div className="main">
                 <h1>LEARN ALL ABOUT FOREX TRADING WITH AN EBOOK FROM TRADERBASE</h1>
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
                    <li><Link to="/webinars">Webinars</Link></li>
                    <li><Link to="/calendar">Calendar Webinars</Link></li>
                    <li className='ebookClicked'><Link to="/ebook">Ebook</Link></li>
                </ul>
            </div>

        </div>
        </>
    );
}

export default Ebook;