import React from 'react';
import classNames from 'classnames';

const Todo = (props) => {
  const todo = props.todo;
  const classes = classNames('todo', { completed: todo.completed });

  return (
    <li className={classes}
        onClick={props.toggle}>
      {todo.note}
    </li>
  );
}

export default Todo;
