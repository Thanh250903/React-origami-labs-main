import React from 'react';

const styles = {
  nav: {
    width: '100%',
    height: '14vh',
    backgroundColor: '#234465',
    color: 'white',
    position: 'fixed',
    top: 0,
    borderBottom: '2px solid #ffa000',
    borderTop: '2px solid #ffa000',
  },
  listItem: {
    display: 'inline-block',
    height: 'auto',
    marginRight: '2%',
    cursor: 'pointer',
    padding: '0.5%',
    margin: '0.1%',
    verticalAlign: 'top',
    color: 'white',
    textDecoration: 'none',
  },
  listItemLink: {
    color: 'white',
    textDecoration: 'none',
  },
};

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      {[...Array(11).keys()].map(i => (
        <div key={i} style={styles.listItem}>
          <a href={`#going-to-${i + 1}`} style={styles.listItemLink}>Going to {i + 1}</a>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
