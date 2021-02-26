import styled from 'styled-components';

export default styled.button`
  padding: 12px 16px;
  min-width: 100px;
  color: #3970a3;
  font-weight: bold;
  background: ${(props) => (props.outline ? 'white' : '#e8f4ff')};
  border: 1px solid ${(props) => (props.outline ? 'currentColor' : '#e8f4ff')};
  border-radius: 8px;
  cursor: pointer;\
  transition: background .8s;
  outline: none;

  &:hover {
    background: #d1e7fb;
  }

  ${(props) => props.disabled && `
    &,
    &:hover {
      background: #eee;
      border-color: #eee;
      color: #aaa;
      cursor: not-allowed;
    }
  `}
`;
