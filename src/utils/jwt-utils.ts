import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  email: string;
  permissions: string [];
  domain: "CLIENT_SIDE" | "BACK_OFFICE";
  role_code:  "CUSTOMER" | "ADMIN" | "OWNER";
  iat: number;
  exp: number;
}



export const decodeToken = (token: string): DecodedToken | null => {
  try {
    const data = jwtDecode<DecodedToken>(token);
    return {
      permissions: data.permissions || [],
      role_code: data.role_code || '',
      domain: data.domain || '',
      email: data.email || '',
      iat: data.iat,
      exp: data.exp
    };
  } catch (error) {
    console.error('Failed to decode token:', error);
    return null;
  }
};


export const isTokenExpired = (token: string): boolean => {
  try {
    const data = jwtDecode<DecodedToken>(token);
    if (!data.exp) return true;
    return data.exp * 1000 < Date.now();
  } catch {
    return true;
  }
};


export const getAuthDataFromToken = (token: string | null): DecodedToken | null => {
  if (!token) return null;
  if (isTokenExpired(token)) {
    return null;
  }
  return decodeToken(token);
};


export const getStoredToken = (): string | null => {
  const token = localStorage.getItem('token');
  if (token && isTokenExpired(token)) {
    localStorage.removeItem('token');
    return null;
  }
  return token;
};


export const storeToken = (token: string): void => {
  localStorage.setItem('token', token);
};


export const removeToken = (): void => {
  localStorage.removeItem('token');
};


export const hasPermission = (token: string | null, permission: string): boolean => {
  if (!token) return false;
  const authData = decodeToken(token);
  return authData?.permissions?.includes(permission) ?? false;
};