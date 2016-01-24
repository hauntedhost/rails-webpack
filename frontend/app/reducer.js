import * as types from './action-types';
import './actions';
import _ from 'lodash';
import { criteriaMatcher, findTodoIndex } from './helpers'

const defaultState = {
  inputValue: '',
  todos: [],
  errorMessage: ''
}

const reducer = (state = defaultState, action) => {
  console.debug('ACTION', action.type, action.payload);

  const todos = [...state.todos];

  switch (action.type) {

  case types.CLEAR_ERROR:
    return {
      ...state,
      errorMessage: ''
    };

  case types.PUSH_TODO:
    todos.unshift(action.payload);
    return {
      ...state,
      todos: todos,
      inputValue: ''
    };

  case types.REMOVE_TODO:
    return {
      ...state,
      todos: _.reject(todos, criteriaMatcher(action.payload))
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
    var index = findTodoIndex(state, action.payload);
    var newCompleted = todos[index].completed ? false : true;
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

  case types.UPDATE_TODO:
    var index = findTodoIndex(state, action.payload.criteria);
    todos[index] = _.merge(todos[index], action.payload.props);
    return {
      ...state,
      todos: todos
    };

  default:
    return state
  }
}

export default reducer;
