import React from "react";
import "./passwordReset.scss";
import { Link } from "react-router";




const PasswordReset = () => {
    return (
        <div className="passwordReset">
            <form action="">
                  <h1>Password reset</h1>
                <h3>Email address</h3>
                <p>The email Address used in registration </p>
                  <input placeholder="name@example.com" type="email" name="" id="" />
                  <button type="submit">Send Reset Link </button>
                <Link className="loginButton"  to="/login">Repeat Login</Link>
                <p>© Copyright 2025   Trader Base FX</p>
                <p>All Rights Reserved.</p>

            </form>

          

        </div>
    )
}


export default PasswordReset