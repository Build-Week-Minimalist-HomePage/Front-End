import React, { useState } from 'react';

import axios from 'axios';
//import { Redirect } from 'react-router-dom';

const Register = (props) => {
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
      console.log("in Register component, username password: ", username, password);

      axios
         .post('https://bw-homepage.herokuapp.com/api/auth/register', {username, password})
         .then(res => {
            console.log(res);
            props.history.push('/login');
         })
         .catch(err=> console.log(err.response));
   }


   return (
      <>
         <h1>Register for new Account</h1>

         <form onSubmit={handleSubmit}>
            <input type='text' name='username' value={username} onChange={usernameOnChange}></input>
            <input type='password' name='password' value={password} onChange={passwordOnChange}></input>
            <button>Register</button>
         </form> 
      </>
   );
}

export default Register;