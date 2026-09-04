import {
  FaShieldAlt,
  FaTools,
  FaGasPump,
  FaCar,
  FaUsers,
  FaCogs,
  FaSuitcase,
  FaCheckCircle,
} from "react-icons/fa";
import type { VehicleDetails } from "../../types/types";

interface VehicleDetailsProps {
  vehicle: VehicleDetails;
}

const VehicleSpecs = ({ vehicle,}: VehicleDetailsProps) => {
    
    /* dummy data */
  const details = [
    {
      label: "Insurance Expiry",
      value: vehicle.insuranceExpiry,
      icon: <FaShieldAlt />,
    },
    {
      label: "Next Service",
      value: vehicle.nextServiceDate,
      icon: <FaTools />,
    },
    {
      label: "Fuel Consumption",
      value: `${vehicle.consumptionPerKm} km/l`,
      icon: <FaGasPump />,
    },
    {
      label: "Condition",
      value: vehicle.condition,
      icon: <FaCar />,
    },
    {
      label: "Seating Capacity",
      value: `${vehicle.seats} seats`,
      icon: <FaUsers />,
    },
    {
      label: "Transmission",
      value: vehicle.transmission,
      icon: <FaCogs />,
    },
    {
      label: "Bag Space",
      value: vehicle.bagSpace,
      icon: <FaSuitcase />,
    },
    {
      label: "Availability",
      value: vehicle.available
        ? "Available"
        : "Unavailable",
      icon: <FaCheckCircle />,
    },
  ];

  return (
    <section className="mt-10">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Vehicle Details
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {details.map((detail) => (
          <div
            key={detail.label}
            className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
          >
            <div className="mb-3 text-xl text-blue-600">
              {detail.icon}
            </div>

            <p className="text-sm text-gray-500">
              {detail.label}
            </p>

            <p className="mt-1 font-semibold text-gray-900">
              {detail.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VehicleSpecs;