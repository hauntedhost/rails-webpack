import * as types from './action-types';
import './actions';
import _ from 'lodash';

const defaultState = {
  inputValue: '',
  todos: []
}

const reducer = (state = defaultState, action) => {
  console.debug('ACTION', action.type, action.payload);

  let index;
  const todos = [...state.todos];

  switch (action.type) {

  case types.ADD_TODO_DATABASE_ID:
    index = _.findIndex(todos, { uuid: action.payload.uuid });
    todos[index].id = action.payload.databaseId;
    return {
      ...state,
      todos: todos
    };

  case types.OPTIMISTIC_ADD_TODO:
    todos.unshift(action.payload);
    return {
      ...state,
      todos: todos,
      inputValue: ''
    };

  case types.REPLACE_TODOS:
    return {
      ...state,
      todos: action.payload
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
