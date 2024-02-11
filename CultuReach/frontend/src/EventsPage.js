
import React from "react";
import { Link } from "react-router-dom";
import "./EventsPage.css";

import mockEvent1 from "./components/img/mockEvent1.png";
import mockEvent2 from "./components/img/mockEvent2.png";
import mockEvent3 from "./components/img/mockEvent3.png";

const EventsPage = () => {
  const events = [
    {
      title: "Exploring Banff National Park",
      image: mockEvent1,
      place: "Banff National Park",
      host: "AMC Worcester 3RD",
      time: "Wed, Feb 21 - 6:30 PM EST",
      going: 8,
      price: "Free",
    },
    {
      title: "Second Gathering",
      image: mockEvent3,
      place: "Maynard Self Exploration Meetup Group",
      host: "Maynard Group",
      time: "Thu, Feb 15 - 7:30 PM EST",
      going: 6,
      price: "Free",
    },
    {
      title: "Sunday Mahjong",
      image: mockEvent2,
      place: "Watertown, MA, USA",
      host: "Jennifer Sherman",
      time: "Sun, Feb 11, 10 - 12:30 PM EST",
      going: 119,
      price: "Free",
    },
    {
      title: "Intermediate and Advanced Samba!",
      image: "mockEvent4",
      place: "536 Massachusetts Ave Cambridge MA, USA",
      host: "Sambista R.",
      time: "Wed, Feb 14, 7:30 - 8:30 PM EST",
      going: 12,
      price: "$10",
    },
    {
      title: "History of Printmaking and Black Women",
      image: "mockEvent5",
      place: "590 Washington St MA, USA",
      host: "Sambista R.",
      time: "Tue, Feb 20, 1:00 - 3:30 PM EST",
      going: 4,
      price: "Free",
    },
    {
      title: "Workshop for Women in STEM",
      image: "mockEvent6",
      place: "AMSA Charter School Marlborugh, MA, USA",
      host: "Pat and Wendy",
      time: "Saturday, Feb 24, 12:00 - 4:30 PM EST",
      going: 16,
      price: "Free",
    },
    {
      title: "Diwali Dance festival",
      image: "mockEvent7",
      place: "152 Main St, Shrewsbury, MA, USA",
      host: "John Doe",
      time: "Friday, Nov 1, 5:00 - 9:30 PM EST",
      going: 3,
      price: "Free",
    },
  ]; // This would be fetched from an API in a real app

  const location = "Hudson, MA"; // This would be fetched from the user's location
  
  return (
    <div className="events-page">
      <div className="events-page-header">
        <h1>Events near {location} </h1>
      </div>
      {events.map((event, index) => (
        <React.Fragment key={index}>
          {index !== 0 && <hr className="event-row-separator" />} {/* Only add separator if it's not the first item */}
          <div className="event-list-item">
            {/* Your event list item content */}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default EventsPage;
