import React from 'react';
import { Link } from 'react-router-dom'

const Greeting = ({currentUser, logout}) => (
  currentUser ? (
      <div>
        <p>Welcome, {currentUser.username}</p>
        <button onClick={logout}>Log Out</button>
      </div> 
    ) : (
      <div>
        <Link to="/signup">Sign Up!</Link>
        <Link to="/login">Log In!</Link>
      </div>
    ) 
);

export default Greeting;