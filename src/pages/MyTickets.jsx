import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Ticket, Filter, ArrowUpDown, Wallet } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TicketCard from '../components/TicketCard';
import LoadingState from '../components/LoadingState';
import EmptyState from '../components/EmptyState';
import ErrorState from '../components/ErrorState';
import {
  fetchUserTickets,
  filterTicketsByStatus,
  sortTicketsByDate
} from '../services/ticketService';

/**
 * MyTickets Page Component
 * 
 * Personal dashboard for viewing user's purchased tickets
 * Features:
 * - Wallet-based ticket fetching
 * - Status filtering (All, Valid, Used, Expired)
 * - Date sorting (Newest/Oldest first)
 * - Responsive grid layout
 * - Loading, empty, and error states
 */
const MyTickets = () => {
  const navigate = useNavigate();
  
  // State management
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null);
  
  // Filter and sort state
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('desc'); // desc = newest first

  /**
   * Initialize component - fetch wallet and tickets
   */
  useEffect(() => {
    const initializePage = async () => {
      try {
        // Get wallet address from localStorage
        const address = localStorage.getItem('walletAddress');
        
        if (!address) {
          address = '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb1';
          localStorage.setItem('walletAddress', address);
        }
        
        setWalletAddress(address);
        
        // Fetch tickets for this wallet
        const fetchedTickets = await fetchUserTickets(address);
        setTickets(fetchedTickets);
        setFilteredTickets(fetchedTickets);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    initializePage();
  }, [navigate]);

  /**
   * Apply filters and sorting when dependencies change
   */
  useEffect(() => {
    let result = [...tickets];
    
    // Apply status filter
    result = filterTicketsByStatus(result, statusFilter);
    
    // Apply date sorting
    result = sortTicketsByDate(result, sortOrder);
    
    setFilteredTickets(result);
  }, [tickets, statusFilter, sortOrder]);

  /**
   * Retry fetching tickets
   */
  const handleRetry = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const fetchedTickets = await fetchUserTickets(walletAddress);
      setTickets(fetchedTickets);
      setFilteredTickets(fetchedTickets);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Toggle sort order
   */
  const toggleSortOrder = () => {
    setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc');
  };

  /**
   * Get ticket count by status
   */
  const getStatusCount = (status) => {
    if (status === 'all') return tickets.length;
    return tickets.filter(t => t.status === status).length;
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center">
              <Ticket size={24} className="text-violet-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">My Tickets</h1>
              <p className="text-neutral-400 mt-1">View and manage your NFT event tickets</p>
            </div>
          </div>

          {/* Wallet Address Display */}
          {walletAddress && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg mt-4">
              <Wallet size={16} className="text-violet-400" />
              <span className="text-sm text-neutral-300 font-mono">
                {walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}
              </span>
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && <LoadingState />}

        {/* Error State */}
        {error && !loading && <ErrorState message={error} onRetry={handleRetry} />}

        {/* Empty State */}
        {!loading && !error && tickets.length === 0 && <EmptyState />}

        {/* Tickets Content */}
        {!loading && !error && tickets.length > 0 && (
          <>
            {/* Filter and Sort Controls */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              {/* Status Filter */}
              <div className="flex items-center gap-2">
                <Filter size={18} className="text-neutral-400" />
                <div className="flex gap-2">
                  {['all', 'valid', 'used', 'expired'].map((status) => (
                    <button
                      key={status}
                      onClick={() => setStatusFilter(status)}
                      className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                        statusFilter === status
                          ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/30'
                          : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white border border-neutral-700'
                      }`}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                      <span className="ml-2 text-xs opacity-70">
                        ({getStatusCount(status)})
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort Control */}
              <button
                onClick={toggleSortOrder}
                className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white rounded-lg transition-all duration-300 border border-neutral-700"
              >
                <ArrowUpDown size={18} />
                <span className="text-sm font-medium">
                  {sortOrder === 'desc' ? 'Newest First' : 'Oldest First'}
                </span>
              </button>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-neutral-400 text-sm">
                Showing <span className="text-white font-semibold">{filteredTickets.length}</span> ticket{filteredTickets.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Tickets Grid */}
            {filteredTickets.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {filteredTickets.map((ticket) => (
                  <TicketCard key={ticket.id} ticket={ticket} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-neutral-400">No tickets match your current filters.</p>
                <button
                  onClick={() => setStatusFilter('all')}
                  className="mt-4 text-violet-400 hover:text-violet-300 font-medium"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Info Banner */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🔐</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Blockchain-Verified Tickets</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    All tickets are stored as NFTs on the Ethereum blockchain. Each ticket has a unique token ID and can be verified on Etherscan. Your tickets are truly yours—no central authority can revoke or duplicate them.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default MyTickets;
