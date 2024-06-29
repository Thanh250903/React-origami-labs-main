import React from 'react';
import logo from '../body/bird_logo.png'; // Assuming this is the correct path to your logo

const Footer = () => {
  const footerStyle = {
    width: '100%',
    height: '18vh',
    backgroundColor: '#ffa000',
    color: '#234465',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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

  const linkStyle = {
    color: '#234465',
    textAlign: 'center',
    textDecoration: 'none',
    paddingTop: '5%',
    height: '60%',
    display: 'block'
  };

  return (
    <footer style={footerStyle}>
      <ul>
        {Array.from({ length: 10 }, (_, i) => (
          <li style={listItemStyle} key={i}>
            <a href={`#section${i + 1}`} style={linkStyle}>Going to {i + 1}</a>
          </li>
        ))}
        <li style={listItemStyle}><img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} /></li>
      </ul>
    </footer>
  );
};

export default Footer;
