import type { Vehicle } from "../../../types/types";

interface VehicleOwnerInfoProps {
  vehicle: Vehicle;
  username: string;
  tripCost: number;
  status: "Available" | "Rented" | "Faulty";
  cardId: string;
}

const VehicleOwnerInfo = ({vehicle, username, tripCost, status, cardId}: VehicleOwnerInfoProps) => {

  return (
    <div className="w-full flex items-center gap-6 px-5 py-4 border-b border-gray-200 hover:bg-gray-50 transition">

      {/* Car Image */}
      <img src={vehicle.image} alt={vehicle.name} className="w-16 h-12 object-cover rounded-lg"/>

      {/* Card ID */}
      <div className="w-24">
        <p className="text-xs text-gray-500">Card ID</p>
        <p className="text-sm font-medium text-gray-900">
          {cardId}
        </p>
      </div>

      {/* Username */}
      <div className="flex-1">
        <p className="text-xs text-gray-500">Borrowed By</p>
        <p className="text-sm font-medium text-gray-900">
          {username}
        </p>
      </div>

      {/* Trip Cost */}
      <div className="w-32">
        <p className="text-xs text-gray-500">Trip Cost</p>
        <p className="text-sm font-medium text-gray-900">
          UGX {tripCost.toLocaleString()}
        </p>
      </div>

      {/* Status */}
      <div className="w-24">
        <p className="text-xs text-gray-500">Status</p>

        <span
          className={`text-sm font-medium ${
            status === "Available"
              ? "text-green-600"
              : status === "Rented"
              ? "text-blue-600"
              : "text-red-600"
          }`}
        >
          {status}
        </span>
      </div>

    </div>
  );
};

export default VehicleOwnerInfo;