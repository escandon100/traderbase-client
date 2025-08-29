import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './userRegister.scss';
import countries from "../../lib/countries";
import { Eye, EyeOff } from "lucide-react";

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

  const [registrationMessage, setRegistrationMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error as user types
  };

  const validateForm = () => {
    let newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!form.phone.trim()) newErrors.phone = "Phone number is required";

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!form.country) newErrors.country = "Please select a country";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await axios.post('http://localhost:5000/api/email/send', form);
      setRegistrationMessage("✅ Registration successful. Our system is validating your registration...");
      
       setForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      country: '',
    });
   
    } catch (error) {
      setRegistrationMessage("❌ Registration failed. Please try again.");
    }
  };

  return (
    <div className='userRegister'>
      <div className="register-card">
        <img src='logo.png' alt='Trader Base Logo' className="logo"/>
        <h1>Create an Account</h1>
        <p className="subtitle">Join Trader Base FX and start your investment journey today</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className='names'>
            <div className='name'>
              <label>First Name</label>
              <input type='text' name='firstName' value={form.firstName} onChange={handleChange} />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>
            <div className='name'>
              <label>Last Name</label>
              <input type='text' name='lastName' value={form.lastName} onChange={handleChange} />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
          </div>

          <label>Email</label>
          <input type='email' name='email' value={form.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}

          <label>Phone Number</label>
          <input type='number' placeholder='Enter phone number' value={form.phone} name='phone' onChange={handleChange} />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <div className='names'>
            <div className='name password-field'>
              <label>Password</label>
              <div className="password-input">
                <input type={showPassword ? "text" : "password"} value={form.password} name='password' onChange={handleChange} />
                <span onClick={() => setShowPassword(!showPassword)} className="toggle-icon">
                  {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                </span>
              </div>
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <div className='name password-field'>
              <label>Confirm Password</label>
              <div className="password-input">
                <input type={showPassword ? "text" : "password"} name='confirmPassword' value={form.confirmPassword} onChange={handleChange} />
                <span onClick={() => setShowPassword(!showPassword)} className="toggle-icon">
                  {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                </span>
              </div>
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            </div>
          </div>

          <label>Country</label>
          <select name="country" value={form.country} onChange={handleChange}>
            <option value="">Choose Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
          {errors.country && <p className="error">{errors.country}</p>}

          <button type='submit'>Register</button>
          {registrationMessage && <p className={`alert ${registrationMessage.includes("✅") ? "success" : "fail"}`}>{registrationMessage}</p>}
        </form>

        <p className="login-text">
          Already have an account? <Link to='/userLogin'>Login</Link>
        </p>
        <p className="footer">© 2025 Trader Base FX. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default UserRegister;
