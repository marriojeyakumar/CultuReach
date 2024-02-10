import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import AppBar from './components/AppBar';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (email) => {
    setUser(email);
  };

  const handleSignup = (email) => {
    setUser(email);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      <AppBar />
    </div>
  );
}

export default App;