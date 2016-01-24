import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';

const Todo = (props) => {
  const todo = props.todo;
  const classes = classNames('todo', {
    completed: todo.completed,
    invalid: todo.invalid
  });

  return (
    <li className={classes}
        onClick={props.toggle}>
      {todo.note}
    </li>
  );
}

export default Todo;
