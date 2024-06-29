import React from 'react';
import logo from '../body/bird_logo.png'; // Assuming this is the correct path to your logo

const Navbar = () => {
  const navStyle = {
    width: '100%',
    height: '14vh',
    backgroundColor: '#234465',
    color: 'white',
    position: 'fixed',
    top: '0',
    borderBottom: '2px solid #ffa000',
    borderTop: '2px solid #ffa000'
  };

  const listItemStyle = {
    display: 'inline-block',
    height: 'auto',
    marginRight: '2%',
    cursor: 'pointer',
    padding: '0.5%',
    margin: '0.1%',
    verticalAlign: 'top'
  };

  const listItemImageStyle = {
    width: '50px',
    height: '50px'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <nav style={navStyle}>
      <ul>
        <li style={listItemStyle}><img src={logo} alt="Logo" style={listItemImageStyle} /></li>
        {Array.from({ length: 10 }, (_, i) => (
          <li style={{ ...listItemStyle, padding: '2%', marginTop: '1.5%', borderTop: '2px solid #ffa000' }} key={i}>
            <a href={`#section${i + 1}`} style={linkStyle}>Going to {i + 1}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
