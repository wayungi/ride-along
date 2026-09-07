import { useState, type ReactNode, useMemo } from 'react';
import { loginRequest } from '../services/authService';
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



//** MOCK DATE TO BE DELETED  */
const MOCK_RESPONSE = {
  "returnObject": {
      "token": "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQ3VzdG9tZXIiLCJwZXJtaXNzaW9ucyI6WyJDQU5fQk9PS19WRUhJQ0xFIiwiQ0FOX01BTkFHRV9PV05fQk9PS0lOR1MiLCJDQU5fU1VCTUlUX0xJQ0VOQ0UiLCJDQU5fTEVBVkVfUkVWSUVXIl0sImRvbWFpbiI6IkNMSUVOVF9TSURFIiwicm9sZV9jb2RlIjoiQ1VTVE9NRVIiLCJpYXQiOjE3ODg3NzU1NjksImV4cCI6MTc4ODgxODc2OX0.XpXxo2Z5N50RLePOybgoEx5UnpDhWJDmpYT2hgEH_DI"
  },
  "returnCode": 0,
  "returnMessage": "Welcome back null"
}
   

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(getStoredToken);

  const decodedToken = useMemo((): DecodedToken | null => {
    return token ? decodeToken(token) : null;
  }, [token]);

  const login = async (email: string, password: string) => {

    /* UNCOMMENT THIS WHEN BACK IN OFFICE  */
    //const response = await loginRequest(email, password);

    const response =  MOCK_RESPONSE

    const newToken = response.returnObject.token;
    storeToken(newToken); // in localstorage
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
