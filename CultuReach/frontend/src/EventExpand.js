import React from 'react';
import { useLocation } from 'react-router-dom';
import './EventExpand.css'; 
import eventImage from './components/img/mockEvent1.png';
import locationIcon from './components/img/location-icon.png';
import timeIcon from './components/img/time-icon.png';




const mockEvents = [
  { id: '1',
    title: "Exploring Banff National Park",
    image: eventImage,
    location: "Banff National Park",
    adress: "52 Main St · Northborough, MA",
    host: "AMC Worcester 3RD",
    dateTime: "Wed, Feb 21 - 6:30 PM EST",
    details1: "Embark on a visual journey with Mike April through his photo journal, where he revisits his backpacking escapades in Banff's high alpine peaks. Explore the enchanting allure of Mount Assiniboine and its trails, navigate demanding terrain, and be captivated by snow-capped summits, pristine alpine lakes, and vast glaciers.",
    details2: "Mike enjoys a wide variety of outdoor activities, including hiking, backpacking, paddling, snowshoeing, cross-country skiing, swimming, and biking. Currently he is a hiking leader for the Western MA chapter of the AMC.",
    details3: "Location: Northboro Historical Society, 50 Main St. (Rt.20). Doors open at 6:30. Dinner at 7:00. Speaker shortly after. Bring a dish to share - appetizer, entree, dessert, or beverage. ",
    details4: "Registration is not required, and all are welcome: members, non-members, visitors & guests. Optional brief intro/orientation to AMC and Worcester Chapter at 6:30 - if you're interested, contact membership@amcworcester.org.",
    going: 8,
    price: "Free",
  }
];


const EventExpand = () => {
  const location = useLocation(); // Hook to get location object
  const queryParams = new URLSearchParams(location.search); // Use URLSearchParams to parse query parameters
  const id = queryParams.get('id'); // Get the 'id' query parameter

  const event = mockEvents.find(e => e.id === id); // Adjust the comparison if necessary

  if (!event) {
    return <div>Event not found!</div>;
  }

  return (
    <div className="event-expand">
      <header className="event1-header">
      <h1 className="event1-title">{event.title}</h1>
      <div className="hosted-by-container">
        <img src={eventImage} alt='user-pfp' className="pfp" />
        <div className="hosted-by-text">
          <p className="hosted-by">Hosted By</p>
          <p className="event1-host">{event.host}</p>
        </div>
      </div>
    </header>
    <div className="event1-body">
        <img src={event.image} alt={event.title} className="event1-image" />
        <div className="event1-details">
          <div className="detail-item">
            <img src={timeIcon} alt="Time" className="icon time-icon" />
            <p className="event1-date-time">{event.dateTime}</p>
          </div>
          <div className="detail-item">
            <img src={locationIcon} alt="Location" className="icon location-icon" />
              <p className="event1-location">{event.location}</p>
          </div>
          <div className="detail-item">
              <p className="event1-adress">{event.adress}</p>

          </div>
          <p className="event-details">{event.details}</p>
        </div>
      </div>
      <div className = "details-header">
        Details
      </div>
      <div className = "details">
        <p className = "details1">{event.details1}</p>
        <p className = "details2">{event.details2}</p>
        <p className = "details3">{event.details3}</p>
        <p className = "details4">{event.details4}</p>
      </div>
      <div className = "tags-container">
        <button className = "tags">
          Exploring
        </button>
        <button className = "tags">
          Social
        </button>
        <button className = "tags">
          Community
        </button>
      </div>
      <div className = "attendees-header">
        Attendees (8)
      </div>
      
    </div>
    
  );
};

export default EventExpand;
