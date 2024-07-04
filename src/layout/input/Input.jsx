import React from 'react';
import './App.css';

function Input() {
  return (
    <div className="Input">
      <h1>Share your thoughts...</h1>
      <textarea placeholder="What's on your mind?" />
      <button>Post</button>
    </div>
  );
}

export default Input;
