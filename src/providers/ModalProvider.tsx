import { ReactNode, createContext } from "react";

import { useUserProvideModal } from "../hooks/useUserModal";

// initializing some states for our context
const initialState = {
  isModalOpen: false,
  onClose: () => {},
  onOpen: () => {},
  changeComponentType: (type: string) => {},
  componentType: ""
};

// Creating a post context to avoid prop Drilling
export const UserModalContext = createContext(initialState);

// Creating a PostProvider component which will provide the context to it's child
export const UserModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const data = useUserProvideModal();


  return (
    <UserModalContext.Provider value={data}>
      {children}
    </UserModalContext.Provider>
  );
};

