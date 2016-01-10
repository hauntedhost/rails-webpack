import React from 'react';
import { connect } from 'react-redux';
import LanguageOption from './language-option';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  return state;
}

const languages = [
  'ruby',
  'javascript',
  'clojure',
  'elixir',
  'haskell',
  'ocaml'
];

class LanguagePicker extends React.Component {
  constructor(props) {
    super(props);
  }

  updateLanguage(index) {
    this.props.dispatch(actions.updateLanguage(index));
  }

  updateName(e) {
    const name = e.target.value;
    this.props.dispatch(actions.updateName(name));
  }

  render() {
    const selected = this.props.selected;
    const name = this.props.name;

    return (
      <form>
        <input
          placeholder={'Your name!'}
          value={name}
          onChange={this.updateName.bind(this)} />

        {languages.map((language, index) => {
          return (
            <LanguageOption
              key={index}
              language={language}
              selected={selected == index}
              update={this.updateLanguage.bind(this, index)} />
          );
        })}
      </form>
    );
  }
}

export default connect(mapStateToProps)(LanguagePicker);
