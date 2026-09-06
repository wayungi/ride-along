import {
  FaCar,
  FaImage,
  FaShieldAlt,
  FaTools,
  FaSave,
} from "react-icons/fa";

const AddVehicle = () => {


  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Add New Vehicle
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Register a new vehicle to your fleet.
        </p>
      </div>



      <form className="space-y-6">

        {/* Basic Information */}
        <section className="bg-white rounded-xl border border-gray-200 p-6">

          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><FaCar /></div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Basic Vehicle Information</h2>
              <p className="text-sm text-gray-500">Enter the basic details of the vehicle</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Name</label>
              <input
                type="text"
                name="name"
                placeholder="e.g. Toyota Prado"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Model</label>
              <input
                type="text"
                name="model"
                placeholder="e.g. TX 2023"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
              <input
                type="text"
                name="type"
                placeholder="e.g. SUV, Sedan, Van"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1"> Fuel Type</label>
              <select
                name="fuelType"
                defaultValue=""
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-500"
              >
                {/* hook to backend once API id developed */}
                <option value="" disabled>Select fuel type</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Electric">Electric</option>
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

            {/* Seats */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Seating Capacity
              </label>

              <input
                type="number"
                name="seats"
                min="1"
                placeholder="e.g. 5"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Per Day
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                  UGX
                </span>

                <input
                  type="number"
                  name="pricePerDay"
                  min="0"
                  placeholder="400000"
                  className="w-full pl-14 pr-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Consumption */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Consumption Per KM
              </label>

              <input
                type="number"
                name="consumptionPerKm"
                min="0"
                step="0.01"
                placeholder="e.g. 0.12"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Bag Space */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bag Space
              </label>

              <input
                type="text"
                name="bagSpace"
                placeholder="e.g. 3 large bags"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Transmission */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Transmission
              </label>

              <select
                name="transmission"
                defaultValue=""
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Select transmission
                </option>

                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
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

            {/* Condition */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Condition
              </label>

              <select
                name="condition"
                defaultValue=""
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Select condition
                </option>

                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Poor">Poor</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Vehicle Status
              </label>

              <select
                name="status"
                defaultValue="AVAILABLE"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="AVAILABLE">Available</option>
                <option value="BOOKED">Booked</option>
                <option value="FAULTY">Faulty</option>
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

            {/* Insurance */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Insurance Expiry
              </label>

              <input
                type="date"
                name="insuranceExpiry"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Next Service Date
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

            {/* Main Image */}
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

            {/* Additional Images */}
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
            className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
          >
            <FaSave />
            Register Vehicle
          </button>

        </div>

      </form>
    </div>
  );
};

export default AddVehicle;

