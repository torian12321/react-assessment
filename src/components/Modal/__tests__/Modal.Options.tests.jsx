import React from 'react';
import { render } from '@testing-library/react';
import { ModalOptions } from '../Modal.Options';
import 'jest-styled-components';

it('renders correctly', () => {
  const { container } = render(<ModalOptions />);

  expect(container).toMatchSnapshot();
});
