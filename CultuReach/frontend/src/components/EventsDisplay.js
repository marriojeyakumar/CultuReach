import React from 'react';
import { Link } from 'react-router-dom';
import './EventsDisplay.css';

import mockEvent1 from './img/mockEvent1.png'; 
import mockEvent2 from './img/mockEvent2.png';
import mockEvent3 from './img/mockEvent3.png';

const mockEvents = [
  {
    title: "Exploring Banff National Park",
    image: mockEvent1,
    place: "Banff National Park",
    host: "AMC Worcester 3RD",
    time: "Wed, Feb 21 - 6:30 PM EST",
    going: 8,
    price: "Free"
  },
  {
    title: "Second Gathering",
    image: mockEvent2,
    place: "Maynard Self Exploration Meetup Group",
    host: "Maynard Group",
    time: "Thu, Feb 15 - 7:30 PM EST",
    going: 2,
    price: "Free"
  },
  {
    title: "Sunday Mahjong",
    image: "mockEvent3",
    place: "Watertown, MA, USA",
    host: "Jennifer Sherman",
    time: "Sun, Feb 11, 10 - 12:30 PM EST",
    going: 119,
    price: "Free"
  },
  {
    title: "Intermediate and Advanced Samba!",
    image: "mockEvent4",
    place: "536 Massachusetts Ave Cambridge MA, USA",
    host: "Sambista R.",
    time: "Wed, Feb 14, 7:30 - 8:30 PM EST",
    going: 12,
    price: "$10"
  },
  {
    title: "History of Printmaking and Black Women",
    image: "mockEvent5",
    place: "590 Washington St MA, USA",
    host: "Sambista R.",
    time: "Wed, Feb 14, 1:00 - 3:30 PM EST",
    going: 4,
    price: "Free"
  },
  {
    title: "History of Printmaking and Black Women",
    image: "mockEvent5",
    place: "590 Washington St MA, USA",
    host: "Sambista R.",
    time: "Wed, Feb 14, 1:00 - 3:30 PM EST",
    going: 4,
    price: "Free"
  },
  
];

function EventsDisplay() {
  const events = mockEvents.slice(0, 8);

  return (
    <div className="events-display">
      <div className="grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.title} className="event-image" />
            <h3 className="event-title">{event.title}</h3>
            <p className="event-host">Hosted by: {event.host}</p>
            <p className="event-place">{event.place}</p>
            <p className="event-time">{event.time}</p>
            <p className="event-attendance">{event.going} going</p>
            <p className="event-price">{event.price}</p>
          </div>
        ))}
      </div>
      <div className="see-all-events">
        <Link to="/events" className="see-all-events-button">See all events</Link>
      </div>
    </div>
  );
}

export default EventsDisplay;
