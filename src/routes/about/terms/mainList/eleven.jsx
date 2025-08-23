import React from 'react';
import "./mainlist.scss"

const Eleven = () => {
    return ( 
        <div className="mainlist">
            <h2>CLIENT MONEY</h2>
            <p>We treat money received from you or held by us on your behalf in accordance with the requirements of the Client Money Rules.</p>
            <ol>
                <li>INTEREST
                    <p>You, the client, acknowledge and confirm that no interest will be received on the balance of your account.</p>
                </li>
                <li>OVERSEAS BANKS, INTERMEDIATE BROKER, SETTLEMENT AGENT OR OTC COUNTERPARTY
                    <p>We may hold client money on your behalf outside the European Union. The legal and regulatory regime applying to any such bank or person will be different from the legal and regulatory regime in US and the European Union and in the event of the insolvency or any other analogous proceedings in relation to that bank or person, your money may be treated differently from the treatment which would apply if the money was held with a bank in an account in US and the European Union. We will not be liable for the insolvency, acts or omissions of any third party referred to in this clause.</p>
                </li>
                <li>UNCLAIMED CLIENT MONEY
                    <p>You agree that we may cease to treat your money as client money if there has been no movement on your balance for six years. We shall write to you at your last known address informing you of our intention of no longer treating your balance as client money and giving you 28 days to make a claim.</p>
                </li>
                <li>LIABILITY AND INDEMNITY
                    <p>You agree that we shall not be liable for any default of any counterparty, bank, custodian or other entity which holds money on your behalf or with or through whom transactions are conducted. You therefore take on the credit risk of the counterparty, bank, custodian or other entity. If the counterparty becomes insolvent, the counterparty may be unable to pay what it owes you on a CFD. In addition, you may not be able to recover any margin deposit which you placed with us and which we in turn place with the counterparty. We will of course do our best to help you recover any money which the counterparty owes you, but we are not personally liable to you for such amounts.</p>
                    <p>P24O will not be liable for loss suffered by you in connection to your funds held by us, unless such loss directly arises from our gross negligence, willful default or fraud.</p>
                </li>
            </ol>
      
      
        </div>
     );
}

export default Eleven 