import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Forgot from '../components/auth/Forgot';

it('Should render Component', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Forgot />
    </MemoryRouter>
  );
  expect(wrapper.debug()).toMatchSnapshot();
});
