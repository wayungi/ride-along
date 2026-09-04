import { useState } from "react";
import RentalDetails from "./rental_details/RentalDetails";
import Transactions from "./transactions/Transactions";
import type { Rental } from "../../../types/types";

const rentals: Rental[] = [

    {
        "id": "1",
        vehicle: {id: "1", name: "benz", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b"},
        destination: "Jinja",
        destinationCoordinates: {lat: 32.1,  lng: 0.16},
        pickedAt: 1788521023901,
        returnedAt: 1788521023901,
        totalPrice: 400000
    },

    {
        "id": "2",
        vehicle: {id: "2", name: "benz", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2"},
        destination: "Jinja",
        destinationCoordinates: {lat: 32.1,  lng: 0.16},
        pickedAt: 1788521023901,
        returnedAt: 1788521023901,
        totalPrice: 400000
    },

    {
        "id": "3",
        vehicle: {id: "3", name: "benz", image: "https://images.unsplash.com/photo-1550355291-bbee04a92027"},
        destination: "Jinja",
        destinationCoordinates: {lat: 32.1,  lng: 0.16},
        pickedAt: 1788521023901,
        returnedAt: 1788521023901,
        totalPrice: 400000
    },

    {
        "id": "4",
        vehicle: {id: "4", name: "benz", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf"},
        destination: "Jinja",
        destinationCoordinates: {lat: 32.1,  lng: 0.16},
        pickedAt: 1788521023901,
        returnedAt: 1788521023901,
        totalPrice: 400000
    },

    {
        "id": "5",
        vehicle: {id: "5", name: "benz", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b"},
        destination: "Jinja",
        destinationCoordinates: {lat: 32.1,  lng: 0.16},
        pickedAt: 1788521023901,
        returnedAt: 1788521023901,
        totalPrice: 400000
    },

    {
        "id": "1",
        vehicle: {id: "1", name: "benz", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b"},
        destination: "Jinja",
        destinationCoordinates: {lat: 32.1,  lng: 0.16},
        pickedAt: 1788521023901,
        returnedAt: 1788521023901,
        totalPrice: 400000
    },

    {
        "id": "2",
        vehicle: {id: "2", name: "benz", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2"},
        destination: "Jinja",
        destinationCoordinates: {lat: 32.1,  lng: 0.16},
        pickedAt: 1788521023901,
        returnedAt: 1788521023901,
        totalPrice: 400000
    },

    {
        "id": "3",
        vehicle: {id: "3", name: "benz", image: "https://images.unsplash.com/photo-1550355291-bbee04a92027"},
        destination: "Jinja",
        destinationCoordinates: {lat: 32.1,  lng: 0.16},
        pickedAt: 1788521023901,
        returnedAt: 1788521023901,
        totalPrice: 400000
    },

    {
        "id": "4",
        vehicle: {id: "4", name: "benz", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf"},
        destination: "Jinja",
        destinationCoordinates: {lat: 32.1,  lng: 0.16},
        pickedAt: 1788521023901,
        returnedAt: 1788521023901,
        totalPrice: 400000
    },

    {
        "id": "5",
        vehicle: {id: "5", name: "benz", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b"},
        destination: "Jinja",
        destinationCoordinates: {lat: 32.1,  lng: 0.16},
        pickedAt: 1788521023901,
        returnedAt: 1788521023901,
        totalPrice: 400000
    }

 ]
  

const CustomerDashboard = () => {

  const [selectedRental, setSelectedRental] = useState(rentals[0]);
  const [showAllTransactions, setShowAllTransactions] = useState(false);


  return (
    <div className="space-y-6 bg-gray-100 p-6">

      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Customer Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          View your recent rentals and trip details.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6">
        {/* LEFT */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Rental Details </h2>
          <RentalDetails rental={selectedRental} />
        </section>

        {/* RIGHT */}
        <section className="bg-white px-5 rounded-lg">
          <div className="flex justify-between text-sm font-medium my-4">
            <h2>Recent Transactions</h2>
            <button 
              onClick={() => setShowAllTransactions(!showAllTransactions)}
              className="text-blue-400">{showAllTransactions ? "Show Less" : "View All"}</button>
          </div>
          <Transactions  
            rentals = {showAllTransactions ? rentals : rentals.slice(0, 5)}
            selectedRentalId={selectedRental.id}
            onSelect={setSelectedRental}
          />
        </section>
      </div>
    </div>
  );
};

export default CustomerDashboard;