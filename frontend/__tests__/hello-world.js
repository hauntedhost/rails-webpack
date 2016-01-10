import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

jest.dontMock('../app/components/hello-world');
const HelloWorld = require('../app/components/hello-world').default;

describe('HelloWorld', () => {
  let component, componentNode;

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<div><HelloWorld /></div>);
    componentNode = ReactDOM.findDOMNode(component);
  });

  it('displays "Hello World"', () => {
    expect(componentNode.textContent).toMatch(/Hello World!/);
  })
});
