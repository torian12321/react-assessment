import React from 'react';
import { render } from '@testing-library/react';
import { ModalTitle } from '../Modal.Title';
import 'jest-styled-components';

it('renders correctly', () => {
  const { container } = render(<ModalTitle caption="Modal title" />);

  expect(container).toMatchSnapshot();
});

it('Should render', () => {
  const testTitle = 'Modal title';
  const { container } = render(<ModalTitle caption={testTitle} />);

  expect(container).toHaveTextContent(testTitle);
  expect(container).not.toBeNull();
});
