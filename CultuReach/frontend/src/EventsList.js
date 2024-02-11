import React, { useEffect, useState } from 'react';
import getEvents from './services/eventsService'; // The service you created
import EventItem from './Event'; // The component you created

const EventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Extract filters from URL and call the getEvents function
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const filters = {
      location: params.get('location'),
      cultures: params.get('cultures'),
      categories: params.get('tags')
    };

    const fetchEvents = async () => {
      const eventsList = await getEvents(filters);
      setEvents(eventsList);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      {events.map(event => (
        <EventItem key={event.id} {...event} />
      ))}
    </div>
  );
};

export default EventsList;
