import * as types from './action-types';
import './actions';
import _ from 'lodash';

const defaultState = {
  inputValue: '',
  todos: [],
  errorMessage: ''
}

const reducer = (state = defaultState, action) => {
  console.debug('ACTION', action.type, action.payload);

  let index;
  const todos = [...state.todos];

  switch (action.type) {

  case types.CLEAR_ERROR:
    return {
      ...state,
      errorMessage: ''
    };

  case types.OPTIMISTIC_ADD_TODO:
    todos.unshift(action.payload);
    return {
      ...state,
      todos: todos,
      inputValue: ''
    };

  case types.REMOVE_TODO:
    return {
      ...state,
      todos: _.reject(todos, action.payload)
    };

  case types.REPLACE_TODO:
    index = _.findIndex(todos, action.payload.criteria);
    todos[index] = action.payload.todo;
    return {
      ...state,
      todos: todos
    };

  case types.REPLACE_TODOS:
    return {
      ...state,
      todos: action.payload
    };

  case types.SHOW_ERROR:
    return {
      ...state,
      errorMessage: action.payload
    };

  case types.TOGGLE_TODO:
    index = action.payload;
    const newCompleted = todos[index].completed ? false : true;
    todos[index].completed = newCompleted;
    return {
      ...state,
      todos: todos
    };

  case types.UPDATE_INPUT:
    return {
      ...state,
      inputValue: action.payload
    };

  default:
    return state
  }
}

export default reducer;
