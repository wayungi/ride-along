import type { Vehicle } from "../../types/types"
import { useNavigate } from "react-router";

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {

  const navigate = useNavigate();
  const {
    name,
    type,
    fuelType,
    seats,
    pricePerDay,
    image,
    available,
  } = vehicle;

  const handleClick = () => navigate(`/vehicle/${vehicle.id}`)

  return (
    <div 
      onClick={handleClick}
      className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={image}
        alt={name}
        className="h-52 w-full object-cover"
      />

      <div className="p-5">
        <div className="mb-3 flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {name}
            </h2>

            <p className="text-sm text-gray-500">
              {type}
            </p>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              available
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {available ? "Available" : "Unavailable"}
          </span>
        </div>

        <div className="mb-5 flex gap-4 text-sm text-gray-600">
          <span>{fuelType}</span>

          <span>{seats} seats</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-gray-900">
              Ugx {pricePerDay}
            </span>

            <span className="text-sm text-gray-500">
              {" "}
              / day
            </span>
          </div>

          <button
            disabled={!available}
            className="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            Hire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;