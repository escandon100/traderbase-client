import React from 'react';
import { Link } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faLineChart } from '@fortawesome/free-solid-svg-icons';
import "./advices.scss";

const Advices = () => {
    return (  
        <>
        <div className="advicesNav">
            <Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566"/><p>Main</p></Link><span>/ Trader advices</span>
        </div>
        <div className="advices">
            <div className="main">
                <h1>Trader Advices</h1>
                <p>
                    We need to impart to you a financial timetable that demonstrates the primary up and coming world occasions from different fields of action that are associated somehow with money. On this schedule, you will be conceivable to discover information for a particular time interim, just as get to know the figures of specialists and track the elements of changes of explicit budgetary markers for quite a long while. 
                    Thus, you will have an undeniable instrument, in a perfect world appropriate for the major investigation of the market. The monetary schedule is a key instrument for individuals who need to sort out the money related data.
                </p>
               <button>
                    <h1><FontAwesomeIcon className="icon" icon={faLineChart} /></h1>
                    <div>
                        <h3>START TRADING NOW</h3>
                    </div>
                </button>

            </div>
        

        </div>
        </>
    );
}

export default Advices;