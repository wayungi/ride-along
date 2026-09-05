import { useState } from "react";
import VehicleList from "../components/vehicle/VehicleList";
import type { Vehicle } from "../types/types"
const vehicles: Vehicle[] = [
  {
    id: 1,
    name: "Toyota RAV4",
    type: "SUV",
    fuelType: "Petrol",
    seats: 5,
    pricePerDay: 100000,
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
    available: true,
  },
  {
    id: 2,
    name: "Tesla Model 3",
    type: "Sedan",
    fuelType: "Electric",
    seats: 5,
    pricePerDay: 80000,
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89",
    available: true,
  },
  {
    id: 3,
    name: "Toyota Land Cruiser",
    type: "SUV",
    fuelType: "Diesel",
    seats: 7,
    pricePerDay: 90000,
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf",
    available: true,
  },
  {
    id: 4,
    name: "Honda Civic",
    type: "Sedan",
    fuelType: "Petrol",
    seats: 5,
    pricePerDay: 40000,
    image:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027",
    available: false,
  },
  {
    id: 5,
    name: "Toyota Prius",
    type: "Hatchback",
    fuelType: "Hybrid",
    seats: 5,
    pricePerDay: 50000,
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753",
    available: true,
  },
  {
    id: 6,
    name: "Mercedes Benz C-Class",
    type: "Luxury",
    fuelType: "Petrol",
    seats: 5,
    pricePerDay: 100000,
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
    available: true,
  },
];

const Home = () => {
  const [search, setSearch] = useState("");

  const filteredVehicles = vehicles.filter((vehicle) => {
    const searchTerm = search.toLowerCase();

    return (
      vehicle.name.toLowerCase().includes(searchTerm) ||
      vehicle.type.toLowerCase().includes(searchTerm) ||
      vehicle.fuelType.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <main className="min-h-screen bg-gray-50">
     
      <section className="bg-blue-800 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-200">Ride Along</p>
            <h1 className="text-4xl font-bold md:text-5xl">Find the perfect vehicle for your next journey.</h1>
            <p className="mt-5 text-lg text-blue-100">Browse available vehicles and find one that fits your trip.</p>
          </div>

          <div className="mt-8 max-w-2xl">
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search Toyota, SUV, Electric..."
              className="w-full rounded-xl bg-white px-5 py-4 text-gray-900 outline-none placeholder:text-gray-400"
            />
          </div>
        </div>
      </section>

      {/* Vehicles */}

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Available Vehicles
              </h2>

              <p className="mt-1 text-gray-500">
                {filteredVehicles.length} vehicles found
              </p>
            </div>
          </div>

          <VehicleList vehicles={filteredVehicles} />
        </div>
      </section>
    </main>
  );
};

export default Home;