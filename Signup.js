import React, { useState } from 'react';
import { signupUser } from '../services/auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await signupUser(email, password);
      // Redirect or perform necessary actions upon successful signup
    } catch (error) {
      setError('An error occurred during signup');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
