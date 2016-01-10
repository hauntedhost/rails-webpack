import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './containers/app';
import './style.scss';

const initialState = {
  selected: 0,
  name: ''
}

const store = createStore(reducer, initialState);
window.store = store;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
