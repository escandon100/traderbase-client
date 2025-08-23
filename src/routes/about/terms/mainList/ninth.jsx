import React from 'react';
import "./mainlist.scss"

const Ninth = () => {
    return ( 
        <div className="mainlist">
            <h2>9. TRADING POLICIES AND PROCEDURES</h2>
            <ol>
                <li>PLACING OF INSTRUCTIONS
                    <p>You may give us instructions in electronic form through the P24O Online Trading System or orally by telephone to the P24O Trading Desk; unless we tell you that instructions can only be given in a particular way. If you give instructions by telephone, your conversation will be recorded. If any instructions are received by us by telephone, computer or other medium we may ask you to confirm such instructions in writing. We shall be authorized to follow instructions notwithstanding your failure to confirm them in writing. In this Agreement “instructions” and “orders” have the same meaning.</p>
                </li>
                <li>TYPES OF ORDERS ACCEPTED
                    <p>Some of the types of Orders P24O accepts include, but are not limited to:</p>
                    <ul>
                        <p>◉Good till Cancelled (“GTC”) – An Order (other than a Market Order), that by its terms is effective until filled or cancelled by Customer. GTC Orders do not automatically cancel at the end of the Business Day on which they are placed.</p>
                        <p>◉Limit – An Order (other than a Market Order) to buy or sell the identified market at a specified price. A Limit Order to buy generally will be executed when the Ask Price equals or falls below the Bid Price that you specify in the Limit Order. A Limit Order to sell generally will be executed when the Bid Price equals or exceeds the Ask Price that you specify in the Limit Order.</p>
                        <p>◉Market – An Order to buy or sell the identified market at the current market price that P24O provides either via the Online Trading System or over the telephone through one of the dealers. An Order to buy is executed at the current market Ask Price and an Order to sell is executed at the current market Bid Price.</p>
                        <p>◉One Cancels the Other (“OCO”) – An Order that is linked to another Order. If one of the Orders is executed, the other will be automatically cancelled.</p>
                        <p>◉Stop Loss – A Stop Loss Order is an instruction to buy or sell a market at a price which is worse than the opening price of an open position (or worse than the prevailing price when applying the Stop Loss Order to an already open position). It can be used to help protect against losses. Please note that because of market gapping, the best available price that may be achieved could be materially different to the price set on the Stop Loss Order and as such, Stop Loss Orders are not guaranteed to take effect at the price for which they are set.</p>
                        <p>◉Trailing Stop – A Trailing Stop is the same as a Stop Loss Order with the only difference being that, instead of setting a price at which the Order is activated, the Trailing Stop Order is activated at a fixed distance from the market price. For example, if Customer has purchased a long open position and the market Ask Price increases, the Trailing Stop price will also increase and will trail behind the market Ask Price at the fixed distance set by Customer. If the market Ask Price then decreases, the Trailing Stop price will remain fixed at its last position and if the market Ask Price reaches the Trailing Stop price, the Order will be executed. Please note that because of market gapping, the best available price that may be achieved could be materially different to the price set on the Trailing Stop Order and as such, Trailing Stop Orders are not guaranteed to take effect at the fixed distance for which they are set.</p>
                    </ul>  
                     <p>Following submission of an Order, it is your sole responsibility to remain available for Order and Fill confirmations, and other communications regarding your Account until all open Orders are completed. Thereafter, you must monitor your Account frequently when you have Open Positions in the Account.</p>
                    <p>Your Order shall be valid in accordance with the type and time of the given Order, as specified. If the time of validity or expiration date/time of the order is not specified, it shall be valid for an indefinite period.</p>
                    <p>Kindly note that any specific instructions from you may prevent us from taking the steps that P24O has designed and implemented in its execution policy as explained below to obtain the best possible result for the execution of your order/s in respect of the elements covered by your instructions.</p>    
                </li>
                <li>TERMS OF ACCEPTANCE FOR ORDERS
                    <p>It is your sole responsibility to clearly indicate the terms of an Order when entered, whether it is a Market Order, Limit Order, Stop Loss Order or any other type of Order, including the relevant price and lot size. You acknowledge and agree that, despite our best efforts, the price at which execution occurs may be materially different to the price specified in your Order. This may result from sudden price movements in the underlying assets that are beyond our control. P24O shall have no liability for failure to execute Orders. P24O shall have the right, but not the obligation, to reject any Order in whole or in part prior to execution, or to cancel any Order, where your Account contains Margin that is insufficient to support the entire Order or where such Order is illegal or otherwise improper.</p>
                </li>
                <li>EXECUTION POLICY
                    <p>Please refer to our Best Execution Policy for full details of P24O’s order execution and allocation policies. Clients shall be notified by email of any material change to P24O’s order execution arrangements or execution policy.</p>
                </li>
                <li>AUTHORITY
                    <p>We shall be entitled to act for you upon instructions given or purporting to be given by you or any person authorized on your behalf without further enquiry as to the genuineness, authority or identity of the person giving or purporting to give such instructions provided such instruction is accompanied by your correct Account number and password. If your Account is a joint account, you agree that we are authorized to act on the instructions of any one person in whose name the Account is held, without further inquiry. We shall have no responsibility for further inquiry into such apparent authority and no liability for the consequences of any actions taken or failed to be taken by us in reliance on any such instructions or on the apparent authority of any such persons.</p>
                </li>
                <li>CANCELLATION/WITHDRAWAL OF INSTRUCTIONS
                    <p>Non-Market Orders may be cancelled via the P24O Online Trading System but we can only cancel your instructions if you explicitly request so, provided that we have not acted up to the time of your request upon those instructions. Executed instructions may only be withdrawn or amended by you with our consent. P24O shall have no liability for any claims, losses, damages, costs or expenses, including legal fees, arising directly or indirectly out of the failure of such Order to be cancelled.</p>
                </li>
                <li>RIGHT NOT TO ACCEPT ORDERS
                    <p>Non-Market Orders may be cancelled via the P24O Online Trading System but we can only cancel your instructions if you explicitly request so, provided that we have not acted up to the time of your request upon those instructions. Executed instructions may only be withdrawn or amended by you with our consent. P24O shall have no liability for any claims, losses, damages, costs or expenses, including legal fees, arising directly or indirectly out of the failure of such Order to be cancelled.</p>
                </li>
                <li> CONTROL OF ORDERS PRIOR TO EXECUTION
                    <p>We have the right (but not the obligation) to set limits and/or parameters to control your ability to place orders at our absolute discretion. Such limits and/or parameters may be amended, increased, decreased, removed or added to by us at our absolute discretion and may include (without limitation):</p>
                    <ul>
                        <p>◉controls over maximum order amounts and maximum order sizes;</p>
                        <p>◉controls over our total exposure to you;</p>
                        <p>◉controls over prices at which orders may be submitted (to include (without limitation) controls over orders which are at a price which differs greatly from the market price at the time the order is submitted to the order book);</p>
                        <p>◉controls over the Electronic Services (to include (without limitation) any verification procedures to ensure that any particular order or orders has come from you);</p>
                        <p>◉or any other limits, parameters or controls which we may be required to implement in accordance with Applicable Regulations.</p>
                    </ul>
                </li>
                <li>EXECUTION OF ORDERS
                    <p>We shall use our reasonable endeavors to execute any order promptly, but in accepting your orders we do not represent or warrant that it will be possible to execute such order or that execution will be possible according to your instructions. If we encounter any material difficulty relevant to the proper carrying out of an order on your behalf we shall notify you promptly.</p>
                </li>
                <li>CONFIRMATIONS
                    <p>At the end of each trading day, confirmations for all Transactions that we have executed on your behalf on that trading day will be available via your online Account on our Website in the Open Positions window and Deal Blotter in the dealing console, which is updated online as each Transaction is executed. Confirmation of execution and statements of your Account(s), in the absence of manifest error, shall be deemed correct, conclusive and binding upon you if not objected to immediately by email if Orders were placed through P24O’s Online Trading System or by telephone to the P24O Trading Desk, within five Business Days of making such confirmations available to you via our Website or we notify you of an error in the confirmation within the same period.</p>
                    <p>In cases where the prevailing market represents prices different from the prices posted by P24O, P24O will attempt, on a best efforts basis and in good faith, to execute Market Orders on or close to the prevailing market prices. This may or may not adversely affect Customer’s Realized and Unrealized Gains and Losses.</p>
                </li>
                <li>CANCELLATION OF TRADES
                    <p>We have the right to reject an order or to cancel a trade if we have evidence on:</p>
                    <ul>
                      <p>◉fraud/illegal actions that led to the transaction;</p>  
                       <p>◉orders placed based on manipulated prices as a result of system errors or system malfunctions;</p> 
                        <p>◉arbitrage trading on prices offered by our platforms as a result of systems errors;</p>
                        <p>◉and coordinated transactions by related parties in order to take advantage of systems errors and delays on systems updates</p>
                    </ul>
                </li>
                <li>DISABLING AND CANCELLING DEPOSITS
                    <p>We have the right not to accept funds deposited by you and/or to cancel your deposits in the following circumstances:</p>
                    <ul>
                        <p>◉If you fail to provide P24O with any documents it requests from you either for client identification purposes or for any other reason;</p>
                        <p>◉If P24O suspects or has concerns that the submitted documents may be false or fake;</p>
                        <p>◉If P24O suspects you are involved in illegal or fraudulent activity;</p>
                        <p>◉If P24O is informed that your credit or debit card (or any other payment method used) has been lost or stolen;</p>
                        <p>◉Where P24O considers that there is a chargeback risk;</p>
                        <p>and when you deposit $15.000 or more or if you make over 10 separate deposits to your trading Accounts and P24O is unable to verify your credit or debit card details or is unable to verify any other payment method used.
                         In case of cancelled deposits, and if there is not a confiscation of your funds by a supervisory authority on the grounds of money laundering suspicion or for any other legal infringement, your funds will be returned to your bank account.</p>
                    </ul>
                </li>
                <li>PERFORMANCE AND SETTLEMENT
                    <p>You will promptly deliver any instructions, money, or documents deliverable by you under a Transaction in accordance with that Transaction as modified by any instructions given by us.</p>
                </li>
                <li>POSITION LIMITS
                    <p>We may require you to limit the number of open positions which you may have with us at any time and we may in our sole discretion close out any one or more Transactions in order to ensure that such position limits are maintained.</p>
                </li>
                <li>TRAILING STOP FUNCTIONALITY IN CASE THAT MT5 TERMINAL IS CLOSED
                    <p>In the event that the Trader Base FX or DXTrade client terminal is closed, Trailing Stop will not work. This happens as the Trailing Stop works on the client terminal side and in this respect, if the client terminal is closed, only Stop Loss that was placed by Trailing Stop before the closing of the terminal can trigger.</p>
                </li>
                <li>WITHDRAWALS
                    <p>Without prejudice and subject to the terms of this Agreement, all Applicable Regulations and all conditions attaching to any relevant payments made to you under a bonus or rebate scheme operated by us, monies may be withdrawn by you from your Account on 24 hours written notice to us, provided that such monies are not being utilized for margin purposes or have otherwise become owing to us.</p>
                    <p>Payments from your Account require a withdrawal request form signed by all required Account holders and submitted in writing to us. If you request a withdrawal of monies from your Account and we cannot comply with it without closing some part of your open positions, we will not comply with the request until you have closed sufficient positions to allow you to make the withdrawal. Withdrawals will only be made on request by you, by bank transfer to an account in your name or by bankers draft payable to you personally or such other method as we, in our absolute discretion, may determine.</p>
                </li>
                <li>ACCOUNT CLOSING
                    <p>You may close your account at any time by sending a written request to P24O. Subject to what is provided in the previous paragraph in regard to Withdrawals, funds will be transferred, in most cases, within 48 hours or receiving the request. Funds will be only transferred to a bank account in your name. No third party transfers will be made.</p>
                </li>
                <li>SWAP FREE ACCOUNTS
                    <p>Any activity which is deemed as likely to cause P24O or which has caused P24O to suffer any unreasonable cost, expense, loss or prejudice, such as but not limited to a swap free account holder (“Islamic Account”) opening of positions and keeping such positions open for a prolonged period of time (resulting in P24O incurring costs with its counter-parties or internally), may result in account closure or the customer being charged for such costs, expenses or loss, as the case may be. In such latter case, P24O shall be entitled to deduct such amounts from the customer’s balance subject to prior notification.</p>
                </li>
                <li>NEGATIVE BALANCE PROTECTION MECHANISM ON CFD TRADING ACCOUNTS
                    <p>In cases of market movements which result in a negative balance in a client’s CFD Trading Account, P24O Limited will execute one of the following mechanisms:</p>
                    <ul>
                        <p>◉It will adjust the account balance to zero, thereby ensuring that the Client will not have to fund any negative balance and/or lose more money beyond the amount that the Client had allocated initially for CFD trading;</p>
                        <p>◉It will open a new trading account with a zero balance and close off the old account, without the client having to fund any negative balance and/or lose more money beyond the amount that the Client had allocated initially for CFD trading;</p>
                    </ul>
                    <p>The negative balance protection outlined above is designed to counteract the occurrence of exceptional circumstances with the aim of providing client protection in case of extreme market events.</p>
                </li>
            </ol>
           
        </div>
     );
}

export default Ninth;