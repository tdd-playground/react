import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('App', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<App />);
  });

  describe('render', () => {
    it('should contain a BrowserRouter component', () => {
      console.log(wrapper);
      expect(wrapper.find('BrowserRouter').length).toBe(1);
    });
  });
});
