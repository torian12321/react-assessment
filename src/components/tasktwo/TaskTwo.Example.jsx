import React from 'react';
import { Button } from '@components/Button';
import { Modal, useModal } from '@components/Modal';
import { Loader } from '@components/Loader';
import { Content, Heading, Task } from '@components/styled-components/Task';

const Page = () => {
  const [actionsModal1, isVisible1] = useModal();
  const [actionsModal2, isVisible2] = useModal();
  const [actionsModal3, isVisible3] = useModal();

  return (
    <Task>
      <Heading>Task Two - Example</Heading>
      <Content>
        <Button label="Show modal 1" onClick={actionsModal1.show} />
        <Button label="Show modal 2" onClick={actionsModal2.show} />
        <Button label="Show modal 3" onClick={actionsModal3.show} />

        <Modal isVisible={isVisible1}>
          <Loader />
          Data is loading
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
          If you delete he Executive metrics report, you will also delete the associed history:
          <Modal.Options>
            <Button label="Delete All" onClick={actionsModal3.hidde} />
            <Button label="Cancel" onClick={actionsModal3.hidde} outline />
          </Modal.Options>
        </Modal>
      </Content>
    </Task>
  );
};

export default Page;
