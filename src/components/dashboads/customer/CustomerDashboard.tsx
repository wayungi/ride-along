import { useState } from "react";
import RentalDetails from "./rental_details/RentalDetails";
import TransactionList from "./transactions/TransactionsList";

const CustomerDashboard = () => {

  const [selectedRental, setSelectedRental] = useState(rentals[0]);

  return (
    <div className="space-y-6">

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
        <section>
          <h2 className="text-lg font-semibold mb-4">Transactions</h2>
          <TransactionList rentals={rentals} selectedRentalId={selectedRental.id} onSelect={setSelectedRental}/>
        </section>
      </div>
    </div>
  );
};

export default CustomerDashboard;