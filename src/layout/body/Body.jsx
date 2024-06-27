import React from 'react';
import birdLogo from './bird_logo.png'; // Importing image from local folder

const styles = {
  main: {
    display: 'inline-block',
    width: '83%',
    height: 'auto',
    marginBottom: '5%',
  },
  heading: {
    textAlign: 'center',
    color: '#234465',
    textDecoration: 'underline',
    marginBottom: '2%',
    fontSize: '36px', // Adjust font size as needed
  },
  posts: {
    width: '100%',
    height: '45vh',
  },
  post: {
    width: '100%',
    height: 'auto',
    border: '1px solid #234465',
    marginBottom: '3%',
    borderRadius: '4px',
    padding: '1%',
  },
  description: {
    wordWrap: 'break-word',
    fontStyle: 'italic',
    marginBottom: '0.5%',
    width: '95%',
    display: 'inline-block',
    verticalAlign: 'top',
    fontSize: '16px', // Adjust font size as needed
  },
  postFooter: {
    height: 'auto',
    textAlign: 'right',
    marginBottom: '0.5%',
  },
  postFooterSpan: {
    textDecoration: 'underline',
    paddingRight: '1%',
  },
};

const Body = () => {
  const posts = [...Array(6).keys()];

  return (
    <div style={styles.main}>
      <img src={birdLogo} alt="Bird Logo" style={{ width: '10%', height: '10%' }} />
      <h1 style={styles.heading}>Soooooooome Heading</h1>
      <div style={styles.posts}>
        {posts.map(i => (
          <div key={i} style={styles.post}>
            <p style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est beatae aut repellendus, excepturi voluptas rerum vitae fugiat ipsam dolorum?
            </p>
            <div style={styles.postFooter}>
              <span style={styles.postFooterSpan}>Author: Some Anonymous</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
