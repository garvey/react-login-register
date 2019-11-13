import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Login from '../components/auth/Login';

it('Should render Component', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
  expect(wrapper.debug()).toMatchSnapshot();
});
