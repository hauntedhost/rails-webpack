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

export const clearError = () => {
  return {
    type: types.CLEAR_ERROR,
    payload: null
  }
}

export const removeTodo = (criteria) => {
  return {
    type: types.REMOVE_TODO,
    payload: criteria
  }
}

export const replaceTodo = (criteria, todo) => {
  return {
    type: types.REPLACE_TODO,
    payload: { criteria: criteria, todo: todo }
  }
}

export const replaceTodos = (todos) => {
  return {
    type: types.REPLACE_TODOS,
    payload: todos
  }
}

export const showError = (message) => {
  return {
    type: types.SHOW_ERROR,
    payload: message
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
      .done((json) => {
        dispatch(replaceTodo({ uuid: newTodo.uuid }, json.todo));
      })
      .fail((xhr) => {
        let errorMessage = $.parseJSON(xhr.responseText).error;
        dispatch(flashError(errorMessage));
        dispatch(removeTodo({ uuid: newTodo.uuid }));
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

export const flashError = (message, timeout = 3000) => {
  return (dispatch, getState) => {
    dispatch(showError(message));
    return setTimeout(() => dispatch(clearError()), timeout);
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
