// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar';
import HomeHeader from './components/HomeHeader';
import CultureSelector from './components/CultureSelector';
import EventsDisplay from './components/EventsDisplay';
import EventTypeSelector from './components/EventTypeSelector';
import ContactForm from './components/ContactForm';
import AboutUs from './components/AboutUs'; 
import EventsPage from './EventsPage';
import EventExpand from './EventExpand';


function App() {
  return (
    <Router>
      <div className="App">
        <AppBar />
        <Routes>
          <Route path="/" element={
            <>
              <HomeHeader />
              <CultureSelector />
              <EventTypeSelector />
              <EventsDisplay />
              <ContactForm />
            </>
          } />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/event/id=:id" element={<EventExpand />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
