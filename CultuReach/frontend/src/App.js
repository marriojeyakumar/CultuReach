// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar';
import HomeHeader from './components/HomeHeader';
import CultureSelector from './components/CultureSelector';
import EventsDisplay from './components/EventsDisplay';
import EventTypeSelector from './components/EventTypeSelector';
import ContactForm from './components/ContactForm';
import AboutUs from './components/AboutUs'; 

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar />
        <Switch>
          <Route path="/" exact>
            <HomeHeader />
            <CultureSelector />
            <EventTypeSelector />
            <EventsDisplay />
            <ContactForm />
          </Route>
          <Route path="/about-us" component={AboutUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
