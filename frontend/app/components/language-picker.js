import React from 'react';
import LanguageOption from './language-option';

class LanguagePicker extends React.Component {
  constructor(props) {
    super(props);
  }

  selectLanguage(index) {
    this.props.actions.selectLanguage(index);
  }

  updateName(e) {
    const name = e.target.value;
    this.props.actions.updateName(name);
  }

  render() {
    const languages = this.props.languages;
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
              select={this.selectLanguage.bind(this, index)} />
          );
        })}
      </form>
    );
  }
}

export default LanguagePicker;
