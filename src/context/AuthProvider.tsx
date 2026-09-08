import { useState, type ReactNode, useMemo } from 'react';
import { loginRequest,  registerRequest } from '../services/authService';
import AuthContext from './AuthContext';
import {
  decodeToken,
  isTokenExpired,
  getStoredToken,
  storeToken,
  removeToken,
  hasPermission as checkPermission,
} from '../utils/jwt-utils';
import type { DecodedToken } from '../types/auth';

interface AuthProviderProps {
  children: ReactNode;
}
   
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(getStoredToken);

  const decodedToken = useMemo((): DecodedToken | null => {
    return token ? decodeToken(token) : null;
  }, [token]);

  const login = async (email: string, password: string) => {
    const response = await loginRequest(email, password);
    const newToken = response.returnObject.token
    storeToken(newToken);
    setToken(newToken);
  };

  const logout = () => {
    removeToken();
    setToken(null);
  };

  const hasPermission = (permission: string): boolean => {
    if(decodedToken) return checkPermission(decodedToken.permissions, permission);
    return false
  }

  const register = async (email: string, password: string, firstname: string, lastname: string) => {
    console.log("register called")
    await registerRequest(email, password, firstname, lastname);
    //const newToken = response.returnObject.token;
    //storeToken(newToken);
    //setToken(newToken);
  };


  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated: !!token && !isTokenExpired(token),
        login,
        logout,
        hasPermission,
        roleCode: decodedToken?.role_code || '',
        email: decodedToken?.email || '',
        domain: decodedToken?.domain || '',
        permissions: decodedToken?.permissions || [],
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
