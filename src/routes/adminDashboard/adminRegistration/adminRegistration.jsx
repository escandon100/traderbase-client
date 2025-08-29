 import React from "react"
 import { useState } from "react";
 import axios from 'axios';
 import countries from "../../../lib/countries.js";
 import "./adminRegistration.scss"
 
 const AdminRegistration = () => {

    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    country: '',
    });

    const [registerMessage , setRegisterMessage] = useState("")

    const handleRegister = async (e) => {
     e.preventDefault();


    try {
        await axios.post('http://localhost:5000/api/userRegister/send', formData); 
        setRegisterMessage('User registered successfully!')
    } catch (err) {
        console.error(err);
        setRegisterMessage('Registration failed')
    }
    };


    return (

        <div className="adminRegistration">


      <form onSubmit={handleRegister}>
        <h1>Create an Account</h1>
        <div className="names">
          <div className="name">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
           
          </div>          
            <div className="name">
            <label htmlFor="">Last Name</label>
               <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />

          </div>
        </div>
      
        <label htmlFor="">Email</label>
          <input
              type="email"
              value={formData.email}
              placeholder='name@gmail.com'
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
        <label htmlFor="">Phone Number</label>
          <input
              type="number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
        <div className="names">
          <div className="name">
             <label>Password</label>
             <input
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />

          </div>
         
          <div className="name">
            <label>Confirm Password</label>  
             <input
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />

          </div>
          </div>
      
         <select
          name="country"
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
        >
          <option value="">Select a country</option>
          {countries.map((country, idx) => (
            <option key={idx} value={country}>
              {country}
            </option>
          ))}
        </select>


        <button type="submit">Register</button>
        <p className="green">{registerMessage}</p>
        <p>© Copyright 2025   Trader Base FX   All Rights Reserved.</p>

      </form>

        </div>

    )
      
}


 export default AdminRegistration




  
      
  