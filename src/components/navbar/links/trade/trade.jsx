import React from 'react'
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faFileText } from '@fortawesome/free-solid-svg-icons';
import "./trade.scss"

const Trade = ({closeMenu}) => {

    return (
        <div className="trade">
            <div className="tradeTools">
                <h1><FontAwesomeIcon icon={faCogs}  color='#01a976'/><span>Trading tools</span></h1>
                <ul>
                    <li><Link to="/forex" onClick = {closeMenu} className='tradeLinks'>Forex</Link></li>
                    <li><Link to="/futures" onClick = {closeMenu} className='tradeLinks'>Commodity futures</Link></li>
                    <li><Link to="/indexes" onClick = {closeMenu} className='tradeLinks'>Share indexes</Link></li>
                    <li><Link to="/carriers" onClick = {closeMenu} className='tradeLinks'>Energy carriers</Link></li>
                </ul>
            </div>
            <div className="tradeAccount">
                <h1><FontAwesomeIcon icon={faCreditCard} color='#01a976'/>Trading account </h1>
                <ul>
                    <li><Link to="/payment" onClick = {closeMenu} className='tradeLinks'>Payment methods</Link></li>
                    <li><Link to="/withdrawal" onClick = {closeMenu} className='tradeLinks'>Withdrawal information and General fees</Link></li>
                </ul>

            </div>
            <div className="termsTrade">
                <h1><FontAwesomeIcon icon={faFileText} color='#01a976'/> Terms of Trade</h1>
                <ul>
                    <li><Link to="/execution" onClick = {closeMenu} className='tradeLinks'>Order execution</Link></li>
                    <li><Link to="/spreads" onClick = {closeMenu} className='tradeLinks'>Spreads</Link></li>
                    <li><Link to="/swaps" onClick = {closeMenu} className='tradeLinks'>Swaps</Link></li>
                    <li><Link to="/hours" onClick = {closeMenu} className='tradeLinks'>Trading hours</Link></li>
                </ul>

            </div>

        </div>

  )
}

export default Trade
