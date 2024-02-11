import React from 'react';
import './EventItem.css';

const EventItem = ({ event }) => {
  return (
    <div className="event-item">
      <img src={event.image} alt={event.title} className="event-item-image" />
      <div className="event-item-info">
        <div className="event-item-date">{event.time}</div>
        <div className="event-item-title">{event.title}</div>
        <div className="event-item-host">{event.host}</div>
        <div className="event-item-attendees">{event.going} attendees</div>
      </div>
    </div>
  );
};

export default EventItem;

