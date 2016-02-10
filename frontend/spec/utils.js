import TestUtils from 'react-addons-test-utils';
import _ from 'lodash';
import expect from 'expect';
import expectJSX from  'expect-jsx';
expect.extend(expectJSX);

// quick-and-dirty breadth-first search
const findChildWith = (output, source) => {
  let queue = [];
  let next = output;
  let count = 0;
  let maxCount = 25;

  while (next && count <= maxCount) {
    count += 1;

    if (_.isMatch(next, source)) {
      return next;
    }

    if (_.isArray(next.props.children)) {
      queue = queue.concat(next.props.children);
    } else if (_.isObject(next.props.children)) {
      queue.push(next.props.children);
    }
    next = queue.shift();
  }
}

const getRenderOutput = (jsx) => {
  const renderer = TestUtils.createRenderer();
  renderer.render(jsx);
  return renderer.getRenderOutput();
}

export { expect, findChildWith, getRenderOutput};
