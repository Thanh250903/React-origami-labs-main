import React from 'react';
import birdLogo from '../body/bird_logo.png'; // Adjust the file extension if needed

const styles = {
  footer: {
    width: '100%',
    height: '18vh',
    backgroundColor: '#ffa000',
    color: '#234465',
    borderTop: '2px solid #234465',
    borderBottom: '2px solid #234465',
    marginBottom: '1%',
  },
  listItem: {
    display: 'inline-block',
    height: 'auto',
    marginRight: '2%',
    cursor: 'pointer',
    padding: '0.5%',
    margin: '0.1%',
    verticalAlign: 'top',
  },
  listItemLink: {
    color: '#234465',
    textDecoration: 'none',
  },
  footerParagraph: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      {[...Array(11).keys()].map(i => (
        <div key={i} style={styles.listItem}>
          <a href={`#going-to-${i + 1}`} style={styles.listItemLink}>Going to {i + 1}</a>
        </div>
        
      ))}
            <img src={birdLogo} alt="Bird Logo" style={{ width: '15%', height: '100%' }} />
      <p style={styles.footerParagraph}>Footer content here</p>
    </footer>
  );
};

export default Footer;
