// action creators

import * as types from './action-types';
import $ from 'jquery';
import { criteriaMatcher, findTodo, generateNewTodo, xhrError } from './helpers'

// public actions
// --------------

const addTodo = () => {
  return (dispatch, getState) => {
    const state = getState();
    const newTodo = generateNewTodo(state.inputValue);
    dispatch(pushTodo(newTodo));
    $.post('/api/todos', { todo: newTodo })
      .done((json) => {
        dispatch(updateTodo({ uuid: newTodo.uuid }, { id: json.todo.id }));
      })
      .fail((xhr) => {
        const errorMessage = xhrError(xhr);
        dispatch(flashError(errorMessage));
        dispatch(updateTodo({ uuid: newTodo.uuid }, { invalid: true }));
        dispatch(removeTodo({ uuid: newTodo.uuid }));
      });
  }
}

const fetchTodos = () => {
  return (dispatch, getState) => {
    return $.get('/api/todos')
      .then((json) => {
        dispatch(replaceTodos(json.todos))
      });
  }
}

const flashError = (message, timeout = 3000) => {
  return (dispatch, getState) => {
    dispatch(showError(message));
    return setTimeout(() => dispatch(clearError()), timeout);
  }
}

const toggleTodo = (index) => {
  return (dispatch, getState) => {
    const state = getState();
    const todo = state.todos[index];

    const retries = 3;
    const criteria = todo.uuid ? { uuid: todo.uuid } : { id: todo.id };
    const doneFailState = {
      done: { completed: todo.completed ? false : true },
      fail: { completed: todo.completed }
    }

    const persistCompleted = (retries) => {
      const todo = findTodo(getState(), criteria);

      if (!todo) {
        console.debug('toggleTodo: todo is gone. bye!');
        return;
      }

      if (!todo.id) {
        if (retries <= 0) {
          console.debug('toggleTodo out of retries. bye.');
          return;
        } else {
          return setTimeout(() => {
            console.debug('toggleTodo retrying:', retries);
            persistCompleted(retries - 1);
          }, 900);
        }
      }

      console.debug('toggleTodo got a todo.id:', todo.id, 'submitting PATCH ...');

      $.ajax({
        url: `/api/todos/${todo.id}`,
        data: { todo: doneFailState.done },
        type: 'PATCH'
      }).done((json) => {
        console.debug('toggleTodo done!');
      }).fail((xhr) => {
        const errorMessage = xhrError(xhr);
        console.debug('toggleTodo failed:', errorMessage);
        dispatch(flashError(errorMessage));
        dispatch(updateTodo({ id: todo.id }, doneFailState.fail));
      });
    }

    // optimistically update
    dispatch(updateTodo(criteria, doneFailState.done));

    // persist with retries
    persistCompleted(retries);
  }
}

const updateInput = (value) => {
  return {
    type: types.UPDATE_INPUT,
    payload: value
  }
}

// private actions
// ---------------

const clearError = () => {
  return {
    type: types.CLEAR_ERROR,
    payload: null
  }
}

const pushTodo = (todo) => {
  return {
    type: types.PUSH_TODO,
    payload: todo
  }
}

const removeTodo = (criteria) => {
  return {
    type: types.REMOVE_TODO,
    payload: criteria
  }
}

const replaceTodos = (todos) => {
  return {
    type: types.REPLACE_TODOS,
    payload: todos
  }
}

const showError = (message) => {
  return {
    type: types.SHOW_ERROR,
    payload: message
  }
}

const updateTodo = (criteria, props) => {
  return {
    type: types.UPDATE_TODO,
    payload: { criteria: criteria, props: props }
  }
}

export { addTodo, fetchTodos, flashError, toggleTodo, updateInput };
