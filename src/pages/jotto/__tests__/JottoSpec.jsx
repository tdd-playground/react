import testUtilities from '../../../../test/testUtilities';

import Jotto from '../Jotto';

describe('Jotto', () => {
  it('should render without crashing', () => {
    const wrapper = testUtilities.setup(Jotto);
    expect(wrapper).toBeTruthy();
  });
});
