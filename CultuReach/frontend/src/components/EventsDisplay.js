import React from "react";
import FilterBar from "./components/FilterBar";
import EventsList from "./components/EventsList";
import "./EventsPage.css";


import fakeEvent1 from "./components/img/mockEvent1.png";
import fakeEvent2 from "./components/img/mockEvent2.png";
import fakeEvent3 from "./components/img/mockEvent3.png";

const EventPage = () => {
  const events = [
    {
      title: 'Irish Tap Dancing Class',
      image: "fakeEvent1", 
      place: 'Dublin Dance Studio, MA',
      host: 'Celtic Rhythms',
      time: 'Mar 17, 2024, 5:00 PM',
      going: 15,
      price: 'Free',
    },
    {
      title: 'Brazilian Music Festival',
      image: "fakeEvent2", 
      place: 'Rio Rhythms Arena, MA',
      host: 'Samba Beats',
      time: 'Apr 21, 2024, 8:00 PM',
      going: 200,
      price: 'Ticketed',
    },
    {
      title: 'Japanese Tea Ceremony',
      image: "fakeEvent3", 
      place: 'Kyoto Garden Center, MA',
      host: 'Tea Culture Association',
      time: 'May 5, 2024, 2:00 PM',
      going: 30,
      price: '$10 entry',
    },
    {
      title: 'Chinese Calligraphy Workshop',
      image: "fakeEvent4", 
      place: 'Beijing Arts Institute, MA',
      host: 'Calligraphy Masters',
      time: 'Jun 12, 2024, 10:00 AM',
      going: 20,
      price: '$20 entry',
    },
    {
      title: 'African Drumming Circle',
      image: "fakeEvent5", 
      place: 'Nairobi Music Hall, MA',
      host: 'Drum Beats Collective',
      time: 'Jul 8, 2024, 6:00 PM',
      going: 50,
      price: 'Free',
    },
    {
      title: 'Italian Cooking Class',
      image: "fakeEvent6", 
      place: 'Rome Culinary School, MA',
      host: 'Chef Luigi',
      time: 'Aug 15, 2024, 1:00 PM',
      going: 10,
      price: '$30 entry',
    },
    {
      title: 'French Wine Tasting',
      image: "fakeEvent7", 
      place: 'Paris Vineyard, MA',
      host: 'Wine Connoisseurs',
      time: 'Sep 20, 2024, 4:00 PM',
      going: 25,
      price: '$25 entry',
    },
    {
      title: 'Indian Classical Music Night',
      image: "fakeEvent8", 
      place: 'Mumbai Music Academy, MA',
      host: 'Raga Melodies',
      time: 'Oct 30, 2024, 7:00 PM',
      going: 100,
      price: 'Ticketed',
    }
  ];

  return (
    <div className="events-page">
      <FilterBar />
      <EventsList events={events} />
    </div>
  );
};

export default EventPage;