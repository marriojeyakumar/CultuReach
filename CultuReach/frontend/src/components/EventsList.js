import React from 'react';
import EventItem from './EventItem';
import './EventsList.css';


const EventsList = ({ events }) => {
  return (
    <div className="events-list">
      {events.map((event, index) => (
        <EventItem key={index} event={event} />
      ))}
    </div>
  );
};

export default EventsList;