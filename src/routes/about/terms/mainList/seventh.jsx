import React from 'react';
import "./mainlist.scss"

const Seventh = () => {
    return ( 
        <div className="mainlist">
            <h2>NON ADVISED</h2>
            <ol>
                <li>EXECUTION ONLY
                    <p>We deal on an execution-only basis and do not advise on the merits of particular Transactions, or their taxation consequences.</p>
                </li>
                <li>OWN JUDGEMENT AND SUITABILITY
                    <p>In asking us to enter into any Transaction, you represent that you have been solely responsible for making your own independent appraisal and investigations into the risks of the Transaction. You represent that you have sufficient knowledge, market sophistication, professional advice and experience to make your own evaluation of the merits and risks of any Transaction and that you have read and accepted the Risk Disclosure Statement for Transactions in Foreign Exchange and Derivatives (including Contracts for Differences) and guidelines in relation to the financial instruments and the markets which are available in our websites. We give you no warranty as to the suitability of the products traded under this Agreement and assume no fiduciary duty in our relations with you.</p>
                </li>
                <li>INCIDENTAL INFORMATION AND INVESTMENT RESEARCH
                    <p>Where we do provide generic trading recommendations, market commentary or other information:</p>
                    <ul>
                        <li>this is incidental to your dealing relationship with us. It is provided solely to enable you to make your own investment decisions and does not amount to advice;</li>
                        <li>if the document contains a restriction on the person or category of persons for whom that document is intended or to whom it is distributed, you agree that you will not pass it on to any such person or category of persons;</li>
                        <li>we give no representation, warranty or guarantee as to the accuracy or completeness of such information or as to the tax consequences of any Transaction;</li>
                        <li>where information is in the form of a document containing a restriction on the person or category of persons for whom that document is intended or to whom it is distributed, you agree that you will not pass it on contrary to that restriction;</li>
                    </ul>
                </li>
            </ol>
            <p>you accept that prior to dispatch, we may have acted upon it ourselves or made use of the information on which it is based. We do not make representations as to the time of receipt by you and cannot guarantee that you will receive such information at the same time as other clients. Any published research reports or recommendations may appear in one or more screen information service.</p>
            <p>Please refer to our Conflicts of Interest Policy for further information on how we manage conflicts which would affect the impartiality of investment research we provide to you.</p>
        </div>
     );
}

export default Seventh;