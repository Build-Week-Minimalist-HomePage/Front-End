import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';  // removed compose
import thunk from 'redux-thunk';

import titleReducer from './store/reducers/titleReducer'
import noteReducer from './store/reducers/noteReducer'


const rootReducer = combineReducers({
   linksR : titleReducer,
   //noteR : noteReducer,
});

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;;
//const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}>
                  <Router><App /></Router>
                </Provider>, 
                document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
