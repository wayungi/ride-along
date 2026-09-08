interface VehicleErrorProps {
  error: string;
  onRetry: () => void;
}

const VehicleError = ({ error, onRetry }: VehicleErrorProps) => {
  return (
    <div className="text-center py-12">
      <div className="text-6xl mb-4">🚫</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Failed to load vehicles
      </h3>
      <p className="text-gray-600 mb-4">{error}</p>
      <button
        onClick={onRetry}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Try Again
      </button>
    </div>
  );
};

export default VehicleError;