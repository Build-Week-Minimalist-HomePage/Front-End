import React, { useState } from 'react';

import { axiosWithAuth } from '../axiosWithAuth';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const usernameOnChange = (e) => {
      e.preventDefault();
      setUsername(e.target.value);
   }

   const passwordOnChange = (e) => {
      e.preventDefault();
      setPassword(e.target.value);
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("login submitted")
      axiosWithAuth()
         .post('/api/auth/login', {username, password})
         .then(res => {
            console.log("In login, handleSubmit response:", res);
            localStorage.setItem('token', res.data.token);
            props.history.push('/dashboard');
         })
         .catch(err=> console.log(err.response));
   }

   if (localStorage.getItem('token')) {
      console.log("In Login.js -> token present, redirecting to dashboard ");
      return <Redirect to="/dashboard" />;
   }

   return (
      <>

         <h1>Login</h1>
         <form onSubmit={handleSubmit}>
            <input type='text' name='username' value={username} onChange={usernameOnChange}></input>
            <input type='password' name='password' value={password} onChange={passwordOnChange}></input>
            <button>Login</button>
         </form>
      </>
   );
}

export default Login;