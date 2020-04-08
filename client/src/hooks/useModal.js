import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggleModal(isOpen) {
    console.log(isShowing);
    setIsShowing(isOpen);
  } 

  return {
    isShowing,
    toggleModal
  }
}

export default useModal;