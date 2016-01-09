import React from 'react';
import LanguageOption from './language-option';

class LanguagePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    }
  }

  componentDidUpdate() {
    console.log('updated!');
  }

  shouldComponentUpdate(_, nextState) {
    return this.state.selected != nextState.selected;
  }

  update(index) {
    this.setState({ selected: index });
  }

  render() {
    const languages = this.props.languages;
    const selected = this.state.selected;
    return (
      <form>
        {languages.map((language, index) => {
          return (
            <LanguageOption
              key={index}
              language={language}
              selected={selected == index}
              update={this.update.bind(this, index)} />
          );
        })}
      </form>
    );
  }
}

export default LanguagePicker;
