import React from 'react';
import { render } from '@testing-library/react';
import { ModalOverlay } from '../Modal.Overlay';
import 'jest-styled-components';

it('renders correctly', () => {
  const { container } = render(<ModalOverlay />);

  expect(container).toMatchSnapshot();
});
