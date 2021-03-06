// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import usernameReducer from './reducers/username_reducer';
import messagesReducer from './reducers/messages_reducer';
import messagesInputReducer from './reducers/messages_input_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';

// State and reducers

const identityReducer = (state = null) => state;

const initialState = {
  messages: [],
  author: prompt("Please provide a username") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  channels: [{name: "Sam", id: 1}, {name: "Nick", id: 2}],
  // selected_channel: {name: "Sam", id: 1}
};

const reducers = combineReducers({
  author: identityReducer,
  channels: identityReducer,
  messages: messagesReducer,
  // selected_channel: selectedChannelReducer,
  input_value: messagesInputReducer,
});

//Middlewares
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(promiseMiddleware, logger));
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/:channel" component={App} />
        <Redirect from="/" to="/Sam" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

//
