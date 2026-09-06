import {
  FaCar,
  FaCheck,
  FaTimes,
  FaUser,
  FaCalendarAlt,
  FaGasPump ,
} from "react-icons/fa";
  import type { VehicleRegistrationRequest } from "../types/types";

// interface VehicleRegistrationRequest {
//   id: string;
//   cardId: string;

//   name: string;
//   model: string;
//   type: string;
//   fuelType: "Electric" | "Hybrid" | "Petrol" | "Diesel";
//   seats: number;
//   image: string;
//   owner: {
//     username: string;
//   };
//   insuranceExpiry: string;
//   submittedAt: string;
// }

interface VehicleRegistrationRequestsProps {
  vehicles: VehicleRegistrationRequest[];
  onApprove: (vehicleId: string) => void;
  onReject: (vehicleId: string) => void;
}

const VehicleRegistration = ( /*{ vehicles, onApprove, onReject, }: VehicleRegistrationRequestsProps */) => {

  const vehicles: VehicleRegistrationRequest[] = []

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Vehicle Registration Requests
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Review newly registered vehicles and approve or reject them.
            </p>
          </div>

          {/* Pending count */}
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-3">
            <FaCar className="text-blue-600" />

            <div>
              <p className="text-xs text-gray-500">
                Pending Requests
              </p>

              <p className="text-lg font-bold text-gray-900">
                {/* {vehicles.length} */}
              </p>
            </div>
          </div>

        </div>
      </div>


      {/* Requests */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">

        {/* Table Header */}
        <div className="hidden lg:grid grid-cols-[2fr_1.5fr_1fr_1fr_1fr_180px] gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200">

          <p className="text-xs font-semibold text-gray-500 uppercase">
            Vehicle
          </p>

          <p className="text-xs font-semibold text-gray-500 uppercase">
            Owner
          </p>

          <p className="text-xs font-semibold text-gray-500 uppercase">
            Type
          </p>

          <p className="text-xs font-semibold text-gray-500 uppercase">
            Fuel
          </p>

          <p className="text-xs font-semibold text-gray-500 uppercase">
            Seats
          </p>

          <p className="text-xs font-semibold text-gray-500 uppercase text-right">
            Actions
          </p>

        </div>


        {/* Empty state */}
        {vehicles.length === 0 && (
          <div className="py-20 text-center">

            <FaCar className="mx-auto text-4xl text-gray-300 mb-4" />

            <h2 className="text-lg font-semibold text-gray-700">
              No pending registrations
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              There are currently no vehicles waiting for approval.
            </p>

          </div>
        )}


        {/* Vehicle requests */}
        {vehicles.map((vehicle) => (

          <div
            key={vehicle.id}
            className="grid grid-cols-1 lg:grid-cols-[2fr_1.5fr_1fr_1fr_1fr_180px] gap-4 items-center px-6 py-5 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition"
          >

            {/* Vehicle */}
            <div className="flex items-center gap-4">

              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-20 h-14 object-cover rounded-lg border border-gray-200"
              />

              <div>
                <h3 className="font-semibold text-gray-900">
                  {vehicle.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {vehicle.model}
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  ID: {vehicle.cardId}
                </p>
              </div>

            </div>


            {/* Owner */}
            <div className="flex items-center gap-2">

              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <FaUser className="text-gray-500 text-sm" />
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  Owner
                </p>

                <p className="text-sm font-medium text-gray-800">
                  {vehicle.owner.username}
                </p>
              </div>

            </div>


            {/* Type */}
            <div>
              <p className="text-xs text-gray-400 lg:hidden">
                Type
              </p>

              <p className="text-sm font-medium text-gray-700">
                {vehicle.type}
              </p>
            </div>


            {/* Fuel */}
            <div className="flex items-center gap-2">

              <FaGasPump className="text-gray-400 text-sm" />

              <span className="text-sm text-gray-700">
                {vehicle.fuelType}
              </span>

            </div>


            {/* Seats */}
            <div>
              <p className="text-xs text-gray-400 lg:hidden">
                Seats
              </p>

              <p className="text-sm text-gray-700">
                {vehicle.seats} seats
              </p>
            </div>


            {/* Actions */}
            <div className="flex items-center justify-end gap-2">

              {/* Reject */}
              <button
                type="button"
                //onClick={() => onReject(vehicle.id)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-red-200 text-red-600 text-sm font-medium hover:bg-red-50 transition"
              >
                <FaTimes />

                <span>
                  Reject
                </span>
              </button>


              {/* Approve */}
              <button
                type="button"
                //onClick={() => onApprove(vehicle.id)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition"
              >
                <FaCheck />

                <span>
                  Approve
                </span>
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default VehicleRegistration;