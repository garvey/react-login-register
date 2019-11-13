import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import App from '../App';

it('Should render Component', () => {
  const wrapper = mount(<App />);
  expect(wrapper.debug()).toMatchSnapshot();
});
