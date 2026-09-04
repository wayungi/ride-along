import VehicleCard from "./VehicleCard";
import type { Vehicle } from "../types/types";

interface VehicleListProps {
  vehicles: Vehicle[];
}

const VehicleList = ({ vehicles }: VehicleListProps) => {
  if (vehicles.length === 0) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-xl font-semibold text-gray-700">
          No vehicles found
        </h2>

        <p className="mt-2 text-gray-500">
          Try searching for another vehicle.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {vehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle.id}
          vehicle={vehicle}
        />
      ))}
    </div>
  );
};

export default VehicleList;