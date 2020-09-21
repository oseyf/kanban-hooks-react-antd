import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    debugger; setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
};

export default useModal;