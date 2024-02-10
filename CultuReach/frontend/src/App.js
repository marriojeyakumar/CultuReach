import React from 'react';
import './App.css';
import AppBar from './components/AppBar';
import CultureSelector from './components/CultureSelector';
import EventTypeSelector from './components/EventTypeSelector';

function App() {
  return (
    <div className="App">
      <AppBar />
      <CultureSelector />
      <EventTypeSelector />
    </div>
  );
}

export default App;
