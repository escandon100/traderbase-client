import React from 'react'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShield } from '@fortawesome/free-solid-svg-icons'
import { faBuilding} from '@fortawesome/free-solid-svg-icons'
import { faGavel} from '@fortawesome/free-solid-svg-icons'


import "./about.scss"

const About = ({closeMenu}) => {
  return (
    <div className='about'>
      <div>
        <h1><FontAwesomeIcon icon={faBuilding} color='#01a976'/><span>CoinCircle Pro </span></h1>
        <ul>
          <li><Link to="/about"  onClick = {closeMenu} className="aboutLinks">About us</Link></li>
          <li><Link to="/contact"  onClick = {closeMenu} className="aboutLinks">Contact us</Link></li>
          <li><Link to="/affiliate"  onClick = {closeMenu} className="aboutLinks">Affiliate program</Link></li>
        </ul>

      </div>
      <div>
        <h1><FontAwesomeIcon icon={faGavel} color='#01a976'/><span>Regulation</span></h1>
        <ul>
          <li><Link to="/regulation"  onClick = {closeMenu} className="aboutLinks">Regulation explained</Link></li>
          <li><Link  to="/verification"  onClick = {closeMenu} className="aboutLinks">Account Verification Documents</Link></li>
        </ul>

      </div>
      <div>
        <h1><FontAwesomeIcon icon={faShield} color='#01a976'/>Transparency Policy</h1>
        <ul>
          <li><Link to="/privacy"  onClick = {closeMenu} className="aboutLinks">Privacy policy</Link></li>
          <li><Link to="/safety"  onClick = {closeMenu} className="aboutLinks">Safety of Funds</Link></li>
          <li><Link to="/risk"  onClick = {closeMenu} className="aboutLinks">Risk disclosure</Link></li>
          <li><Link to="/terms"  onClick = {closeMenu} className="aboutLinks">Terms and conditions</Link></li>
          <li><Link to="/information"  onClick = {closeMenu} className="aboutLinks">Information Security</Link></li>
          <li><Link to="/conflict"  onClick = {closeMenu}className="aboutLinks">Conflict of interest</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default About
