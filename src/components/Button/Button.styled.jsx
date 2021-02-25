import styled from 'styled-components';

export default styled.button`
  padding: 8px 16px;
  min-width: 80px;
  color: #3970a3;
  background: ${(props) => (props.outline ? 'white' : '#e8f4ff')};
  border: 1px solid ${(props) => (props.outline ? 'currentColor' : '#e8f4ff')};
  border-radius: 8px;
  cursor: pointer;\
  transition: background .8s;
  outline: none;

  &:hover {
    background: #d1e7fb;
  }
`;
