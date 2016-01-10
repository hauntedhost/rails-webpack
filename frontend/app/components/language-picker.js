import React from 'react';
import LanguageOption from './language-option';

class LanguagePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      name: ''
    }
  }

  componentDidUpdate() {
    console.log('updated!');
  }

  update(index) {
    this.setState({ selected: index });
  }

  updateName(e) {
    const name = e.target.value;
    this.setState({ name });
  }

  render() {
    const languages = this.props.languages;
    const selected = this.state.selected;
    const name = this.state.name;

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
              update={this.update.bind(this, index)} />
          );
        })}
      </form>
    );
  }
}

export default LanguagePicker;
