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


const AppRoutes = () => {
  return (
    <Routes>

      {/*  public routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />} />
      </Route>

      {/* authenticated routes */}
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vehicle/:id" element={<VehicleProfile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/vehicles/new" element={<AddVehicle  />} />
         <Route path="/vehicles/approve" element={<ApproveVehicle/>} />
         <Route path="/search" element={<SearchVehicle />} />
      </Route>

    </Routes>
  )
}

export default AppRoutes