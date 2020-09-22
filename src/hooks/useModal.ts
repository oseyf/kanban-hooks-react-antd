import { useState } from 'react';

export const useItemModal = () => {
  const [itemModalIsShowing, setItemModalIsShowing] = useState(false);

  function toggleItemModal() {
    setItemModalIsShowing(!itemModalIsShowing);
  }

  return {
    itemModalIsShowing,
    toggleItemModal,
  }
};


export const useBoardModal = () => {
  const [boardModalIsShowing, setBoardModalIsShowing] = useState(false);

  function toggleBoardModal() {
    setBoardModalIsShowing(!boardModalIsShowing);
  }

  return {
    boardModalIsShowing,
    toggleBoardModal,
  }
};
