import React from 'react';
import { Link }  from "react-router-dom";
import "./license.scss"

const License = () => {
  return (
    <div className='license'>
        <div className='top'>
            <div className='left'>
                <img src="logo.png" alt="" />
            </div>
            <div className='right'>
                <h3>REGULATIONS:</h3>
                <div className='regulations'>
                    <div className='regulation'>
                    <img src="license-approved.svg" alt="" />
                    <p>Licensed by MFSA</p>
                    </div>
                    <div className='regulation'>
                    <img src="license-approved.svg" alt="" />
                    <p>MIFID Compliant</p>
                    </div>
                    <div className='regulation small'>
                    <img src="license-approved.svg" alt="" />
                    <p>FCA</p>
                    </div>
                    <div className='regulation small'>
                    <img src="license-approved.svg" alt="" />
                    <p>BaFin</p>
                    </div>
                    <div className='regulation small'>
                    <img src="license-approved.svg" alt="" />
                    <p>AMF</p>
                    </div>
                    <div className='regulation small'>
                    <img src="license-approved.svg" alt="" />
                    <p>CONSOB</p>
                    </div>
                </div>
               
            </div>

        </div>
        <div className='middle'>
            <div className="first-row">
                <div className='left'>
                    <h3>LIQUIDITY PROVIDERS:</h3>
                </div>
                <div className='right'>
                    <div className="liquidityProvider">
                        <img src="dukascopy.svg" alt="" />
                    </div>
                    <div className="liquidityProvider">
                        <img src="primexm.svg" alt="" />
                    </div>
                    <div className="liquidityProvider">
                        <img src="barclays.svg" alt="" />
                    </div>
                    <div className="liquidityProvider">
                        <img src="ubs.svg" alt="" />
                    </div>
                    <div className="liquidityProvider">
                        <img src="currenex.svg" alt="" />
                    </div>
                    <div className="liquidityProvider">
                        <img src="citi.svg" alt="" />
                    </div>
                    <div className="liquidityProvider">
                        <img src="creditsuisse.svg" alt="" />
                    </div>
                 </div>
             </div>
            <div className="second-row">
                <div className="left">
                    <h3>CORPORATE GOVERNANCE & BANKING:</h3>
                </div>
                <div className="right">
                    <img src="pwc.svg" alt="" />
                </div>
            </div>
           <div className="third-row">
                <div className="left">
                    <h3>ASSOCIATIONS:</h3>
                </div>
           </div>
        </div>
        <div className='bottom'>
            <p>Trader Base FX Company Platform. is regulated by the US Financial Services Authority (License Number IS/560000).</p>
            <p>RISK WARNING: Trading in Forex and Contracts for Difference (CFDs), which are leveraged products, is highly speculative and involves substantial risk of loss.
                It is possible to lose all your capital. Your capital is not guaranteed and may go down as well as up. Therefore, Forex and CFDs may not be suitable for all investors.
                Only invest with money you can afford to lose.
                So please ensure that you fully understand the risks involved. Seek independent advice if necessary.</p>
            <p>CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 
                Over the past 12 months 54.6% of Trader Base FX Company Platform retail investor accounts lose money when trading CFDs with Trader Base FX Company Platform. 
                You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.</p>

            <p>Trader Base FX Company Platform. provides its services to all global citizens. 
                Copyright © 2015 - 2022 Trader Base FX Company Platform.. All Rights Reserved.
            <Link className="terms-conditions"to="terms"> Terms and Conditions</Link>|<Link to="/risks" className='risk-disclosure'>Risk Disclosure</Link>   * Prices displayed on the website may be affected by changes in currency exchange rate and price movements thereby affecting your investment return therefrom. Trader Base FX Company Platform is incorporated in US, 31 Beeston Road, Nottingham | Company Registration Number: IS/560000 MFSA License Number: IS/560000.
                        </p>
        </div>
      
    </div>
  )
}

export default License
