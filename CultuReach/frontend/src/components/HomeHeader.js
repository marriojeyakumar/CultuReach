import React from 'react';
import './HomeHeader.css';
import headerImage from   './img/HomeHeaderImg.png';

function HomeHeader() {
  return (
    <div className="home-header">
      <div className="text-container">
        <h1>The people platform—Where interests become friendships</h1>
        <p>Whatever your interest, from hiking and reading to networking and skill sharing, there are thousands of people who share it on Meetup. Events are happening every day—sign up to join the fun.</p>
        <button className="join-button">Join CultuReach</button>
      </div>
      <div className="image-container">
        <img src={headerImage} alt="Header visual" />
      </div>
    </div>
  );
}

export default HomeHeader;
