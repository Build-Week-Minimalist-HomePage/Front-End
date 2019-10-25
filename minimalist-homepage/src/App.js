import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";

import MinimalistHomepage from './components/MinimalistHomepage';
import Dashboard from './components/Dashboard';
import useTheme from './hooks/useTheme';
import Nav from './components/Nav'

import { Route, Link } from 'react-router-dom';

function App() {
  const { theme, toggleTheme } = useTheme();


  return (
    <>

      <div className="App">

        <header className={`App-header ${theme}`}>

          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>

          

          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />

          <PrivateRoute exact path='/dashboard' component={Dashboard} />

          <button type="button" onClick={toggleTheme}>
					  Switch theme
				  </button>
          <MinimalistHomepage />
        </header>

        
      </div>
    </>
  );
}

export default App;
