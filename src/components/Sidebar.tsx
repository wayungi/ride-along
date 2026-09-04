
import { Link, useLocation } from "react-router";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">

      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <Link
          to="/dashboard"
          className="text-2xl font-bold text-blue-600"
        >
          Ride Along
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">

        {/* Dashboard */}
        <Link
          to="/dashboard"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
            ${
              isActive("/dashboard")
                ? "bg-blue-50 text-blue-600"
                : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
            }
          `}
        >
          <span>Dashboard</span>
        </Link>

        {/* Rides */}
        <Link
          to="/rides"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
            ${
              isActive("/rides")
                ? "bg-blue-50 text-blue-600"
                : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
            }
          `}
        >
          <span>Rides</span>
        </Link>

        {/* Profile */}
        <Link
          to="/profile"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
            ${
              isActive("/profile")
                ? "bg-blue-50 text-blue-600"
                : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
            }
          `}
        >
          <span>Profile</span>
        </Link>

      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-200">

        <button
          type="button"
          className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition"
        >
          Logout
        </button>

      </div>

    </aside>
  );
};

export default Sidebar;
