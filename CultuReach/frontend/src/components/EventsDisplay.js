import React from 'react';
import './EventsDisplay.css';

function HomeHeader() {
  return (
    <div className="home-header">
      <div className="text-container">
        <h1>The people platform—Where interests become friendships</h1>
        <p>Whatever your interest, from hiking and reading to networking and skill sharing, there are thousands of people who share it on Meetup. Events are happening every day—sign up to join the fun.</p>
        <button className="join-button">Join CultuReach</button>
      </div>
    </div>
  );
}

export default HomeHeader;