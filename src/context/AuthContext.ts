import { createContext } from 'react';

export interface AuthContextType {
  token: string | null;
  permissions: string[];
  roleCode: string;
  domain: string;
  email: string;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  hasPermission: (permission: string) => boolean;
  register: (email: string, password: string, firstname: string, lastname: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;


