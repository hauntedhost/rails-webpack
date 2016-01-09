import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';

const LanguageOption = (props) => {
  const language = props.language;
  const selected = props.selected;
  const divClasses = classNames('radio', { selected: selected });

  return (
    <div className={divClasses}>
      <label>
        <input
          type="radio"
          name="language"
          value={language}
          onChange={props.update} />
        <p>Language: {_.capitalize(language)}</p>
      </label>
    </div>
  );
}

// class LanguageOption extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const language = this.props.language;
//     const selected = this.props.selected;
//     const divClasses = classNames('radio', { selected: selected });

//     return (
//       <div className={divClasses}>
//         <label>
//           <input
//             type="radio"
//             name="language"
//             value={language}
//             onChange={this.props.update} />
//           <p>{_.capitalize(language)}</p>
//         </label>
//       </div>
//     );
//   }
// }

export default LanguageOption;
