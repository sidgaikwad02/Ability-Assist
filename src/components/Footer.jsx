import React from 'react';

import './Footer.css'; // Import your CSS file for styling



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__content grid">
          <a href="About_us" className="footer__logo">Ability Assist</a>

          <ul className="footer__links">
            <li>
              <a href='About_us' className="footer__link">About Us </a>
              
            </li>

            <li>
              <a href="https://portfolio-website-sid.netlify.app" className="footer__link">Portfolio</a>
            </li>

            <li>
              <a href='/contact' className="footer__link">Contact Us</a>
            </li>
          </ul>

          <div className="footer__social">
            <a href="https://www.facebook.com/" className="footer__social-link" aria-label="Facebook">
              <i className="ri-facebook-circle-fill"></i>
            </a>

            <a href="https://www.instagram.com/" className="footer__social-link" aria-label="Instagram">
              <i className="ri-instagram-fill"></i>
            </a>

            <a href="https://twitter.com/" className="footer__social-link" aria-label="Twitter">
              <i className="ri-twitter-x-line"></i>
            </a>

            <a href="https://www.linkedin.com/" className="footer__social-link" aria-label="LinkedIn">
              <i className="ri-linkedin-box-fill"></i>
            </a>
          </div>
        </div>

        <span className="footer__copy">
          &#169; All Rights Reserved By Siddharth Gaikwad
        </span>
      </div>
    </footer>
  );
};


export default Footer;
