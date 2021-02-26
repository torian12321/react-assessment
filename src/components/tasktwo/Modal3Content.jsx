import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '@components/Button';
import { Modal } from '@components/Modal';

const keyWord = 'Delete';

const Input = styled.input`
  display: block;
  margin: 4px 0;
`;
const OptionsList = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: 1px solid #aaa;
  padding: 0;
  margin: 28px 0 16px;
  max-height: 100px;
  overflow-y: scroll;
  color: #3970a3;
  font-size: 14px;
  line-height: 1.4;
`;
const Option = styled.span`
  padding: 0 8px;

  transition: background .6s;
  &:hover {
    background: #d1e7fb;
  }
`;

const ModalContent = ({ actions = {} }) => {
  const [canDelete, setCanDelete] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setCanDelete(!(filter.toLowerCase() === keyWord.toLowerCase()));
  }, [filter]);

  return (
    <>
      If you delete he
      <strong> Executive metrics </strong>
      report, you will also delete the associed history:
      <OptionsList>
        <Option>January 2020</Option>
        <Option>February 2020</Option>
        <Option>March 2020</Option>
        <Option>April 2020</Option>
        <Option>May 2020</Option>
        <Option>June 2020</Option>
        <Option>July 2020</Option>
      </OptionsList>

      {`Please type the word '${keyWord}' to remove the`}
      <strong> Executive metrics </strong>
      report and its associated history

      <Input
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
        placeholder=""
      />
      <Modal.Options>
        <Button label="Delete All" onClick={actions.hidde} disabled={canDelete} />
        <Button label="Cancel" onClick={actions.hidde} outline />
      </Modal.Options>
    </>
  );
};

ModalContent.propTypes = {
  actions: PropTypes.object,
};
ModalContent.defaultProps = {
  actions: {},
};

export default ModalContent;
