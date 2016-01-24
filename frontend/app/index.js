import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { fetchTodos, replaceTodos } from './actions';
import reducer from './reducer';
import { Provider } from 'react-redux';
import App from './containers/app';
import './styles/style.scss';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);

store.dispatch(fetchTodos()).then(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
})

// DEBUG:
window.store = store;
