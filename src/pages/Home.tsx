import { useState , useEffect} from 'react';
import { useVehicles } from '../hooks/useVehicles';
import VehicleList from '../components/vehicle/VehicleList';
import VehicleLoading from '../components/VehicleLoading';
import VehicleError from '../components/VehicleError';
import { useDebounce } from '../hooks/Debounce';

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearch = useDebounce(searchInput, 500);
  
  const {
    filteredVehicles,
    loading,
    error,
    refresh,
    search: currentSearch,
    setSearch
  } = useVehicles();


  const handleSearchChange = (value: string) => {
    setSearchInput(value);
    setSearch(value);
  };

  useEffect(() => {
    setSearch(debouncedSearch);
  }, [debouncedSearch, setSearch]);

  const vehicleCount = filteredVehicles.length;
  const isLoading = loading && filteredVehicles.length === 0;

  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-blue-800 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-200">
              Ride Along
            </p>
            <h1 className="text-4xl font-bold md:text-5xl">
              Find the perfect vehicle for your next journey.
            </h1>
            <p className="mt-5 text-lg text-blue-100">
              Browse available vehicles and find one that fits your trip.
            </p>
          </div>

          <div className="mt-8 max-w-2xl">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search Toyota, SUV, Electric..."
              className="w-full rounded-xl bg-white px-5 py-4 text-gray-900 outline-none placeholder:text-gray-400 transition-shadow focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            />
            {loading && (
              <p className="mt-2 text-sm text-blue-200 animate-pulse">
                Searching...
              </p>
            )}
          </div>
        </div>
      </section>


      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Available Vehicles
              </h2>
              <p className="mt-1 text-gray-500">
                {error ? 'Unable to load vehicles' : `${vehicleCount} vehicles found`}
              </p>
            </div>
            
            <button
              onClick={refresh}
              disabled={loading}
              className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition disabled:opacity-50"
            >
              {loading ? 'Loading...' : ' Refresh'}
            </button>
          </div>

          {error && ( <VehicleError error={error} onRetry={refresh} /> )}

          {isLoading && <VehicleLoading />}

          {!error && !isLoading && (
            <>
              {vehicleCount === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    No vehicles found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search criteria
                  </p>
                  {searchInput && (
                    <button
                      onClick={() => {
                        setSearchInput('');
                        setSearch('');
                      }}
                      className="mt-4 px-6 py-2 text-blue-600 hover:text-blue-800 transition"
                    >
                      Clear search
                    </button>
                  )}
                </div>
              ) : (
                <VehicleList vehicles={filteredVehicles} />
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
