import React from 'react';
import { shallow } from 'enzyme/build';

const testUtilities = {
  setup: (component, props = {}, state = null) => {
    const shallowWrapper = shallow(React.createElement(component));
    if (props) {
      shallowWrapper.setProps(props);
    }
    if (state) {
      shallowWrapper.setState(state);
    }
    return shallowWrapper;
  },
  findByTestAttr: (wrapper, val) => wrapper.find(`[data-test="${val}"]`),
};

export default testUtilities;
