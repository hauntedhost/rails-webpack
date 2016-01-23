// action creators

import * as types from './action-types';
import uuid from 'node-uuid';
import $ from 'jquery';

export const optimisticAddTodo = (newTodo) => {
  return {
    type: types.OPTIMISTIC_ADD_TODO,
    payload: newTodo
  }
}

export const addTodoDatabaseId = (uuid, databaseId) => {
  return {
    type: types.ADD_TODO_DATABASE_ID,
    payload: { uuid: uuid, databaseId: databaseId }
  }
}

export const replaceTodos = (todos) => {
  return {
    type: types.REPLACE_TODOS,
    payload: todos
  }
}

export const toggleTodo = (index) => {
  return {
    type: types.TOGGLE_TODO,
    payload: index
  }
}

export const updateInput = (value) => {
  return {
    type: types.UPDATE_INPUT,
    payload: value
  }
}

// async actions

export const addTodo = () => {
  return (dispatch, getState) => {
    let state = getState();
    let newTodo = generateNewTodo(state.inputValue);
    dispatch(optimisticAddTodo(newTodo));
    $.post('/api/todos', { todo: newTodo })
      .then((json) => {
        dispatch(addTodoDatabaseId(newTodo.uuid, json.todo.id));
      });
  }
}

export const fetchTodos = () => {
  return (dispatch, getState) => {
    return $.get('/api/todos')
      .then((json) => {
        dispatch(replaceTodos(json.todos))
      });
  }
}

// helpers

const generateNewTodo = (note) => {
  return {
    uuid: uuid.v4(),
    note: note,
    completed: false
  }
}
