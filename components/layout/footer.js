import React from 'react';
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => (
  <footer className="footer">
    <div className="contain">
      <p>No affiliate/referral links.</p>
    
    <div className="footer-social">
      <Link to="/" className="footer-site">
        cryptoverted.github.io
      </Link>
      <ul>
        <li><a href="https://twitter.com/cryptoverted"><FontAwesomeIcon icon={faTwitter} /> <span className="element-invisible">Twitter</span></a></li>
      </ul>
    </div>
    </div>
  </footer>
);

export default Footer;