import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import writeIcon from './img/write-icon.png';
import './LocationIndicator.css';

const LocationIndicator = ({ location }) => {
  const navigate = useNavigate(); 

  const handleLocationClick = () => {
    navigate('/events'); 
  };

  return (
    <div className="location-indicator" onClick={handleLocationClick}>
      <span className="location-text">{location}</span>
      <img src={writeIcon} alt="Edit location" className="edit-icon" />
    </div>
  );
};

export default LocationIndicator;
