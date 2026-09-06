import {
  FaPlus,
  FaHistory,
  FaTools,
  FaMoneyBillWave,
  FaCalendarCheck,
  FaCheckCircle
} from "react-icons/fa";
import { NavLink } from "react-router";

const ActionsBar = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <div className="flex items-center gap-3 flex-wrap">

        {/* Add Vehicle */}
        <NavLink
          to="/vehicles/new"
          className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
        >
          <FaPlus />
          <span>Add Vehicle</span>
        </NavLink>

        {/* Manage Vehicles */}
        <NavLink
          to="/vehicles/approve"
          className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
        >
          <FaCheckCircle />
          <span>Approve Registrations</span>
        </NavLink>


        
         {/* Rental History */}
        <NavLink
          to="/vehicles/rentals"
          className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
        >
          <FaHistory />
          <span>Rental History</span>
        </NavLink>

        {/* Maintenance */}
        <NavLink
          to="/vehicles/maintenance"
          className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
        >
          <FaTools />
          <span>Maintenance</span>
        </NavLink>

        {/* Earnings */}
        <NavLink
          to="/vehicles/earnings"
          className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
        >
          <FaMoneyBillWave />
          <span>Earnings</span>
        </NavLink>

        {/* Availability */}
        <NavLink
          to="/vehicles/availability"
          className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
        >
          <FaCalendarCheck />
          <span>Availability</span>
        </NavLink>

      </div>
    </div>
  );
};

export default ActionsBar;