import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import writeIcon from './img/write-icon.png';
import './LocationIndicator.css';

const LocationIndicator = ({ location }) => {
  const navigate = useNavigate(); // Instantiate the navigate function

  const handleLocationClick = () => {
    navigate('/events'); // Navigate to /events when the location indicator is clicked
  };

  return (
    <div className="location-indicator" onClick={handleLocationClick}>
      <span className="location-text">{location}</span>
      <img src={writeIcon} alt="Edit location" className="edit-icon" />
    </div>
  );
};

export default LocationIndicator;
