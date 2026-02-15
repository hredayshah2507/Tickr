import { AlertTriangle, RefreshCw } from 'lucide-react';

/**
 * ErrorState Component
 * 
 * Displays when ticket fetching fails
 * Provides retry functionality
 */
const ErrorState = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      {/* Icon */}
      <div className="w-24 h-24 rounded-full bg-red-500/10 border-2 border-red-500/50 flex items-center justify-center mb-6">
        <AlertTriangle size={40} className="text-red-400" />
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold text-white mb-3">
        Oops! Something Went Wrong
      </h2>

      {/* Error Message */}
      <p className="text-neutral-400 mb-8 max-w-md">
        {message || 'Unable to fetch your tickets. Please check your connection and try again.'}
      </p>

      {/* Retry Button */}
      <button
        onClick={onRetry}
        className="flex items-center gap-2 px-8 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-lg transition-all duration-300 border border-neutral-700 hover:border-violet-500"
      >
        <RefreshCw size={18} />
        <span>Try Again</span>
      </button>

      {/* Help Text */}
      <p className="text-xs text-neutral-600 mt-6">
        If the problem persists, please contact support
      </p>
    </div>
  );
};

export default ErrorState;
