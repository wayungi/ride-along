import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <NavLink to="/" className="text-2xl font-bold text-blue-600">Ride Along</NavLink>

        <div className="flex items-center gap-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive
                ? "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                : "text-gray-700 hover:text-blue-600"
            }
          >Home</NavLink>

          <NavLink 
            to="/login" 
            className={({ isActive }) => isActive
                ? "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                : "text-gray-700 hover:text-blue-600"
            }
          >Login</NavLink>

          <NavLink 
            to="/register"
            className={({ isActive }) => isActive
                ? "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                : "text-gray-700 hover:text-blue-600"
            }
          >Register</NavLink>
        </div>

      </div>
    </nav>
  )
}

export default Navbar