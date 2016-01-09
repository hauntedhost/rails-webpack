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
        <p>{_.capitalize(language)}</p>
      </label>
    </div>
  );
}

export default LanguageOption;
