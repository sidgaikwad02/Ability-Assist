import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import logo from '../utils/BillionAbles.png' 
import './Login.css';  // Import the external CSS file

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
    });
  }, []);

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate('/');
    } catch (error) {
      console.log(error.message);
      setError(true);
      setEmail("");
      setPassword('');
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <Link to='/'>
          <img src={logo} alt='Logo' className='logo'/>
        </Link>
        <div className="login-header">
          <p className="login-title">Log in</p>
        </div>
        <div className="login-form">
          <input 
            type='text' 
            className='login-input' 
            placeholder='Email' 
            value={email} 
            onChange={e => setEmail(e.target.value)}
          />
          <div className='password-wrapper'>
            <input 
              type={showPassword ? 'text' : 'password'} 
              className='login-input' 
              placeholder='Password' 
              value={password} 
              onChange={e => setPassword(e.target.value)}
            /> 
            <FontAwesomeIcon 
              icon={showPassword ? faEyeSlash : faEye} 
              className='password-icon' 
              onClick={() => setShowPassword(!showPassword)} 
            />
          </div>
          {error && <h1 className='error-message'>*Invalid Credentials</h1>}
        </div>
        <div className="login-footer">
          <button className='login-button' onClick={login}>Log in</button>
          <Link to='/signup' className="signup-link">Don't have an account? Register here</Link>  
        </div>
      </div>
    </div>
  );
}

export default Login;
