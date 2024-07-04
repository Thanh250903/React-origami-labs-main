import React from 'react';
import './App.css';
import birdLogo from './layout/body/bird_logo.png'; // Corrected path to bird_logo.png


function Navigation() {
  return (
    <nav className="Navigation">
      {/* <img src={birdLogo} alt="Bird Logo" style={{ width: '50px', height: '50px' }} /> */}
      <div className="listItem"><a href="#post">Post</a></div>
      <div className="listItem"><a href="#register">Register</a></div>
      <div className="listItem"><a href="#login">Login</a></div>
      <div className="listItem"><a href="#profile">Profile</a></div>
      <div className="listItem"><a href="#">#########</a></div>
      <div className="listItem"><a href="#">#########</a></div>
      <div className="listItem"><a href="#">#########</a></div>
      <div className="listItem"><a href="#">#########</a></div>
      <div className="listItem"><a href="#">#########</a></div>
    </nav>
  );
}

function Aside() {
  return (
    <aside className="Aside">
      <div className="listItem"><a href="#post">Post</a></div>
      <div className="listItem"><a href="#register">Register</a></div>
      <div className="listItem"><a href="#login">Login</a></div>
      <div className="listItem"><a href="#profile">Profile</a></div>
      <div className="listItem"><a href="#">#########</a></div>
      <div className="listItem"><a href="#">#########</a></div>
      <div className="listItem"><a href="#">#########</a></div>
      <div className="listItem"><a href="#">#########</a></div>
      <div className="listItem"><a href="#">#########</a></div>
      <div className="listItem"><a href="#">#########</a></div>
      <div className="listItem"><a href="#">#########</a></div>
    </aside>
  );
}

function Input() {
  return (
    <div className="Input">
      <h1>Share your thoughts...</h1>
      <textarea placeholder="What's on your mind?" />
      <button>Post</button>
    </div>
  );
}

function Post({ number }) {
  return (
    <div className="Post">
      <img src={birdLogo} alt="Bird Logo" />
      <div className="description">
        {`${number} - Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Iste beatae sunt repellendus, excepturi voluptas rerum vitae fugit ipsam dolor`}
      </div>
      <div>
        <span>Author: Some Anonymous</span>
      </div>
    </div>
  );
}

function Posts() {
  return (
    <div className="Posts">
      <h2>Last 3 posts on your wall</h2>
      <Post number="3" />
      <Post number="4" />
      <Post number="5" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="Footer">
      <div className="listItem"><a href="#post">Post</a></div>
      <div className="listItem"><a href="#register">Register</a></div>
      <div className="listItem"><a href="#login">Login</a></div>
      <div className="listItem"><a href="#profile">Profile</a></div>
      <div className="listItem"><a href="#">#########</a></div>
      <div className="listItem"><a href="#">#########</a></div>
      <div className="listItem"><a href="#">#########</a></div>
      <div className="listItem"><a href="#">#########</a></div>
      <div className="listItem"><a href="#">#########</a></div>
      <div className="listItem"><a href="#">#########</a></div>
      {/* <img src={birdLogo} alt="Bird Logo" style={{ width: '50px', height: '50px' }} /> */}
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="Container">
        <Aside />
        <div className="Main">
          <Input />
          <Posts />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
