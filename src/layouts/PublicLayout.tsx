import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div className="h-screen bg-gray-50">
      <Navbar />
      <main className="h-[calc(100vh-4rem)]">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout