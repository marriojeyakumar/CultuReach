import React from 'react';
import './EventTypeSelector.css'; // Create this CSS file for styling

// Placeholder imports - replace these with actual image paths
import dancingIcon from './img/singingIcon.png';
import singingIcon from './img/singingIcon.png';
import sportsIcon from './img/singingIcon.png';
import artIcon from './img/singingIcon.png';
import cookingIcon from './img/singingIcon.png';

function EventSelector() {
  const events = [
    { name: 'Dancing', icon: dancingIcon },
    { name: 'Singing', icon: singingIcon },
    { name: 'Sports', icon: sportsIcon },
    { name: 'Art', icon: artIcon },
    { name: 'Cooking', icon: cookingIcon },
    // Add more events as needed
  ];

  return (
    <div className="event-selector-container">
      <header className="event-header">
        <h2>Event Types</h2>
      </header>
      <div className="event-selector">
        {events.map((event, index) => (
          <div className="event-button" key={index}>
            <img src={event.icon} alt={`${event.name} icon`} className="event-icon" />
            <span>{event.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventSelector;
