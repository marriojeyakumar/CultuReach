import React from 'react';

const Home = ({ user, onLogout }) => {
  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;