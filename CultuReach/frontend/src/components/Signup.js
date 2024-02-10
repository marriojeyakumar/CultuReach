import React, { useState } from 'react';

const Signup = ({ onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Perform user registration logic (e.g., send data to backend)
    // For simplicity, just log in for now
    console.log('Signed up:', email);
    onSignup(email);
  };

  return (
    <div>
      <h2>Signup</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;