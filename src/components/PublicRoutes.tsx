import { Navigate, Outlet } from 'react-router';
import useAuth from '../context/useAuth';

interface PublicRouteProps {
  redirectTo?: string;
}

const PublicRoute = ({ redirectTo = '/dashboard' }: PublicRouteProps) => {
  const { isAuthenticated } = useAuth()
  if (isAuthenticated) return <Navigate to={redirectTo} replace />
  return <Outlet />;
};

export default PublicRoute;