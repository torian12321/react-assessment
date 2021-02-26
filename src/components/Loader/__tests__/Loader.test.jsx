import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from '@components/Loader';
import 'jest-styled-components';

it('renders correctly', () => {
  const { container } = render(<Loader />);

  expect(container).toMatchSnapshot();
});
