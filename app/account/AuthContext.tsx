"use client";
import { createContext, useContext, useState } from "react";
type authContextType = {
  account: {
    email: string;
    role: string;
  };
  login: (email: string) => void;
  logout: () => void;
};
const authContextDefaultValues: authContextType = {
  account: {
    email: "",
    role: "U",
  },
  login: (email: string) => {
    email;
  },
  logout: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [account, setAccount] = useState({ email: "", role: "" });
  console.log("email:", account.email);
  const login = (email: string) => {
    setAccount({ email, role: "U" });
  };

  const logout = () => {
    setAccount({ email: "", role: "" });
  };
  const value = {
    account,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
