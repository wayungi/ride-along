import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link to="/" className="text-2xl font-bold text-blue-600">Ride Along</Link>

        <div className="flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600" >Home</Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
          <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Register</Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar