import React from 'react';


const styles = {
  aside: {
    display: 'inline-block',
    width: '15%',
    marginRight: '1%',
    height: '89.5vh',
    verticalAlign: 'top',
  },
  listItem: {
    display: 'block',
    width: '98%',
    borderLeft: '2px solid #234465',
    borderRight: '2px solid #234465',
    marginBottom: '11%',
    height: '5vh',
    textAlign: 'center',
  },
  listItemLink: {
    color: '#234465',
    textAlign: 'center',
    textDecoration: 'none',
    paddingTop: '5%',
    height: '60%',
    display: 'block',
  },
  logoStyle: {
    width: '100%', // Adjust width as needed
    height: 'auto', // Maintain aspect ratio of the image
    marginBottom: '20px', // Add spacing between logo and menu items
  },
};

const Aside = () => {
  return (
    <aside style={styles.aside}>
      {[...Array(11).keys()].map(i => (
        <div key={i} style={styles.listItem}>
          <a href={`#going-to-${i + 1}`} style={styles.listItemLink}>Going to {i + 1}</a>
        </div>
      ))}
    </aside>
  );
};

export default Aside;
