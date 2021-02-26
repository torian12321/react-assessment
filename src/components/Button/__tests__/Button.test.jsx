import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from '@components/Button';
import 'jest-styled-components';

it('renders correctly', () => {
  const { container } = render(<Button label="Submit" onClick={() => {}} />);

  expect(container).toMatchSnapshot();
});

it('Should render', () => {
  const testMessage = 'Submit button';
  const { container } = render(<Button label={testMessage} onClick={() => {}} />);
  const button = container.querySelector('button');

  expect(button).toHaveTextContent(testMessage);
  expect(button).not.toHaveAttribute('disabled');
});

it('Should NOT render when label & children are missed', () => {
  const { container } = render(<Button onClick={() => {}} />);
  const button = container.querySelector('button');

  expect(button).toBeNull();
  expect(container).toMatchSnapshot();
});

it('Should call function on click', () => {
  const onClick = jest.fn();
  const { container } = render(<Button label="Submit" onClick={onClick} />);
  const button = container.querySelector('button');

  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});

it('Should be disabled and non clickable', () => {
  const onClick = jest.fn();
  const { container } = render(<Button label="Submit" onClick={onClick} disabled />);
  const button = container.querySelector('button');

  expect(button).toHaveAttribute('disabled');
  expect(onClick).toHaveBeenCalledTimes(0);
});
