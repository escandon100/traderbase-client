import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './userRegister.scss';
import countries from "../../lib/countries"

const UserRegister = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    country: '',
  });

  const [showPassword , setShowPassword ] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/email/send', form);
      alert('Form sent to your email!');
    } catch (error) {
      alert('Failed to send form.');
    }
  };

  return (
    <div className='userRegister'>
      <img src='logo.png' alt='' />
      <form onSubmit={handleSubmit}>
        <h1>Create an Account</h1>
        <div className='names'>
          <div className='name'>
            <label>First Name</label>
            <input type='text' name='firstName' onChange={handleChange} required />
          </div>
          <div className='name'>
            <label>Last Name</label>
            <input type='text' name='lastName' onChange={handleChange} required />
          </div>
        </div>

        <label>Email</label>
        <input type='email' name='email' placeholder='name@example.com' onChange={handleChange} required />

        <label>Phone Number</label>
        <input type='text' name='phone' onChange={handleChange} required />

        <div className='names'>
          <div className='name'>
            <label>Password</label>
            <input type={showPassword ? "text" : "password"} name='password' onChange={handleChange} required />
            <button onClick={() => setShowPassword(!showPassword)}>Show Password</button>
          </div>
          <div className='name'>
            <label>Confirm Password</label>
            <input type={showPassword ? "text" : "password"}  name='confirmPassword' onChange={handleChange} required />
            <button onClick={() => setShowPassword(!showPassword)}>Show Password</button>

          </div>
        </div>

        <label>Country</label>
        <select name="country" value={form.country} onChange={handleChange} required>
      <option value="">Choose Country</option>
      {countries.map((country) => (
        <option key={country} value={country}>{country}</option>
      ))}
        </select>


        <button type='submit'>Register</button>
        <p>
          Already have an account? <Link to='/userLogin'>Login</Link>
        </p>
        <p>© Copyright 2025 Trader Base FX All Rights Reserved.</p>
      </form>
    </div>
  );
};

export default UserRegister;
