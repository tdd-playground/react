import React from 'react';
import { shallow } from 'enzyme';

import SamplePage from '../SamplePage';

describe('SamplePage', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<SamplePage />);
  });

  describe('render', () => {
    it('should render without crashing', () => {
      expect(wrapper).toBeTruthy();
    });

    it('should display Hello World!', () => {
      expect(wrapper.find('div').length).toBe(1);
      expect(wrapper.find('div').text()).toBe('Hello World!');
    });
  });
});
