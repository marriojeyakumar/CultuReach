import React from 'react';
import './CultureButton.css';

function CultureButton({ cultureName, flagImage }) {
  return (
    <button className="culture-button">
      <img src={flagImage} alt={`${cultureName} flag`} className="culture-flag" />
      <span>{cultureName}</span>
    </button>
  );
}

export default CultureButton;
