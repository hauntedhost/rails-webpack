import $ from 'jquery';

export const addTodo = () => {
  return {
    type: 'ADD-TODO',
    payload: null
  }
}

export const replaceTodos = (todos) => {
  return {
    type: 'REPLACE-TODOS',
    payload: todos
  }
}

export const toggleTodo = (index) => {
  return {
    type: 'TOGGLE-TODO',
    payload: index
  }
}

export const updateInput = (value) => {
  return {
    type: 'UPDATE-INPUT',
    payload: value
  }
}

// async

export const fetchTodos = () => {
  return (dispatch, getState) => {
    return $.get('/api/todos')
      .then((json) => {
        dispatch(replaceTodos(json))
      });
  }
}
