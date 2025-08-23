import React from 'react';
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import "./regulation.scss"

const Regulation = () => {
    return ( 
        <>
        <div className="regulationNav">
             <Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566"/><p>Main</p></Link><span>/ Regulation Explained</span>
        </div>
        
        <div className="regulation">
            <div className="main">
                <h1>TRADER BASE FX REGULATION & LICENSE</h1>
                <h3>TRADER BASE FX REGULATION & LICENSE</h3>
                <p>P24O Ltd. holds a Category 3 investment services License no. IS/560000 issued by the US Financial Services Authority (The MFSA).</p>
                <ol>
                    <li>Regulated by MFSA
                        <p>US Financial Services Authority</p>
                        <p>The US Financial Services Authority MFSA is the single regulator for financial administrations in US. It was set up by exceptional Act of Parliament, the US Financial Services Authority Act, 1988 as revised in 1994 and 2002 taking over supervisory capacities recently completed by the Central Bank of US, the US Stock Exchange, and the US Financial Services Center. The Authority is a completely self-governing open foundation and reports to Parliament on a yearly premise.</p>
                    </li>
                    <li>MIFID Compliant
                        <p>Markets in Financial Instruments Directive</p>
                        <p>P24O Ltd. follows the European Markets in Financial Instruments Directive (MiFID). MiFID gives a fit administrative condition to investments benefits over the European Economic Area (EEA). The fundamental targets of the MiFID Directive are to improve money related straightforwardness, increment rivalry, and offer more prominent shopper assurance in investment administrations.</p>
                    </li>
                    <p>Use of logos of any financial regulator or authority does not signify endorsement or approval by such authority of the products or services offered by P24O.</p>
                    <p>P24O Ltd. is approved to work inside the EEA and the accompanying administrative bodies have given their endorsement for P24O Ltd to give cross outskirt investments benefits in their country:</p>
                    <li>FCA
                        <p>Financial Conduct Authority</p>
                        <p>United Kingdom – Registration Number: 595195 The Financial Conduct Authority (FCA) is an independent non-governmental body, given statutory powers by the Financial Services and Markets Act 2000. It is a company limited by guarantee and financed by the financial services industry.</p>

                    </li>
                    <li>BaFin
                        <p>Federal Financial Supervisory Authority</p>
                        <p>Germany – Registration Number: 131055 The Federal Financial Supervisory Authority (Bundesanstalt für Finanzdienstleistungsaufsicht – BaFin) administers banks, financial administrations suppliers, protection endeavors and securities exchanging. The goal of financial supervision is to guarantee the best possible working, steadiness and honesty of the German budgetary market.</p>
                    </li>
                    <li>ACP
                        <p>French Prudential Supervisory Authority</p>
                        <p>France – Registration Number: 74397 The French Prudential Supervisory Authority (Autorité de Contrôle Prudentiel – ACP) is an autonomous managerial specialist, which screens the exercises of banks and insurance agencies in France. It works under the sponsorship of the French national bank, Banque de France.</p>
                    </li>
                    <li>CNMV
                        <p>Comisión Nacional del Mercado de Valores</p>
                        <p>Spain – Registration Number: 3354 The Comisión Nacional del Mercado de Valores (CNMV) is the office responsible for overseeing and reviewing the Spanish Stock Markets and the exercises of the considerable number of members in those business sectors. It was made by the Securities Market Law, which founded the top to bottom changes of this section of the Spanish money related framework.</p>

                    </li>
                    <li>FINANSTILSYNET
                        <p>Denmark – Registration Number: 9221 The Danish FSA is a piece of the Ministry of Business and Growth and goes about as secretariat for the Financial Business Council, the Danish Securities Council and the Money and Pension Panel.</p>


                    </li>
                
                </ol>
            </div>
            <div className="side">
                <h3>Trading tools</h3>
                <ul>
                    <li className='regulationClicked'><Link to="#">Regulation Explained</Link></li> 
                </ul>
            </div>

        </div>
        </>
     );
}

export default Regulation;