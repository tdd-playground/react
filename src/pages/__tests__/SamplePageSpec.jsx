import React from 'react';
import { shallow } from 'enzyme';

import SamplePage from '../SamplePage';

describe('SamplePage', () => {
  const setup = (props = {}, state = null) => {
    const shallowWrapper = shallow(<SamplePage {...props} />);
    if (state) {
      shallowWrapper.setState(state);
    }
    return shallowWrapper;
  }
  const findByTestAttr = (aWrapper, val) => aWrapper.find(`[data-test="${val}"]`);

  describe('render', () => {
    it('should render without crashing', () => {
      const wrapper = setup();
      expect(wrapper).toBeTruthy();
    });

    it('should have a default state when the app loads', () => {
      const wrapper = setup();
      expect(wrapper.state().counter).toBe(0);
    });

    it('should increment the counter when the button is clicked', () => {
      const wrapper = setup(null, { counter: 7 });
      findByTestAttr(wrapper, 'someButtonId').simulate('click');
      expect(wrapper.state().counter).toBe(8);
      expect(findByTestAttr(wrapper, 'counterValue').text()).toContain('8');
    });

    it('should render the counter title', () => {
      const wrapper = setup();
      expect(findByTestAttr(wrapper, 'counterTitle').text()).toBe('Welcome to the Counter Application');
    });

    it('should render a decrement counter button', () => {
      const wrapper = setup();
      expect(findByTestAttr(wrapper, 'decrementBtn').length).toBe(1);
    });

    it('should decrement the counter when the button is clicked', () => {
      const wrapper = setup(null, { counter: 8 });
      findByTestAttr(wrapper, 'decrementBtn').simulate('click');
      expect(findByTestAttr(wrapper, 'counterValue').text()).toContain('7');
    });

    it('should not decrement below zero', () => {
      const wrapper = setup();
      findByTestAttr(wrapper, 'decrementBtn').simulate('click');
      expect(findByTestAttr(wrapper, 'counterValue').text()).toContain(0);
    });

    it('should display an error message when attempt to decrement below zero', () => {
      const wrapper = setup();
      findByTestAttr(wrapper, 'decrementBtn').simulate('click');
      expect(findByTestAttr(wrapper, 'errorMsg').text()).toBe('You cannie go below zero matie');
    });

    it('should not display an error message when you attempt to decrement on a number larger than zero', () => {
      const wrapper = setup(null, { counter: 8 });
      findByTestAttr(wrapper, 'decrementBtn').simulate('click');
      expect(findByTestAttr(wrapper, 'errorMsg').text()).toBe('');
    });
  });
});
