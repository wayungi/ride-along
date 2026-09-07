import AppRoutes from "./routes/AppRoutes"
import AuthProvider from './context/AuthProvider'
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => console.error('Logging error:', error, errorInfo)} /* ASK Jonah to add */
      onReset={() => console.log('App state reset') }>
      <AuthProvider>
          <AppRoutes />
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
