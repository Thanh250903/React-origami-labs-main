import React from 'react';
import './App.css';
import birdLogo from './bird_logo.avif';

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

export default Post;
