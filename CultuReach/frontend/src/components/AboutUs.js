// components/AboutUs.js
import React from 'react';
import './AboutUs.css'; // Make sure to create an AboutUs.css file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About CultuReach</h1>
      <p className="about-us-text">
        CultureReach is more than just a platform; it's a vibrant community dedicated to fostering cultural exchange and appreciation.
        Our mission is to connect individuals passionate about diverse cultural activities with hosts ready to share their cultural experiences.
      </p>
      <p className="about-us-text">
        Explore a world of possibilities as you search for events near you, discover specific cultural celebrations, or indulge in activities ranging from dance extravaganzas to culinary adventures.
      </p>
      <p className="about-us-text">
        We are committed to promoting cultural diversity and creating a dynamic space where people can share, learn, and celebrate the richness of different cultures.
      </p>
      <h2 className="about-us-subtitle">Our Vision</h2>
      <p className="about-us-text">
        At CultuReach, we envision a world where cultural boundaries dissolve, and every individual has the opportunity to experience and appreciate the beauty of global diversity.
      </p>
      <h2 className="about-us-subtitle">Why CultuReach?</h2>
      <p className="about-us-text">
        <strong>1. Cultural Exploration:</strong> Embark on a journey of cultural exploration and immerse yourself in a myriad of activities that showcase the traditions and customs of various communities.
      </p>
      <p className="about-us-text">
        <strong>2. Community Building:</strong> Join a welcoming community that values cultural exchange, fostering connections between people from different backgrounds.
      </p>
      <p className="about-us-text">
        <strong>3. Event Hosting:</strong> Become a host and share your cultural expertise with an eager audience. Create memorable experiences and build lasting connections.
      </p>
      <p className="about-us-text">
        <strong>4. Diversity Celebration:</strong> Celebrate the beauty of diversity and promote inclusivity by participating in events that highlight the uniqueness of each culture.
      </p>
    </div>
  );
};

export default AboutUs;
