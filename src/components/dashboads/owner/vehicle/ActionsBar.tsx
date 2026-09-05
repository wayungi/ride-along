import {
  FaPlus,
  FaCar,
  FaHistory,
  FaTools,
  FaMoneyBillWave,
  FaCalendarCheck,
  FaCheckCircle
} from "react-icons/fa";

const ActionsBar = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <div className="flex items-center gap-3 flex-wrap">

        {/* Add Vehicle */}
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
        >
          <FaPlus />
          <span>Add Vehicle</span>
        </button>

        {/* Manage Vehicles */}
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
        >
          <FaCheckCircle />
          <span>Approve Registrations</span>
        </button>

        {/* Rental History */}
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
        >
          <FaHistory />
          <span>Rental History</span>
        </button>

        {/* Maintenance */}
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
        >
          <FaTools />
          <span>Maintenance</span>
        </button>

        {/* Earnings */}
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
        >
          <FaMoneyBillWave />
          <span>Earnings</span>
        </button>

        {/* Availability */}
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
        >
          <FaCalendarCheck />
          <span>Availability</span>
        </button>

      </div>
    </div>
  );
};

export default ActionsBar;