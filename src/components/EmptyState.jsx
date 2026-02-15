import { Ticket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/**
 * EmptyState Component
 * 
 * Displays when user has no tickets
 * Provides CTA to browse events
 */
const EmptyState = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      {/* Icon */}
      <div className="w-24 h-24 rounded-full bg-neutral-800/50 border-2 border-dashed border-neutral-700 flex items-center justify-center mb-6">
        <Ticket size={40} className="text-neutral-600" />
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold text-white mb-3">
        No Tickets Yet
      </h2>

      {/* Description */}
      <p className="text-neutral-400 mb-8 max-w-md">
        You haven't purchased any tickets yet. Start exploring amazing events and secure your spot with blockchain-powered tickets.
      </p>

      {/* CTA Button */}
      <button
        onClick={() => navigate('/')}
        className="px-8 py-3 bg-gradient-to-r from-violet-500 to-violet-700 hover:from-violet-600 hover:to-violet-800 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/50"
      >
        Browse Events
      </button>

      {/* Visual Enhancement */}
      <div className="mt-12 grid grid-cols-3 gap-4 opacity-30">
        <div className="h-2 bg-neutral-700 rounded" />
        <div className="h-2 bg-violet-500/50 rounded" />
        <div className="h-2 bg-neutral-700 rounded" />
      </div>
    </div>
  );
};

export default EmptyState;
