import  { React,useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import "./userLogin.scss"

const UserLogin = () => {
  const [formData , setFormData] = useState({email : "",password : ""})
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate()


  const togglePasswordVisibility = () => {
    setPasswordVisible(prev => !prev);
  };

  const handleChange = (e) => {
    setFormData({...formData , [e.target.name] : e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
       const res = await axios.post("http://localhost:5000/api/userLogin/send" , formData)
        
       localStorage.setItem("user-token" , res.data.token)


       navigate("/userDashboard/dashboard")

    }catch(err){
      setError(err.response?.data?.message || 'Login failed')
    }

  }

  return (
    <div className='userLogin'>
      <img src="logo.png" />
      <form onSubmit={handleSubmit}>
        <h1>User Login</h1>
        <label>Email Address </label>
        <input  type="email" placeholder='name@example.com' name = "email" value={formData.email} onChange={handleChange}/>

        <label>Password </label>
        <div className="passwordInput">
          <input name ="password" type={passwordVisible ? "text" : "password"} placeholder='Enter Password' value={formData.password} onChange={handleChange}/>
          <span onClick={togglePasswordVisibility}> <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} /></span>
        </div>
        <button type="submit">Login</button>
          {error && <p className="error">{error}</p>}

        <p>Forgot your password <Link to="/passwordReset" className='link'>Reset</Link></p>
        <p>Don't have an account yet ? <Link className='link' to="/userRegister">Sign up</Link></p>
        <p>© Copyright 2025   Trader Base FX   All Rights Reserved.</p>
       </form>
      
    </div>
  )
}

export default UserLogin
