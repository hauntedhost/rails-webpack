import React from 'react';
import ReactDOM from 'react-dom';
import LanguagePicker from './language-picker';
import './style.scss';

const languages = [
  'ruby',
  'javascript',
  'clojure',
  'elixir',
  'haskell',
  'ocaml'
];

ReactDOM.render(
  <LanguagePicker languages={languages} />,
  document.getElementById('app')
);
