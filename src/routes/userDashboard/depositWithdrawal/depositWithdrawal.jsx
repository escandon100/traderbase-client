import React from "react";
import "./depositWithdrawal.scss"

const DepositWithdrawal = () => {
    

    const handleDeposit = (e) => {
        e.preventDefault()
    }


    const handleWithdrawal = (e) => {
        e.preventDefault()
    }

    return(
        <div className="depositWithdrawal">
            <div className="deposit">
                <form onSubmit={handleDeposit}>
                    <h1>Make a deposit</h1>
                    $<input type="number" placeholder="enter amount" />

                    <button type="submit">Deposit</button>
                </form>


            </div>
            <div className="withdrawal">
                <form onSubmit={handleWithdrawal}>
                    <h1>Make a withdrawal</h1>
                    <input type="number" />

                    <button type="submit">Withdraw</button>
                </form>

            </div>
        </div>

    )

  

}


export default DepositWithdrawal