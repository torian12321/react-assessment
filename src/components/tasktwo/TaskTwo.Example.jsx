import React from 'react';
import { Button } from '@components/Button';
import { Modal, useModal } from '@components/Modal';
import { Loader } from '@components/Loader';
import { Content, Heading, Task } from '@components/styled-components/Task';
import Modal3Content from './Modal3Content';
import { BtnList, ModalContent1 } from './TaskTwo.styles';

const Page = () => {
  const [actionsModal1, isVisible1] = useModal();
  const [actionsModal2, isVisible2] = useModal();
  const [actionsModal3, isVisible3] = useModal();

  const handleOpenModal1 = () => {
    actionsModal1.show();
    // Mock loading time
    setTimeout(actionsModal1.hidde, 3000);
  };

  return (
    <Task>
      <Heading>Task Two - Example</Heading>
      <Content>
        <BtnList>
          <Button label="Show modal 1" onClick={handleOpenModal1} />
          <Button label="Show modal 2" onClick={actionsModal2.show} />
          <Button label="Show modal 3" onClick={actionsModal3.show} />
        </BtnList>
        <Modal isVisible={isVisible1}>
          <ModalContent1>
            <Loader />
            Data is loading
          </ModalContent1>
        </Modal>

        <Modal
          isVisible={isVisible2}
          title="Are you sure you want to delete all of your files?"
        >
          This acction cannot be undone.
          <Modal.Options>
            <Button label="Yes" onClick={actionsModal2.hidde} />
            <Button label="No" onClick={actionsModal2.hidde} outline />
          </Modal.Options>
        </Modal>

        <Modal
          isVisible={isVisible3}
          title="Are you sure you want to delete this report and its history?"
        >
          <Modal3Content actions={actionsModal3} />
        </Modal>
      </Content>
    </Task>
  );
};

export default Page;
