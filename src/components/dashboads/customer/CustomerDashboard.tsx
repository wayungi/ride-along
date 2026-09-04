import { useState } from "react";
import RentalDetails from "./rental_details/RentalDetails";
import Transactions from "./transactions/Transactions";
import type { Rental } from "../../../types/types";

const rentals: Rental[] = [

    {
        "id": "1",
        vehicle: {id: "1", name: "benz", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b"},
        destination: "Kampala",
        destinationCoordinates: { lat: 0.3476, lng: 32.5825 },
        pickedAt: 1788521023901,
        returnedAt: 1788521023901,
        totalPrice: 400000
    },

    {
        "id": "2",
        vehicle: {id: "2", name: "benz", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2"},
        destination: "Jinja",
        destinationCoordinates: { lat: 0.4479, lng: 33.2026 },
        pickedAt: 1788521023901,
        returnedAt: 1788521023901,
        totalPrice: 400000
    },

    {
        "id": "3",
        vehicle: {id: "3", name: "benz", image: "https://images.unsplash.com/photo-1550355291-bbee04a92027"},
        destination: "Entebbe",
        destinationCoordinates: { lat: 0.0512, lng: 32.4637 },
        pickedAt: 1788521023901,
        returnedAt: 1788521023901,
        totalPrice: 400000
    },

    {
        "id": "4",
        vehicle: {id: "4", name: "benz", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf"},
        destination: "Mbarara",
        destinationCoordinates: { lat: -0.6072, lng: 30.6545 },
        pickedAt: 1788521023901,
        returnedAt: 1788521023901,
        totalPrice: 400000
    },

    {
        "id": "5",
        vehicle: {id: "5", name: "benz", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b"},
        destination: "Fort Portal",
        destinationCoordinates: { lat: 0.6710, lng: 30.2750 },
        pickedAt: 1788521023901,
        returnedAt: 1788521023901,
        totalPrice: 400000
    },

    {
        "id": "1",
        vehicle: {id: "1", name: "benz", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b"},
        destination: "Mbale",
        destinationCoordinates: { lat: 1.0806, lng: 34.1750 },
        pickedAt: 1788521023901,
        returnedAt: 1788521023901,
        totalPrice: 400000
    },

    {
        "id": "2",
        vehicle: {id: "2", name: "benz", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2"},
        destination: "Gulu",
        destinationCoordinates: { lat: 2.7746, lng: 32.2990 },
        pickedAt: 1788521023901,
        returnedAt: 1788521023901,
        totalPrice: 400000
    },

    {
        "id": "3",
        vehicle: {id: "3", name: "benz", image: "https://images.unsplash.com/photo-1550355291-bbee04a92027"},
        destination: "Masaka",
        destinationCoordinates: { lat: -0.3403, lng: 31.7340 },
        pickedAt: 1788521023901,
        returnedAt: 1788521023901,
        totalPrice: 400000
    },

    {
        "id": "4",
        vehicle: {id: "4", name: "benz", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf"},
        destination: "Kabale",
        destinationCoordinates: { lat: -1.2486, lng: 29.9899 },
        pickedAt: 1788521023901,
        returnedAt: 1788521023901,
        totalPrice: 400000
    },

    {
        "id": "5",
        vehicle: {id: "5", name: "benz", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b"},
        destination: "Kasese",
        destinationCoordinates: { lat: 0.1833, lng: 30.0833 },
        pickedAt: 1788521023901,
        returnedAt: 1788521023901,
        totalPrice: 400000
    }

 ]



const CustomerDashboard = () => {

  const [selectedRental, setSelectedRental] = useState<Rental>(rentals[0]);
  const [showAllTransactions, setShowAllTransactions] = useState(false);

  return (
    <div className="space-y-6 bg-gray-100 px-6 pb-6">
      <div className="h-16 flex flex-col justify-center px-4 border-b border-gray-200">
        <h1 className="text-lg font-bold text-gray-900 leading-tight">Car Owner Dashboard</h1>
        <p className="text-xs text-gray-500 leading-tight mt-0.5">View your rental history.</p>
      </div>

      <div className="">

        <div>

        </div>

        <div>
          <h2>My Vehicles</h2>


        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;