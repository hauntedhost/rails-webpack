import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import LanguagePicker from './language-picker';
import './style.scss';

const initialState = {
  selected: 0,
  name: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'UPDATE-LANGUAGE':
    return {
      ...state,
      selected: action.payload
    };
  case 'UPDATE-NAME':
    return {
      ...state,
      name: action.payload
    };
  default:
    return state
  }
}

const store = createStore(reducer, initialState);
window.store = store;

render(
  <Provider store={store}>
    <LanguagePicker />
  </Provider>,
  document.getElementById('app')
);
