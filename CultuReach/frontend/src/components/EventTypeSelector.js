import React from 'react';
import './EventTypeSelector.css'; 

import dancingIcon from './img/dancingIcon.png';
import singingIcon from './img/singingIcon.png';
import artIcon from './img/artIcon.png';
import foodIcon from './img/singingIcon.png';
import recreationIcon from './img/recreationIcon.png';

function EventSelector() {
  const eventTypes = [
    { name: 'Dancing', icon: dancingIcon },
    { name: 'Singing', icon: singingIcon },
    { name: 'Recreation', icon: recreationIcon },
    { name: 'Art', icon: artIcon },
    { name: 'Food', icon: foodIcon },
  ];

  return (
    <div className="event-selector-container">
      <header className="event-header">
        <h2>Event Type</h2>
      </header>
      <div className="event-selector">
        {eventTypes.map((eventType, index) => (
          <div className="culture-button" key={index}>
            <img src={eventType.icon} alt={`${eventType.name} flag`} className="event-icon" />
            <span>{eventType.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventSelector;
