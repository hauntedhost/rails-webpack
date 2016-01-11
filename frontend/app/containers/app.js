import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import LanguagePicker from '../components/language-picker';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

const languages = [
  'javascript',
  'ruby',
  'clojure',
  'elixir',
  'haskell'
];

const App = (props) => {
  return (
    <div>
      <LanguagePicker
        {...props}
        languages={languages} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
