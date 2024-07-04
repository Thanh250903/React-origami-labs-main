import React from 'react';
import './App.css';
import Post from './Post';

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

export default Posts;
