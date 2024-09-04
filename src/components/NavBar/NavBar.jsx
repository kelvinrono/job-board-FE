import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link to="/">
          {/* <img src="" alt="Logo" className="navbar__logo" /> */}
          <p>Logo</p>
        </Link>
      </div>
      <div className="navbar__center">
        <Link to="/jobs" className="navbar__link">Jobs</Link>
        <Link to="/employers" className="navbar__link">Employers</Link>
        <Link to="/upload-job" className="navbar__link">Upload Job</Link>
        <Link to="/about-us" className="navbar__link">About Us</Link>
      </div>
      <div className="navbar__right">
        <Link to="/profile" className="navbar__profile">Profile</Link>
      </div>
    </nav>
  );
}

export default Navbar;
