import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { loginUser } from '../services/auth';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
    const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await loginUser(email, password);
      console.log(result);
      // Redirect or perform necessary actions upon successful login
      if(result.success){
        navigate("/library")
      }
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
       
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
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
