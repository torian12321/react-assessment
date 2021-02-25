import { useState, useEffect } from 'react';
import { useKeyPress } from '@hooks/useKeyPress';

/**
 * Hook returning <Modal /> controllers
 *
 */
const KEY_ESC = 27;

const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const escIsPressed = useKeyPress(KEY_ESC);
  const hiddeModal = () => setIsVisible(false);
  const showModal = () => setIsVisible(true);

  useEffect(() => {
    // Remove the Modal from the screen when ESC is pressed
    if (isVisible && escIsPressed) {
      hiddeModal();
    }
  }, [isVisible, escIsPressed]);

  return [
    {
      show: showModal,
      hidde: hiddeModal,
    },
    isVisible,
  ];
};

export { useModal };
