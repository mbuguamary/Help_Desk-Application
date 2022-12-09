import React from 'react'
import { useState } from 'react';

import SignUp from './SignUp';
import {Link,useNavigate } from 'react-router-dom';


const Login = (setUser) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      if (r.ok) {
       // r.json().
      
       //then((user) => setUser(user));
       alert("Login Successfull")
        navigate('/app')
      }
    });
  }

  return (
    <div>
      <form className='frm' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='btns' type="submit">Login</button>
      </form>
    </div>
  );

    }
export default Login