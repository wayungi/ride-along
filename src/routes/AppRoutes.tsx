import { Routes, Route } from 'react-router'
import PublicLayout from '../layouts/PublicLayout'
import AppLayout from '../layouts/AppLayout'
import Home from '../pages/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import CarDetails from '../pages/CarDetails'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'


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
        <Route path="/rides" element={<CarDetails />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

    </Routes>
  )
}

export default AppRoutes