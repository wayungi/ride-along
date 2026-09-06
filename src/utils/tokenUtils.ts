import { jwtDecode } from 'jwt-decode';

export interface DecodedToken {
  messageCode: string;
  data: {
    userId: string;
    email: string;
    role: string;
    permissions: string[];
    timestamp: string;
  };
  exp: number;
  iat: number;
}

export const decodeToken = (token: string): DecodedToken | null => {
  try {
    return jwtDecode<DecodedToken>(token);
  } catch (error) {
    console.error('Failed to decode token:', error);
    return null;
  }
};

export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    const currentTime = Date.now() / 1000; // Convert to seconds
    return decoded.exp < currentTime;
  } catch (error) {
    console.error('Failed to check token expiration:', error);
    return true;
  }
};

export const getPermissionsFromToken = (token: string): string[] => {
  const decoded = decodeToken(token);
  return decoded?.data?.permissions || [];
};

export const getRoleFromToken = (token: string): string => {
  const decoded = decodeToken(token);
  return decoded?.data?.role || '';
};

export const getUserIdFromToken = (token: string): string => {
  const decoded = decodeToken(token);
  return decoded?.data?.userId || '';
};

export const getUserEmailFromToken = (token: string): string => {
  const decoded = decodeToken(token);
  return decoded?.data?.email || '';
};

export const isTokenValid = (token: string | null): boolean => {
  if (!token) return false;
  return !isTokenExpired(token);
};