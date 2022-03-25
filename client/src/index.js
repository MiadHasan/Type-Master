import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { combineReducers } from "redux";
import thunk from 'redux-thunk';

import App from './App';
import './index.css';
import timer from './store/reducers/timer';
import text from './store/reducers/text';
import auth from './store/reducers/auth';
import profile from './store/reducers/profile';

const rootReducer = combineReducers({
  timer,
  text,
  auth,
  profile,
})

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));