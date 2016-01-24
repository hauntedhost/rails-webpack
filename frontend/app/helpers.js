import $ from 'jquery';
import uuid from 'node-uuid';

// object or index matcher for _.reject, _.findIndex, etc.
export const criteriaMatcher = (criteria) => {
  return _.isObject(criteria) ? criteria : (item, index) => {
    return index === criteria;
  }
};

export const findTodo = (state, criteria) => {
  let index = findTodoIndex(state, criteria);
  return state.todos[index];
}

export const findTodoIndex = (state, criteria) => {
  return _.findIndex(state.todos, criteriaMatcher(criteria));
}

export const generateNewTodo = (note) => {
  return {
    uuid: uuid.v4(),
    note: note,
    completed: false
  }
};

export const xhrError = (xhr) => {
  return $.parseJSON(xhr.responseText).error;
;}
