import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import TodoList from '../components/todo-list';

const App = (props) => {
  return (
    <div>
      <TodoList {...props} />
    </div>
  );
};

// connect with automatic mapping
// ------------------------------

// import { bindActionCreators } from 'redux';

// const mapStateToProps = (state) => {
//   return state;
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);


// verbose connect
// ---------------

export default connect(
  (state) => ({
    inputValue: state.inputValue,
    todos: state.todos,
    errorMessage: state.errorMessage
  }),
  (dispatch) => ({
    actions: {
      addTodo: () => {
        dispatch(actions.addTodo());
      },

      toggleTodo: (index) => {
        dispatch(actions.toggleTodo(index));
      },

      updateInput: (value) => {
        dispatch(actions.updateInput(value));
      }
    }
  })
)(App);
