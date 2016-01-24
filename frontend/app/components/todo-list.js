import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Todo from './todo';

// NOTE: as of 2016-01-22 the top-level component currently cannot be a
// a stateless component, otherwise hot reloading breaks.
// see: https://github.com/gaearon/babel-plugin-react-transform/issues/57

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleTodo(index) {
    this.props.actions.toggleTodo(index);
  }

  updateInput(e) {
    this.props.actions.updateInput(e.target.value);
  }

  handleOnKeyDown(e) {
    (e.key === 'Enter') && this.props.actions.addTodo();
  }

  render() {
    const { todos, inputValue, errorMessage } = this.props;
    const todoItems = todos.map((todo, index) => {
      const key = todo.uuid ? todo.uuid : todo.id;
      return (
        <Todo
          key={key}
          todo={todo}
          toggle={this.toggleTodo.bind(this, index)} />
      );
    });

    return (
      <div className="todos">
        <div className="alerts">
          <ReactCSSTransitionGroup
            transitionName="error"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={300}>
            {errorMessage ? (<p className="error">{errorMessage}</p>) : ''}
          </ReactCSSTransitionGroup>
        </div>

        <input
          type="text"
          placeholder={'New Todo'}
          value={inputValue}
          onKeyDown={this.handleOnKeyDown.bind(this)}
          onChange={this.updateInput.bind(this)} />

        <ul>
          <ReactCSSTransitionGroup
            transitionName="todo"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={900}>
            {todoItems}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }
}

export default TodoList;
