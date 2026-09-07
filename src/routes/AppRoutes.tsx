import { Routes, Route } from 'react-router'
import PublicLayout from '../layouts/PublicLayout'
import AppLayout from '../layouts/AppLayout'
import Home from '../pages/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import VehicleProfile from '../pages/VehicleProfile'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import AddVehicle from '../pages/AddVehicle'
import ApproveVehicle from "../pages/ApproveVehicle"
import SearchVehicle from '../pages/SearchVehicle'
import NotFoundPage from '../pages/NotFound';
import PrivateRoute from '../components/PrivateRoutes'
import PublicRoute from '../components/PublicRoutes'
//import ForgotPassword from '../pages/ForgotPassword'



const AppRoutes = () => {
  return (
    <Routes>

      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />} />

        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />} />
          {/* <Route path="/password" element={<ForgotPassword />} /> */}
        </Route>
      </Route>

      <Route element={<PrivateRoute/>}>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vehicle/:id" element={<VehicleProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/vehicles/new" element={<AddVehicle  />} />
          <Route path="/vehicles/approve" element={<ApproveVehicle/>} />
          <Route path="/search" element={<SearchVehicle />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes