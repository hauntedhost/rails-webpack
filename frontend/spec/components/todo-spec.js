import React from 'react';
import ReactDOM from 'react-dom';
import { expect, findChildWith, getRenderOutput} from 'spec/utils';

import Todo from 'app/components/todo';

describe('Todo', () => {
  let todo = { id: 1, note: 'Learn Elm' }
  let toggle = (e) => {};
  let jsx = (<Todo todo={todo} toggle={toggle} />);

  it('renders the todo', () => {
    const expected = (
      <li
        className='todo'
        onClick={toggle}>{todo.note}</li>
    );
    const actual = getRenderOutput(jsx);
    expect(actual).toIncludeJSX(expected);
  });

  context('when a todo is completed', () => {
    let todo = { id: 1, note: 'Learn Elm', completed: true }
    let jsx = (<Todo todo={todo} toggle={toggle} />);

    it('renders with a completed class', () => {
      const expected = (
        <li
          className='todo completed'
          onClick={toggle}>{todo.note}</li>
      );
      const actual = getRenderOutput(jsx);
      expect(actual).toIncludeJSX(expected);
    });
  });

  context('when a todo is invalid', () => {
    let todo = { id: 1, note: 'Learn Elm', invalid: true }
    let jsx = (<Todo todo={todo} toggle={toggle} />);

    it('renders with an invalid class', () => {
      const expected = (
        <li
          className='todo invalid'
          onClick={toggle}>{todo.note}</li>
      );
      const actual = getRenderOutput(jsx);
      expect(actual).toIncludeJSX(expected);
    });
  });
});
