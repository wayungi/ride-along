import { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  FaHome,
  FaCar,
  FaPlus,
  FaUser,
  FaSignOutAlt,
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaCheck,
} from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <aside
      className={`h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300
        ${isCollapsed ? "w-20" : "w-64"}
      `}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
        {!isCollapsed && (
          <Link
            to="/dashboard"
            className="text-2xl font-bold text-blue-600"
          >
            Ride Along
          </Link>
        )}

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-2">

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
          <FaHome className="text-lg min-w-[20px]" />

          {!isCollapsed && <span>Dashboard</span>}
        </Link>

        <Link
          to="/search"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
            ${
              isActive("/search")
                ? "bg-blue-50 text-blue-600"
                : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
            }
          `}
        >
          <FaSearch className="text-lg min-w-[20px]" />

          {!isCollapsed && (
            <span>Search</span>
          )}
        </Link>

        <Link
          to="/vehicle/1"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
            ${
              isActive("/vehicle/1")
                ? "bg-blue-50 text-blue-600"
                : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
            }
          `}
        >
          <FaCar className="text-lg min-w-[20px]" />

          {!isCollapsed && <span>Vehicle Profile</span>}
        </Link>

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
          <FaUser className="text-lg min-w-[20px]" />

          {!isCollapsed && <span>Profile</span>}
        </Link>

        <Link
          to="/vehicles/new"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
            ${
              isActive("/vehicles/new")
                ? "bg-blue-50 text-blue-600"
                : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
            }
          `}
        >
          <FaPlus className="text-lg min-w-[20px]"/>
          {!isCollapsed && <span>Add Vehicle</span>}
        </Link>

        <Link
          to="/vehicles/approve"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
            ${
              isActive("/vehicles/approve")
                ? "bg-blue-50 text-blue-600"
                : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
            }
          `}
        >
          <FaCheck className="text-lg min-w-[20px]"/>
          {!isCollapsed && <span>Approve Veichle</span>}
        </Link>
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t border-gray-200">
        <button
          type="button"
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition"
        >
          <FaSignOutAlt className="text-lg min-w-[20px]" />

          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;