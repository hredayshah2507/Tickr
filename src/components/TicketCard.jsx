import { ExternalLink, Calendar, MapPin, Hash, CheckCircle, XCircle, Clock } from 'lucide-react';
import { getEtherscanUrl, formatEventDate } from '../services/ticketService';

/**
 * TicketCard Component
 * 
 * Displays a single ticket with all relevant information
 * Includes status badge, event details, and Etherscan link
 */
const TicketCard = ({ ticket }) => {
  // Status configuration
  const statusConfig = {
    valid: {
      label: 'Valid',
      bgColor: 'bg-emerald-500/20',
      textColor: 'text-emerald-400',
      borderColor: 'border-emerald-500/50',
      icon: <CheckCircle size={16} />
    },
    used: {
      label: 'Used',
      bgColor: 'bg-amber-500/20',
      textColor: 'text-amber-400',
      borderColor: 'border-amber-500/50',
      icon: <Clock size={16} />
    },
    expired: {
      label: 'Expired',
      bgColor: 'bg-red-500/20',
      textColor: 'text-red-400',
      borderColor: 'border-red-500/50',
      icon: <XCircle size={16} />
    }
  };

  const status = statusConfig[ticket.status] || statusConfig.valid;

  const handleViewOnEtherscan = () => {
    const url = getEtherscanUrl(ticket.transactionHash, 'mainnet');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="group relative bg-neutral-900/80 backdrop-blur rounded-xl border border-neutral-700 hover:border-violet-500/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-violet-500/10">
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden bg-neutral-800">
        <img
          src={ticket.image}
          alt={ticket.eventName}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${status.borderColor} ${status.bgColor} backdrop-blur-sm`}>
            {status.icon}
            <span className={`text-xs font-bold uppercase tracking-wide ${status.textColor}`}>
              {status.label}
            </span>
          </div>
        </div>

        {/* Token ID Badge */}
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm border border-neutral-600">
            <Hash size={14} className="text-violet-400" />
            <span className="text-xs font-mono text-neutral-300">
              {ticket.tokenId}
            </span>
          </div>
        </div>
      </div>

      {/* Ticket Details */}
      <div className="p-6 space-y-4">
        {/* Event Name */}
        <h3 className="text-xl font-bold text-white line-clamp-2 group-hover:text-violet-400 transition">
          {ticket.eventName}
        </h3>

        {/* Event Date */}
        <div className="flex items-start gap-3 text-neutral-300">
          <Calendar size={18} className="text-violet-400 mt-0.5 flex-shrink-0" />
          <div className="text-sm leading-relaxed">
            {formatEventDate(ticket.eventDate)}
          </div>
        </div>

        {/* Venue */}
        <div className="flex items-start gap-3 text-neutral-300">
          <MapPin size={18} className="text-violet-400 mt-0.5 flex-shrink-0" />
          <div className="text-sm leading-relaxed line-clamp-2">
            {ticket.venue}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-700 pt-4 mt-4">
          {/* Transaction Hash */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs text-neutral-500 uppercase tracking-wide mb-1">
                Transaction Hash
              </p>
              <p className="text-sm font-mono text-neutral-300 truncate max-w-[180px]">
                {ticket.transactionHash.substring(0, 18)}...
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-neutral-500 uppercase tracking-wide mb-1">
                Price Paid
              </p>
              <p className="text-sm font-bold text-violet-400">
                {ticket.price} ETH
              </p>
            </div>
          </div>

          {/* View on Etherscan Button */}
          <button
            onClick={handleViewOnEtherscan}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-neutral-800 hover:bg-violet-600 text-neutral-300 hover:text-white rounded-lg transition-all duration-300 font-medium text-sm group/btn"
          >
            <span>View on Etherscan</span>
            <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Purchase Date (subtle footer) */}
        <div className="text-xs text-neutral-600 text-center pt-2">
          Purchased {new Date(ticket.purchaseDate).toLocaleDateString('en-IN', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
          })}
        </div>
      </div>

      {/* Decorative gradient border effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500/20 via-transparent to-transparent" />
      </div>
    </div>
  );
};

export default TicketCard;
