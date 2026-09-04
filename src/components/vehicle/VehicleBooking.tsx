import { useMemo, useState } from "react";
import type { VehicleDetails } from "../../types/types";

interface Destination {
  latitude: number;
  longitude: number;
}

interface VehicleBookingProps {
  vehicle: VehicleDetails;
}

const VehicleBooking = ({vehicle}: VehicleBookingProps) => {

  const [startDate, setStartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [destinations, setDestinations] = useState<Destination[]>([]);

  const numberOfDays = useMemo(() => {
    if (!startDate || !returnDate) {return 0; }

    const start = new Date(startDate);
    const end = new Date(returnDate);
    const difference = end.getTime() - start.getTime();
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    return days > 0 ? days : 0;
  }, [startDate, returnDate]);

  const rentalCost = numberOfDays * vehicle.pricePerDay;

  /* distance to be fully computed after integrating with maps */   
  const estimatedDistance = destinations.length > 0 ? 100 : 0;

  const fuelCost = estimatedDistance *vehicle.consumptionPerKm;

  const totalCost = rentalCost + fuelCost;

  return (
    <section className="mt-12 rounded-2xl bg-white p-6 shadow-md">
      <h2 className="text-2xl font-bold text-gray-900">
        Book This Vehicle
      </h2>

      <p className="mt-2 text-gray-500">
        Select your rental period and destinations.
      </p>

      {/* Dates */}

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Start Date
          </label>

          <input
            type="date"
            value={startDate}
            onChange={(e) =>
              setStartDate(e.target.value)
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Return Date
          </label>

          <input
            type="date"
            value={returnDate}
            onChange={(e) =>
              setReturnDate(e.target.value)
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>
      </div>

      {/* Map */}

      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Destinations
        </label>

        <div className="flex h-[350px] items-center justify-center rounded-xl bg-gray-200">
          <div className="text-center text-gray-500">
            <p className="font-medium">
              Interactive Map
            </p>

            <p className="mt-1 text-sm">
              Click on the map to add destinations
            </p>
          </div>
        </div>
      </div>

      {/* Selected destinations */}
      {destinations.length > 0 && (
        <div className="mt-5">
          <h3 className="font-semibold text-gray-900">
            Selected Destinations
          </h3>

          <div className="mt-3 space-y-2">
            {destinations.map(
              (destination, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-gray-50 p-3 text-sm"
                >
                  Destination {index + 1}:{" "}
                  {destination.latitude},{" "}
                  {destination.longitude}
                </div>
              )
            )}
          </div>
        </div>
      )}

      {/* Cost */}
      <div className="mt-8 rounded-xl bg-blue-50 p-6">
        <h3 className="text-lg font-bold text-gray-900">
          Estimated Cost
        </h3>

        <div className="mt-4 space-y-3 text-sm">
          <div className="flex justify-between">
            <span>Rental</span>

            <span>
              Shs {rentalCost.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Estimated fuel</span>

            <span>
              Shs {fuelCost.toFixed(2)}
            </span>
          </div>

          <div className="border-t pt-3">
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>

              <span className="text-blue-700">
                Shs {totalCost.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Book */}

      <button
        disabled={!startDate || !returnDate || startDate >= returnDate || numberOfDays <= 0 || !vehicle.available }
        className="mt-6 w-full rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        Book Vehicle
      </button>
    </section>
  );
};

export default VehicleBooking;