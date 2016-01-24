import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

jest.dontMock('../app/components/todo');
const Todo = require('../app/components/todo').default;

describe('Todo', () => {
  let component, componentNode, jsx;
  let todo = { id: 1, note: 'Learn Elm', completed: false }
  let toggle = (e) => {};

  beforeEach(() => {
    jsx = (<div><Todo todo={todo} toggle={toggle} /></div>);
    component = TestUtils.renderIntoDocument(jsx);
  });

  it('displays "Learn Elm"', () => {
    expect(component.textContent).toMatch(/Learn Elm/);
  })
});
