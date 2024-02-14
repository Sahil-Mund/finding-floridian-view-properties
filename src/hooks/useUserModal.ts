import { UserModalContext } from "../providers/ModalProvider";
import { useContext, useState } from "react";

// Using useContext hooks, creating a custom hook "usePosts" to enable other components to able to access data from the context
export const useUserModal = () => {
  return useContext(UserModalContext);
};

export const useUserProvideModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [componentType, setComponentType] = useState<string>("");
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });


  const onClose = () => {
    setIsModalOpen(false);
    changeComponentType("");
  };

  const onOpen = () => {
    setIsModalOpen(true);
    // const button = event.target;

    // // Calculate position; this example positions the modal directly below the button
    // const buttonRect = button.getBoundingClientRect();
    // const top = buttonRect.top + buttonRect.height + window.scrollY;
    // const left = buttonRect.left + window.scrollX;

    // setModalPosition({ top, left });
    // setIsModalOpen(true);
  };

  const changeComponentType = (type: string) => {
    setComponentType(type);
  };

  return { isModalOpen, onClose, onOpen, componentType, changeComponentType };
};
