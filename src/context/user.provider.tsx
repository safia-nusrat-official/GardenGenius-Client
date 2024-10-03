import React, { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { TUser } from "../types/user.interface";
import { getUser } from "../services/auth";

const UserContext = createContext<IUserContextProps | null>(null);

interface IUserContextProps {
  user: TUser | null;
  setUser: React.Dispatch<React.SetStateAction<TUser | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TUser | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGetUser = async () => {
    const user = (await getUser()) as TUser;
    setUser(user);
    setLoading(false)
  };

  useEffect(() => {
    handleGetUser();
  }, [loading]);

  return (
    <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("You are using this context out of boundary");
  }
  return context;
};
export default UserProvider;
