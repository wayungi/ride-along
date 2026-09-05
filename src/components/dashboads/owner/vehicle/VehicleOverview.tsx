import type { Vehicle } from "../../../../types/types";

type VehicleOverviewProps = Pick<Vehicle, "id" | "image" | "model" | "status">;


const VehicleOverview = ({id, image, model, status}: VehicleOverviewProps) => {

  return (
    <div className="w-full flex items-center gap-6 px-5 py-4 border-b border-gray-200 hover:bg-gray-50 transition">

      {/* Car Image */}
      <img src={image} alt={model} className="w-16 h-12 object-cover rounded-lg"/>

      {/* Card ID */}
      <div className="w-24">
        {/* <p className="text-xs text-gray-500">Card ID</p> */}
        <p className="text-sm font-medium text-gray-900">
          {id}
        </p>
      </div>

      {/* model */}
      <div className="flex-1">
        {/* <p className="text-xs text-gray-500">name</p> */}
        <p className="text-sm font-medium text-gray-900">
          {model}
        </p>
      </div>

      {/* Status */}
      <div className="w-24">
        {/* <p className="text-xs text-gray-500">Status</p> */}

        <span
          className={`text-sm font-medium ${
            status === "AVAILABLE"
              ? "text-green-600"
              : status === "RENTED"
              ? "text-blue-600"
              : "text-red-600" // FAULTY
          }`}
        >
          {status}
        </span>
      </div>

    </div>
  );
};

export default VehicleOverview;