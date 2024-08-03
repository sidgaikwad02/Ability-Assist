import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from "../firebase";
import logo from '../utils/BillionAbles.png';
import '../components/Navbar.css'; // External CSS file

export const Navbar = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const logOut = () => {
    auth.signOut();
    setUser(null);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe(); // Clean up the subscription on unmount
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className="burger-menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <Link to="/" className="logo-link"> {/* React Router Link for client-side routing */}
            <img src={logo} alt="Ability Assist" className="logo" />
        </Link>
        <h1 className="brand-name">Ability Assist</h1>
        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {user ? (
            <>
              <Link className='navbar-link' to='/About_us'>
                About us
              </Link>
              <Link className='navbar-link' to="/visually_impaired">
                Visually Impaired
              </Link>
              <Link className='navbar-link' to="/deaf_and_dumb">
                Deaf and Dumb
              </Link>
              <Link className='navbar-link' to="/dyslexia">
                Dyslexia
              </Link>
              <Link className='navbar-link' to="/chat">
                Chat
              </Link>
              <Link to='/' className='navbar-link logout' onClick={logOut}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link className='navbar-link' to='/login'>Login</Link>
              <Link className='navbar-link' to='/signup'>SignUp</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
