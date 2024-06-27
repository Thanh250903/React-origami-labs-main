import React from 'react';
import Navbar from './layout/navbar/Navbar';
import Aside from './layout/aside/Aside';
import Body from './layout/body/Body';
import Footer from './layout/footer/Footer';

const styles = {
  app: {
    maxWidth: '100%',
    margin: '0 auto',
  },
  container: {
    marginTop: '8.5%',
    padding: '0.5%',
    marginBottom: '0.1%',
  },
};

const App = () => {
  return (
    <div style={styles.app}>
      <Navbar />
      <div style={styles.container}>
        <Aside />
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default App;
