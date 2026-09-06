import { useState, type ReactNode } from "react";
import { loginRequest } from "../services/authService";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps { children: ReactNode;}

export const AuthProvider = ({children }: AuthProviderProps) => {

  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

  const login = async (email: string, password: string): Promise<void> => {
    const response = await loginRequest(email, password);
    const receivedToken = response.responseObject.token;
    localStorage.setItem("token", receivedToken);
    setToken(receivedToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated: !!token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
