import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import TodoList from '../components/todo-list';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

const App = (props) => {
  return (
    <div>
      <TodoList {...props} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
