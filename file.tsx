import { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaCar,
  FaImage,
  FaShieldAlt,
  FaTools,
  FaSave,
  FaSpinner,
} from 'react-icons/fa';
import { vehicleService } from '../services/vehicleService';
import { useAuth } from '../context/useAuth';

// Define the form data interface
interface VehicleFormData {
  name: string;
  model: string;
  vehicleType: string;
  fuelType: string;
  seatingCapacity: number;
  bagSpace: number;
  pricePerDay: number;
  consumption: number;
  transmission: string;
  status: string;
  insuranceExpiryDate: string;
  nextServiceMillage: number;
}

// Define the API request interface
interface VehicleRequest {
  SERVICE: string;
  ACTION: string;
  name: string;
  model: string;
  vehicleType: string;
  fuelType: string;
  seatingCapacity: number;
  bagSpace: number;
  pricePerDay: number;
  consumption: number;
  transmission: string;
  status: string;
  insuranceExpiryDate: string;
  nextServiceMillage: number;
}

const AddVehicle = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Initial form state
  const [formData, setFormData] = useState<VehicleFormData>({
    name: '',
    model: '',
    vehicleType: '',
    fuelType: '',
    seatingCapacity: 0,
    bagSpace: 0,
    pricePerDay: 0,
    consumption: 0,
    transmission: '',
    status: 'AVAILABLE',
    insuranceExpiryDate: '',
    nextServiceMillage: 0,
  });

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    // Handle number inputs
    if (type === 'number') {
      setFormData((prev) => ({
        ...prev,
        [name]: value === '' ? 0 : Number(value),
      }));
      return;
    }

    // Handle date inputs
    if (type === 'date') {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      return;
    }

    // Handle text/select inputs
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Validate required fields
    if (!formData.name || !formData.model || !formData.vehicleType) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    try {
      // Prepare request for backend
      const request: VehicleRequest = {
        SERVICE: 'Vehicle',
        ACTION: 'add',
        name: formData.name,
        model: formData.model,
        vehicleType: formData.vehicleType.toUpperCase(),
        fuelType: formData.fuelType.toUpperCase(),
        seatingCapacity: formData.seatingCapacity,
        bagSpace: formData.bagSpace,
        pricePerDay: formData.pricePerDay,
        consumption: formData.consumption,
        transmission: formData.transmission.toUpperCase(),
        status: formData.status.toUpperCase(),
        insuranceExpiryDate: formData.insuranceExpiryDate,
        nextServiceMillage: formData.nextServiceMillage,
      };

      console.log('📤 Sending request:', request);

      // Send to backend
      const response = await vehicleService.addVehicle(request);

      console.log('✅ Vehicle added:', response);

      setSuccess(true);
      setFormData({
        name: '',
        model: '',
        vehicleType: '',
        fuelType: '',
        seatingCapacity: 0,
        bagSpace: 0,
        pricePerDay: 0,
        consumption: 0,
        transmission: '',
        status: 'AVAILABLE',
        insuranceExpiryDate: '',
        nextServiceMillage: 0,
      });

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/vehicles');
      }, 2000);
    } catch (err) {
      console.error('❌ Error adding vehicle:', err);
      setError(err instanceof Error ? err.message : 'Failed to add vehicle');
    } finally {
      setLoading(false);
    }
  };

  // Handle cancel
  const handleCancel = () => {
    navigate('/vehicles');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Add New Vehicle</h1>
        <p className="text-sm text-gray-500 mt-1">
          Register a new vehicle to your fleet.
        </p>
      </div>

      {/* Success Message */}
      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
          ✅ Vehicle registered successfully! Redirecting...
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
          ❌ {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <FaCar />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Basic Vehicle Information
              </h2>
              <p className="text-sm text-gray-500">
                Enter the basic details of the vehicle
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Vehicle Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Toyota Prado"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Model *
              </label>
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
                placeholder="e.g. TX 2023"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Vehicle Type *
              </label>
              <select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select vehicle type</option>
                <option value="SEDAN">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="HATCHBACK">Hatchback</option>
                <option value="TRUCK">Truck</option>
                <option value="VAN">Van</option>
                <option value="MOTORCYCLE">Motorcycle</option>
                <option value="ELECTRIC">Electric</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fuel Type *
              </label>
              <select
                name="fuelType"
                value={formData.fuelType}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select fuel type</option>
                <option value="PETROL">Petrol</option>
                <option value="DIESEL">Diesel</option>
                <option value="HYBRID">Hybrid</option>
                <option value="ELECTRIC">Electric</option>
              </select>
            </div>
          </div>
        </section>

        {/* Pricing & Capacity */}
        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Pricing & Capacity
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Seating Capacity *
              </label>
              <input
                type="number"
                name="seatingCapacity"
                value={formData.seatingCapacity || ''}
                onChange={handleChange}
                min="1"
                placeholder="e.g. 5"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Per Day * (UGX)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                  UGX
                </span>
                <input
                  type="number"
                  name="pricePerDay"
                  value={formData.pricePerDay || ''}
                  onChange={handleChange}
                  min="0"
                  placeholder="400000"
                  className="w-full pl-14 pr-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Consumption (L/100km)
              </label>
              <input
                type="number"
                name="consumption"
                value={formData.consumption || ''}
                onChange={handleChange}
                min="0"
                step="0.01"
                placeholder="e.g. 6.5"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bag Space
              </label>
              <input
                type="number"
                name="bagSpace"
                value={formData.bagSpace || ''}
                onChange={handleChange}
                min="0"
                placeholder="e.g. 5"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Transmission *
              </label>
              <select
                name="transmission"
                value={formData.transmission}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select transmission</option>
                <option value="AUTOMATIC">Automatic</option>
                <option value="MANUAL">Manual</option>
              </select>
            </div>
          </div>
        </section>

        {/* Vehicle Condition */}
        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
              <FaTools />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Vehicle Condition
              </h2>
              <p className="text-sm text-gray-500">
                Provide information about the current condition.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Next Service Millage (km)
              </label>
              <input
                type="number"
                name="nextServiceMillage"
                value={formData.nextServiceMillage || ''}
                onChange={handleChange}
                min="0"
                placeholder="e.g. 15000"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Vehicle Status *
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="AVAILABLE">Available</option>
                <option value="BOOKED">Booked</option>
                <option value="MAINTENANCE">Maintenance</option>
                <option value="UNAVAILABLE">Unavailable</option>
              </select>
            </div>
          </div>
        </section>

        {/* Insurance & Maintenance */}
        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
              <FaShieldAlt />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Insurance & Maintenance
              </h2>
              <p className="text-sm text-gray-500">
                Keep track of insurance and service dates.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Insurance Expiry Date *
              </label>
              <input
                type="date"
                name="insuranceExpiryDate"
                value={formData.insuranceExpiryDate}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Next Service Date (Optional)
              </label>
              <input
                type="date"
                name="nextServiceDate"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </section>

        {/* Images */}
        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <FaImage />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Vehicle Images
              </h2>
              <p className="text-sm text-gray-500">
                Upload the main vehicle image and additional images.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Main Vehicle Image
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Images
              </label>
              <input
                type="file"
                name="images"
                accept="image/*"
                multiple
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm"
              />
            </div>
          </div>
        </section>

        {/* Actions */}
        <div className="flex justify-end gap-3 pb-6">
          <button
            type="button"
            onClick={handleCancel}
            className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" />
                Registering...
              </>
            ) : (
              <>
                <FaSave />
                Register Vehicle
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVehicle;