import RentalMap from "../../../map/RentalMap";
import type { Rental } from "../../../../types/types";

interface RentalDetailsProps {
  rental: Rental;
}

const RentalDetails = ({ rental }: RentalDetailsProps) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">

      {/* Map */}
      <div className="h-72 bg-gray-100 relative flex items-center justify-center">
        <RentalMap
          latitude = {rental.destinationCoordinates.lat}
          longitude = {rental.destinationCoordinates.lng}
          destination = {rental.destination}
         />
      </div>

      {/* Vehicle information */}
      <div className="p-5">

        <div className="flex items-center gap-4">
          <img
            src={rental.vehicle.image}
            alt={rental.vehicle.name}
            className="w-28 h-20 object-cover rounded-xl"
          />

          <div>
            <h3 className="text-lg font-semibold">
              {rental.vehicle.name}
            </h3>

            <p className="text-sm text-gray-500">
              {rental.destination}
            </p>
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-4 mt-6">

          <div>
            <p className="text-sm text-gray-500">
              Picked up
            </p>

            <p className="font-medium">
              {new Date(rental.pickedAt).toLocaleString()}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Returned
            </p>

            <p className="font-medium">
              {new Date(rental.returnedAt).toLocaleString()}
            </p>
          </div>

        </div>

        {/* Total */}
        <div className="border-t border-gray-200 mt-6 pt-5 flex justify-between items-center">

          <span className="text-gray-500">
            Total rental price
          </span>

          <span className="text-xl font-bold">
            UGX {rental.totalPrice.toLocaleString()}
          </span>

        </div>

      </div>
    </div>
  );
};

export default RentalDetails;