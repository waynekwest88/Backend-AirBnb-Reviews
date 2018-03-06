import React from 'react';
import { mount } from 'enzyme';

import Navigation from '../src/components/Navigation';

describe('<Navigation /> Component', () => {
  let clickCounter = 0;
  const testCallback = () => {
    clickCounter += 1;
  };

  const wrapper = mount(<Navigation pages={3} clickHandler={testCallback} />);

  it('should execute the passed in callback on click', () => {
    wrapper
      .find('a')
      .first()
      .simulate('click');
    expect(clickCounter).toEqual(1);
  });
  it('should render the correct number of buttons', () => {
    expect(wrapper.find('a')).toHaveLength(3);
  });
});
