import { ReactNode, createContext } from "react";

import { useAuth, useAuthProvider } from "../hooks/useAuth";

// initializing some states for our context
const initialState = {
  userData: {
    name:'',
    email:'',
    phone_number:'',
    role:'',
    id:''
  },
  setUserData: (data : any) => {},
  setIsLoggedIn: (data : any) => {},
  setToken: () => {},
  isLoggedIn: false,

  token: "",
};

// Creating a post context to avoid prop Drilling
export const AuthContext = createContext(initialState);

// Creating a PostProvider component which will provide the context to it's child
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const data = useAuthProvider();

  return (
    <AuthContext.Provider value={data as any}>{children}</AuthContext.Provider>
  );
};
