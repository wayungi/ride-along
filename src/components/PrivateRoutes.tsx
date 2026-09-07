import { Navigate, Outlet, useLocation } from 'react-router';
import useAuth from '../context/useAuth'

interface PrivateRouteProps {
  redirectTo?: string;
  requiredPermissions?: string[];
  requiredRole?: string;
}

const PrivateRoute = ({redirectTo = '/login', requiredPermissions = [], requiredRole }: PrivateRouteProps) => {



  const { isAuthenticated, hasPermission, roleCode } = useAuth();
  const location = useLocation();




    // 🔍 DEBUG: Log everything
  console.log('🛡️ PrivateRoute Debug:');
  console.log('  - isAuthenticated:', isAuthenticated);
  //console.log('  - token:', token ? '✅ exists' : '❌ null');
  console.log('  - roleCode:', roleCode);
  console.log('  - requiredRole:', requiredRole);
  console.log('  - requiredPermissions:', requiredPermissions);
  console.log('  - current path:', location.pathname);


  if (!isAuthenticated) return <Navigate to={redirectTo} state={{ from: location }} replace />;
  
  if (requiredRole && roleCode !== requiredRole) return <Navigate to="/unauthorized" replace />;
  
  if (requiredPermissions.length > 0) {
    const hasAllPermissions = requiredPermissions.every(hasPermission);
    if (!hasAllPermissions) return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;