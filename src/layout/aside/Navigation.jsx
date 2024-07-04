import React from 'react';
import birdLogo from '../body/bird_logo.png'; // Adjust path based on your folder structure

function Navigation() {
  return (
    <nav className="Navigation">
      <img src={birdLogo} alt="Bird Logo" style={{ width: '50px', height: '50px' }} />
      <div className="listItem"><a href="#post">Post</a></div>
      <div className="listItem"><a href="#register">Register</a></div>
      <div className="listItem"><a href="#login">Login</a></div>
      <div className="listItem"><a href="#profile">Profile</a></div>
    </nav>
  );
}

export default Navigation;
