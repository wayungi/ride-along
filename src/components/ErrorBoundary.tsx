const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
  return (
    <div className="min-h-[200px] flex items-center justify-center bg-red-50 rounded-lg p-6">
      <div className="text-center max-w-md w-full">
        <div className="text-5xl mb-4">⚠️</div>
        <h2 className="text-xl font-semibold text-red-800 mb-2">
          Something went wrong
        </h2>
        <p className="text-red-600 text-sm mb-4">
          We're sorry, but an error occurred. Please refresh the page.
        </p>
        
        <details className="text-left bg-red-100 rounded-lg p-3 mb-4">
          <summary className="cursor-pointer text-sm font-medium text-red-800 hover:text-red-900">
            Error details
          </summary>
          <pre className="mt-2 text-xs text-red-900 whitespace-pre-wrap break-words bg-red-50 p-2 rounded">
            {error?.message || 'Unknown error'}
          </pre>
        </details>
        
        <button
          onClick={resetErrorBoundary}
          className="px-6 py-2.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-sm hover:shadow-md"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;

