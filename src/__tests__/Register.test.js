import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Register from '../components/auth/Register';

it('Should render Component', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Register />
    </MemoryRouter>
  );
  expect(wrapper.debug()).toMatchSnapshot();
});
