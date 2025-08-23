import React from 'react'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import First from './mainList/first'
import Second from './mainList/second'
import Third from './mainList/third'
import Fourth from './mainList/fourth'
import Fifth from "./mainList/fifth"
import Sixth from './mainList/sixth'
import Seventh from './mainList/seventh'
import Eight from './mainList/eight'
import Ninth from './mainList/ninth'
import Tenth from './mainList/tenth'
import Eleven from './mainList/eleven'
import Twelve from './mainList/twelve'
import Thirteen from './mainList/thirteen'
import Fourteen from './mainList/fourteen'
import Fifteen from './mainList/fifteen'
import Sixteen from './mainList/sixteen'
import Seventeen from './mainList/seventeen'
import Eighteen from "./mainList/eighteen"
import Nineteen from './mainList/nineteen'
import Twenty from './mainList/twenty'
import Twentyone from './mainList/twentyone'
import Twentytwo from './mainList/twentytwo'
import Twentythree from './mainList/twentythree'







import "./terms.scss"

const Terms = () => {
  return (
      <>      
        <div className="termsNav">
            <Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566"/><p>Main</p></Link><span>/ Terms & Conditions</span>
        </div>
      <div className="terms">
        <div className="main">
          <h1>TERMS & CONDITIONS</h1>
          <p>Note: The English version of this agreement is the governing version and shall prevail whenever there is any discrepancy between the English version and the other versions.</p>
          <p>This client agreement, together with any Schedule(s), and accompanying documents, as amended from time to time, (this “Agreement”) sets out the terms of the contract between you and us. Please read it carefully and let us know as soon as possible if there is anything which you do not understand.</p>
          <First/>
          <Second/>
          <Third/>
          <Fourth/>
          <Fifth/>
          <Sixth/>
          <Seventh/>
          <Eight/>
          <Ninth/>
          <Tenth/>
          <Eleven/>
          <Twelve/>
          <Thirteen/>
          <Fourteen/>
          <Fifteen/>
          <Sixteen/>
          <Seventeen/>
          <Eighteen/>
          <Nineteen/>
          <Twenty/>
          <Twentyone/>
          <Twentytwo/>
          <Twentythree/>
        </div>
        <div className="side">
          <h3>Trading tools</h3>
          <ul>
              <li className='termsClicked'><Link to="#">Terms & Conditions</Link></li>
              
          </ul>
        </div>
      </div>

      </>

        )
}

export default Terms
