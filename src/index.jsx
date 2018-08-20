// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise';


// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import usernameReducer from './reducers/username_reducer';
import messagesReducer from './reducers/messages_reducer';
import messagesInputReducer from './reducers/messages_input_reducer';

// State and reducers
const reducers = combineReducers({
  author: usernameReducer,
  messages: messagesReducer,
  input_value: messagesInputReducer,
});

const initialState = {
  messages: [],
  author: `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  // channels: ["general", "react", "paris"],
  // selectedChannel: "general"
};

//Middlewares
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(promiseMiddleware, logger));
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// prompt("Please provide a username") ||
