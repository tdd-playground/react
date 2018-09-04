import React from 'react';
import { mount } from 'enzyme';

import SamplePage from '../SamplePage';

describe('SamplePage', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(<SamplePage />);
  });

  describe('render', () => {
    it('should render without crashing', () => {
      expect(wrapper).toBeTruthy();
    });

    it('should have a default state when the app loads', () => {
      expect(wrapper.state().counter).toBe(0);
    });

    it('should increment the counter when the button is clicked', () => {
      wrapper.find('#someButtonId').simulate('click');
      expect(wrapper.state().counter).toBe(1);
    });
  });
});
