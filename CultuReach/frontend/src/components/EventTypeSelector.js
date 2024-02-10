import React from 'react';
import './EventTypeSelector.css';

function EventTypeSelector() {
  // You would typically fetch these from a server
  const eventTypes = ['Singing', 'Food'];

  return (
    <div>
      <h2>Event Types</h2>
      <div>
        {eventTypes.map(eventType => (
          <button key={eventType}>{eventType}</button>
        ))}
      </div>
    </div>
  );
}

export default EventTypeSelector;
