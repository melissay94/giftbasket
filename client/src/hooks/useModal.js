import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggleModal(isOpen) {
    setIsShowing(isOpen);
  }

  return {
    isShowing,
    toggleModal,
  };
};

export default useModal;
