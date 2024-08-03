import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import logo from '../utils/BillionAbles.png' 
import './SignUp.css'; // Ensure you import your CSS file

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
    });
  }, []);

  const handleSignUp = async () => {
    if (!name || !surname || !email || !password) {
      setError(true);
      return;
    }
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate('/login');
    } catch (error) {
      console.log(error.message);
      setError(true);
      setName("");
      setSurname("");
      setEmail("");
      setPassword('');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <Link to='/'>
          <img src={logo} alt='Logo' className='logo' />
        </Link>
        <div className="signup-header">
          <p className="signup-title">Sign Up</p>
        </div>
        <div className="signup-form">
          <input 
            type='text' 
            className='signup-input' 
            placeholder='Name' 
            value={name} 
            onChange={e => setName(e.target.value)}
          />
          <input 
            type='text' 
            className='signup-input' 
            placeholder='Surname' 
            value={surname} 
            onChange={e => setSurname(e.target.value)}
          />
          <input 
            type='text' 
            className='signup-input' 
            placeholder='Email' 
            value={email} 
            onChange={e => setEmail(e.target.value)}
          />
          <div className='password-wrapper'>
            <input 
              type={showPassword ? 'text' : 'password'} 
              className='signup-input' 
              placeholder='Password' 
              value={password} 
              onChange={e => setPassword(e.target.value)}
            /> 
            <FontAwesomeIcon 
              icon={showPassword ? faEyeSlash : faEye} 
              className='password-icon' 
              onClick={() => setShowPassword(!showPassword)} 
            />
            {error && <h1 className='error-message'>*Invalid Credentials</h1>}
          </div>
        </div>
        <div className="signup-footer">
          <button className='signup-button' onClick={handleSignUp}>Sign Up</button>
          <Link to='/login' className="signup-link">Already have an account? Login here</Link>  
        </div>
      </div>
    </div>
  );
}

export default SignUp;
