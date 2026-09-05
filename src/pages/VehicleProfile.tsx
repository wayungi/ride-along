import VehicleGallery from "../components/vehicle/VehicleCallery";
import VehicleDetails from "../components/vehicle/VehicleSpecs";
import VehicleBooking from "../components/vehicle/VehicleBooking";
import type { VehicleInfo } from "../types/types"

const VehicleProfile = () => {

    const vehicle: VehicleInfo = {
        id: 1,
        name: "Toyota RAV4",
        type: "SUV",
        fuelType: "Petrol",
        seats: 5,
        pricePerDay: 55,
        image: "",
        status: "",
        model: "",

        images: [
            "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b",
            "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2",
            "https://images.unsplash.com/photo-1550355291-bbee04a92027",
            "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf",
        ],

        insuranceExpiry: "2027-04-15",
        nextServiceDate: "2026-11-20",
        consumptionPerKm: 12.5,
        condition: "Excellent",
        transmission: "Automatic",
        bagSpace: "3 large bags",

        available: true,
    };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">

        {/* Vehicle heading */}
        <div className="mb-8">
          <h1 className="mt-2 text-4xl font-bold text-gray-900"> {vehicle.name}</h1>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">{vehicle.type}</p>
          <p className="mt-2 text-gray-500"> Shs {vehicle.pricePerDay} per day</p>
        </div>

        {/* Gallery */}

        <VehicleGallery
          images={vehicle.images}
          vehicleName={vehicle.name}
        />

        {/* Details */}
        <VehicleDetails vehicle={vehicle} />

        {/* Booking */}
        <VehicleBooking vehicle={vehicle} />

      </div>
    </main>
  );
};

export default VehicleProfile;