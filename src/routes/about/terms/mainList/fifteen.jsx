import React from 'react';
import "./mainlist.scss"

const Fifteen = () => {
    return ( 
        <div className="mainlist">
            <h2>NETTING</h2>
            <ol>
                <li>RIGHTS ON DEFAULT
                    <p>On the occurrence of an Event of Default, we may exercise our rights under this clause, except that in the case of the occurrence of any Event of Default specified in Clause 14.2 or Clause 14.3 of the definition of Events of Default (each a “Bankruptcy Default”), the automatic termination provision of this clause shall apply.</p>

                </li>
                <li>LIQUIDATION DATE
                    <p>Subject to the following sub-clause, at any time following the occurrence of an Event of Default, we may, by notice to you, specify a date (the “Liquidation Date”) for the termination and liquidation of Transactions in accordance with this clause.</p>

                </li>
                <li>AUTOMATIC TERMINATION
                    <p>The date of the occurrence of any Bankruptcy Default shall automatically constitute a Liquidation Date, without the need for any notice by us and the provisions of the following sub-clause shall then apply.</p>

                </li>
                <li>CALCULATION OF LIQUIDATION AMOUNT
                    <p>Upon the occurrence of a Liquidation Date:</p>
                    <p>neither of us shall be obliged to make any further payments or deliveries under any Transactions which would, but for this clause, have fallen due for performance on or after the Liquidation Date and such obligations shall be satisfied by settlement (whether by payment, set-off or otherwise) of the Liquidation Amount;</p>
                    <p>we shall (on, or as soon as reasonably practicable after, the Liquidation Date) determine (discounting if appropriate), in respect of each Transaction the total cost, loss or, as the case may be, gain, in each case expressed in the Base Currency specified by us in writing or, failing any such specification, the lawful currency of the United States (and, if appropriate, including any loss of bargain, cost of funding or, without duplication, cost, loss or, as the case may be, gain as a result of the termination, liquidation, obtaining, performing or re-establishing of any hedge or related trading position) as a result of the termination, pursuant to this Agreement, of each payment or delivery which would otherwise have been required to be made under such Transaction (assuming satisfaction of each applicable condition precedent and having due regard, if appropriate, to such market quotations published on, or official settlement prices set by the relevant exchange as may be available on, or immediately preceding, the date of calculation);</p>
                    <p>we shall treat each cost or loss to us, determined as above, as a positive amount and each gain by us, so determined, as a negative amount and aggregate all of such amounts to produce a single, net positive or negative amount, denominated in the Base Currency (the “Liquidation Amount”).</p>
                </li>
                <li>PAYER
                    <p>If the Liquidation Amount determined pursuant to this clause is a positive amount, you shall pay it to us and if it is a negative amount, we shall pay it to you. We shall notify you of the Liquidation Amount, and by whom it is payable, immediately after the calculation of such amount.</p>

                </li>
                <li>OTHER TRANSACTIONS
                    <p>Where termination and liquidation occurs in accordance with this clause, we shall also be entitled, at our discretion, to terminate and liquidate, in accordance with the provisions of this clause, any other transactions entered into between us which are then outstanding.</p>
                </li>
                <li>PAYMENT
                    <p>The Liquidation Amount shall be paid in the Base Currency by the close of business on the Business Day following the completion of the termination and liquidation under this clause (converted as required by applicable law into any other currency, any costs of such conversion to be borne by you, and (if applicable) deducted from any payment to you). Any Liquidation Amount not paid on the due date shall be treated as an unpaid such amount and bear interest, at the average rate at which overnight deposits in the currency of such payment are offered by major banks in the London interbank market as of 11.00 am (London time) (or, if no such rate is available, at such reasonable rate as we may select) plus one 1% per annum for each day for which such amount remains unpaid.</p>

                </li>
                <li>BASE CURRENCY
                    <p>For the purposes of any calculation hereunder, we may convert amounts denominated in any other currency into the Base Currency at such rate prevailing at the time of the calculation as we shall reasonably select.</p>
                </li>
                <li>PAYMENTS
                    <p>Unless a Liquidation Date has occurred or has been effectively set, we shall not be obliged to make any payment or delivery scheduled to be made by us under a Transaction for as long as an Event of Default or any event which may become (with the passage of time, the giving of notice, the making of any determination hereunder, or any combination thereof) an Event of Default with respect to you has occurred and is continuing.</p>

                </li>
                <li>ADDITIONAL RIGHTS
                    <p>Our rights under this clause shall be in addition to, and not in limitation or exclusion of, any other rights which we may have (whether by agreement, operation of law or otherwise).</p>

                </li>
                <li>APPLICATION OF NETTING TO TRANSACTIONS
                    <p>This clause applies to each Transaction entered into or outstanding between us on or after the date this Agreement takes effect.</p>

                </li>
                <li>SINGLE AGREEMENT
                    <p>This Agreement, the particular terms applicable to each Transaction entered into under this Agreement, and all amendments to any of them shall together constitute a single agreement between us. We both acknowledge that all Transactions entered into on or after the date this Agreement takes effect are entered into in reliance upon the fact that the Agreement and all such terms constitute a single agreement between us.</p>

                </li>
            </ol>

        </div>
     );
}

export default Fifteen;