import testUtilities from '../../../../test/testUtilities';
import Counter from '../Counter';

describe('Counter', () => {
  describe('render', () => {
    it('should render without crashing', () => {
      const wrapper = testUtilities.setup(Counter);
      expect(wrapper).toBeTruthy();
    });

    it('should have a default state when the app loads', () => {
      const wrapper = testUtilities.setup(Counter);
      expect(wrapper.state().counter).toBe(0);
    });

    it('should increment the counter when the button is clicked', () => {
      const wrapper = testUtilities.setup(Counter, null, { counter: 7 });
      testUtilities.findByTestAttr(wrapper, 'someButtonId').simulate('click');
      expect(wrapper.state().counter).toBe(8);
      expect(testUtilities.findByTestAttr(wrapper, 'counterValue').text()).toContain('8');
    });

    it('should render the counter title', () => {
      const wrapper = testUtilities.setup(Counter);
      expect(testUtilities.findByTestAttr(wrapper, 'counterTitle').text()).toBe('Welcome to the Counter Application');
    });

    it('should render a decrement counter button', () => {
      const wrapper = testUtilities.setup(Counter);
      expect(testUtilities.findByTestAttr(wrapper, 'decrementBtn').length).toBe(1);
    });

    it('should decrement the counter when the button is clicked', () => {
      const wrapper = testUtilities.setup(Counter, null, { counter: 8 });
      testUtilities.findByTestAttr(wrapper, 'decrementBtn').simulate('click');
      expect(testUtilities.findByTestAttr(wrapper, 'counterValue').text()).toContain('7');
    });

    it('should not decrement below zero', () => {
      const wrapper = testUtilities.setup(Counter);
      testUtilities.findByTestAttr(wrapper, 'decrementBtn').simulate('click');
      expect(testUtilities.findByTestAttr(wrapper, 'counterValue').text()).toContain(0);
    });

    it('should display an error message when attempt to decrement below zero', () => {
      const wrapper = testUtilities.setup(Counter);
      testUtilities.findByTestAttr(wrapper, 'decrementBtn').simulate('click');
      expect(testUtilities.findByTestAttr(wrapper, 'errorMsg').text()).toBe('You cannie go below zero matie');
    });

    it('should not display an error message when you attempt to decrement on a number larger than zero', () => {
      const wrapper = testUtilities.setup(Counter, null, { counter: 8 });
      testUtilities.findByTestAttr(wrapper, 'decrementBtn').simulate('click');
      expect(testUtilities.findByTestAttr(wrapper, 'errorMsg').text()).toBe('');
    });
  });
});
