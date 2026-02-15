/**
 * LoadingState Component
 * 
 * Displays skeleton loading cards while tickets are being fetched
 */
const LoadingState = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="bg-neutral-900/80 backdrop-blur rounded-xl border border-neutral-700 overflow-hidden animate-pulse"
        >
          {/* Image Skeleton */}
          <div className="h-48 bg-neutral-800" />
          
          {/* Content Skeleton */}
          <div className="p-6 space-y-4">
            {/* Title */}
            <div className="h-6 bg-neutral-800 rounded w-3/4" />
            
            {/* Date */}
            <div className="flex gap-3">
              <div className="w-5 h-5 bg-neutral-800 rounded" />
              <div className="h-4 bg-neutral-800 rounded w-full" />
            </div>
            
            {/* Venue */}
            <div className="flex gap-3">
              <div className="w-5 h-5 bg-neutral-800 rounded" />
              <div className="h-4 bg-neutral-800 rounded w-2/3" />
            </div>
            
            {/* Footer */}
            <div className="border-t border-neutral-700 pt-4 space-y-3">
              <div className="flex justify-between">
                <div className="h-4 bg-neutral-800 rounded w-1/3" />
                <div className="h-4 bg-neutral-800 rounded w-1/4" />
              </div>
              <div className="h-10 bg-neutral-800 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingState;
