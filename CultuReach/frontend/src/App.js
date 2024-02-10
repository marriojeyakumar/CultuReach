import React from 'react';
import './App.css';
import AppBar from './components/AppBar';
import HomeHeader from './components/HomeHeader'; // Import the new component
import CultureSelector from './components/CultureSelector';
import EventTypeSelector from './components/EventTypeSelector';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <AppBar />
      <HomeHeader /> {/* Include the HomeHeader component here */}
      <CultureSelector />
      <EventTypeSelector />
      <ContactForm />
    </div>
  );
}

export default App;

