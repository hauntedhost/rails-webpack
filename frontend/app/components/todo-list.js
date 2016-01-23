import React from 'react';
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

    return (
      <div className="todos">
        <input
          type="text"
          placeholder={'New Todo'}
          value={inputValue}
          onKeyDown={this.handleOnKeyDown.bind(this)}
          onChange={this.updateInput.bind(this)} />

        {errorMessage ? (<p className="error">{errorMessage}</p>) : ''}

        <ul>
          {todos.map((todo, index) => {
            return (
              <Todo
                key={index}
                todo={todo}
                toggle={this.toggleTodo.bind(this, index)} />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
