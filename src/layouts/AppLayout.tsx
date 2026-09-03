import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'


const AppLayout = () => {
  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout