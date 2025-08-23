import React from 'react';
import "./mainlist.scss"

const Twelve = () => {
    return ( 
        <div className="mainlist">
            <h2> MARGINING ARRANGEMENTS</h2>
            <ol>
                <li>MARGIN REQUIREMENT
                    <p>A maximum leverage, defined per instrument, is calculated at the opening of a new position, as per P24O Trading Conditions table below.</p>
                </li>
                <li>CONTINGENT LIABILITY
                    <p>Where we effect or arrange a Transaction, you should note that, depending upon the nature of the Transaction, you may be liable to make further payments when the Transaction fails to be completed or upon the earlier settlement or closing out of your position. You may be required to make further variable payments by way of margin against the purchase price of the investment, instead of paying (or receiving) the whole purchase (or sale) price immediately. The movement in the market price of your investment will affect the amount of margin payment you will be required to make. We will monitor your margin requirements on a daily basis and we will inform you as soon as it is reasonably practicable of the amount of any margin payment required under this clause.</p>
                </li>
                <li>MARGIN CALL
                    <p>You agree to pay us on demand such sums by way of margin as are required from time to time as we may in our discretion reasonably require for the purpose of protecting ourselves against loss or risk of loss on present, future or contemplated Transactions under this Agreement.</p>
                </li>
                <li>WARNING CALL
                    <p>P24O’s Trading Department sends a Warning Call to the Client when its margin falls under the “Warning Threshold” level. However, P24O will not take any action on the Client’s account until the margin reaches or falls under the “Last Threshold” level.</p>
                    <p>“Warning Threshold” is referring to the situation when the equity of the account reaches the level of the “Used Margin”.</p>
                    <p>“Last Threshold” is referring to the situation when the equity of the account reached the level of twenty percent (20%) of the “Used Margin”.</p>
                    <p>“Used Margin” refers to the amount of money required in order to open a leveraged position.</p>
                </li>
                <li>FAILURE TO MEET MARGIN CALL – POSITION CLOSE OUT
                    <p>Please note that in the event that you fail to meet a margin call or your margin reaches or falls under the “Last Threshold”, we may immediately at our full discretion and without further notification close out the position.</p>
                </li>
                <li>FORM OF MARGIN
                    <p>Margin must be paid in cash in currency acceptable by us, as requested from time to time by P24O.</p>
                    <p>Cash Margin paid to us is held as client money in accordance with the requirements of the Client Money Rules. Margin deposits shall be made by wire transfer, credit card, e-wallet or by such other means as P24O may direct.</p>
                </li>
                <li>SET-OFF ON DEFAULT
                    <p>If there is an Event of Default or this Agreement terminates, we shall set-off the balance of cash margin owed by us to you against your obligations (as reasonably valued by us). The net amount, if any, payable between us following such set-off, shall take into account the Liquidation Amount payable under Clause 15 (Netting).</p>
                </li>
                <li>FURTHER ASSURANCE
                    <p>You agree to execute such further documents and to take such further steps as we may reasonably require perfecting our security interest over and obtaining legal title to the Secured Obligations.</p>

                </li>
                <li>NEGATIVE PLEDGE
                    <p>You undertake neither to create nor to have outstanding any security interest whatsoever over, nor to agree to assign or transfer, any of the cash margin transferred to us, except a lien or pledge routinely imposed on all securities in a clearing system in which such securities may be held.</p>
                </li>
                <li>GENERAL PLEDGE or LIEN  
                    <p>In addition and without prejudice to any rights to which we may be entitled under this Agreement or any Applicable Regulations, we shall have a general pledge or lien on all cash held by us or our Associates or our nominees on your behalf until the satisfaction of the Secured Obligations.</p>
                </li>
            </ol>

        </div>
     );
}

export default Twelve;