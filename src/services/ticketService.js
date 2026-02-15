/**
 * Ticket Service Layer
 * 
 * This service abstracts ticket data fetching logic from UI components.
 * Currently uses mock data, but is structured to easily integrate with:
 * - Blockchain smart contracts (ethers.js)
 * - Backend REST API
 * - GraphQL queries
 * 
 * Future Integration Notes:
 * When connecting to smart contract, replace fetchUserTickets() implementation with:
 * 
 * import { ethers } from 'ethers';
 * import TicketContractABI from '../contracts/TicketContract.json';
 * 
 * const CONTRACT_ADDRESS = '0x...'; // Your deployed contract address
 * 
 * async function fetchUserTickets(walletAddress) {
 *   try {
 *     // Initialize provider from MetaMask
 *     const provider = new ethers.providers.Web3Provider(window.ethereum);
 *     
 *     // Get signer
 *     const signer = provider.getSigner();
 *     
 *     // Instantiate contract
 *     const contract = new ethers.Contract(CONTRACT_ADDRESS, TicketContractABI, signer);
 *     
 *     // Call contract method to get user's tickets
 *     const ticketIds = await contract.getTicketsByOwner(walletAddress);
 *     
 *     // Fetch details for each ticket
 *     const tickets = await Promise.all(
 *       ticketIds.map(async (tokenId) => {
 *         const ticketData = await contract.getTicketDetails(tokenId);
 *         return {
 *           id: tokenId.toString(),
 *           eventName: ticketData.eventName,
 *           eventDate: new Date(ticketData.eventDate * 1000).toISOString(),
 *           venue: ticketData.venue,
 *           tokenId: tokenId.toString(),
 *           transactionHash: ticketData.mintTxHash,
 *           status: ticketData.isUsed ? 'used' : (Date.now() > ticketData.eventDate * 1000 ? 'expired' : 'valid'),
 *           image: ticketData.eventImage || '/placeholder-event.jpg',
 *           purchaseDate: new Date(ticketData.purchaseTimestamp * 1000).toISOString(),
 *           price: ethers.utils.formatEther(ticketData.price),
 *           category: ticketData.category
 *         };
 *       })
 *     );
 *     
 *     return tickets;
 *   } catch (error) {
 *     console.error('Error fetching tickets from contract:', error);
 *     throw error;
 *   }
 * }
 */

// Mock data structure that matches expected contract response format
const MOCK_TICKETS = [
  {
    id: '1',
    eventName: 'Dune: Part Two',
    eventDate: '2026-03-15T19:30:00',
    venue: 'PVR Cinemas, Phoenix Marketcity, Mumbai',
    tokenId: '10245',
    transactionHash: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb1',
    status: 'valid', // valid | used | expired
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800',
    purchaseDate: '2026-02-10T14:22:00',
    price: '0.025',
    category: 'movies'
  },
  {
    id: '2',
    eventName: 'Coldplay: Music of the Spheres World Tour',
    eventDate: '2026-01-25T20:00:00',
    venue: 'DY Patil Stadium, Navi Mumbai',
    tokenId: '10198',
    transactionHash: '0x8ba1f109551bD432803012645Ac136ddd64DBA72',
    status: 'used',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800',
    purchaseDate: '2025-12-05T10:15:00',
    price: '0.15',
    category: 'concerts'
  },
  {
    id: '3',
    eventName: 'Mumbai Indians vs Chennai Super Kings',
    eventDate: '2025-12-20T19:30:00',
    venue: 'Wankhede Stadium, Mumbai',
    tokenId: '10087',
    transactionHash: '0x9f4cda013e354b8fc285bf4b9a60460cee7f7ea9',
    status: 'expired',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800',
    purchaseDate: '2025-11-30T09:45:00',
    price: '0.08',
    category: 'sports'
  },
  {
    id: '4',
    eventName: 'Oppenheimer',
    eventDate: '2026-02-28T21:00:00',
    venue: 'INOX, R City Mall, Ghatkopar',
    tokenId: '10312',
    transactionHash: '0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t',
    status: 'valid',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800',
    purchaseDate: '2026-02-14T16:30:00',
    price: '0.02',
    category: 'movies'
  },
  {
    id: '5',
    eventName: 'TechCrunch Disrupt 2026',
    eventDate: '2026-04-10T09:00:00',
    venue: 'Jio World Convention Centre, BKC',
    tokenId: '10456',
    transactionHash: '0xabcdef1234567890abcdef1234567890abcdef12',
    status: 'valid',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
    purchaseDate: '2026-02-01T11:20:00',
    price: '0.5',
    category: 'conferences'
  }
];

/**
 * Simulates network delay for realistic loading states
 */
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Fetch all tickets owned by a wallet address
 * 
 * @param {string} walletAddress - Ethereum wallet address
 * @returns {Promise<Array>} Array of ticket objects
 * @throws {Error} If wallet address is invalid or fetch fails
 */
export const fetchUserTickets = async (walletAddress) => {
  // Validate wallet address format
  if (!walletAddress || !walletAddress.startsWith('0x')) {
    throw new Error('Invalid wallet address');
  }

  try {
    // Simulate network request delay (remove in production)
    await delay(1200);

    // TODO: Replace with actual contract call or API request
    // For now, return mock data filtered by wallet (in real scenario)
    
    // In production, this would be:
    // const response = await fetch(`/api/tickets/${walletAddress}`);
    // return await response.json();
    
    return MOCK_TICKETS;
  } catch (error) {
    console.error('Error fetching user tickets:', error);
    throw new Error('Failed to fetch tickets. Please try again.');
  }
};

/**
 * Get ticket details by token ID
 * 
 * @param {string} tokenId - Unique ticket token ID
 * @returns {Promise<Object>} Ticket object
 */
export const fetchTicketById = async (tokenId) => {
  await delay(500);
  
  const ticket = MOCK_TICKETS.find(t => t.tokenId === tokenId);
  
  if (!ticket) {
    throw new Error('Ticket not found');
  }
  
  return ticket;
};

/**
 * Filter tickets by status
 * 
 * @param {Array} tickets - Array of ticket objects
 * @param {string} status - Status filter (valid|used|expired|all)
 * @returns {Array} Filtered tickets
 */
export const filterTicketsByStatus = (tickets, status) => {
  if (status === 'all') return tickets;
  return tickets.filter(ticket => ticket.status === status);
};

/**
 * Sort tickets by date
 * 
 * @param {Array} tickets - Array of ticket objects
 * @param {string} order - Sort order (asc|desc)
 * @returns {Array} Sorted tickets
 */
export const sortTicketsByDate = (tickets, order = 'desc') => {
  return [...tickets].sort((a, b) => {
    const dateA = new Date(a.eventDate);
    const dateB = new Date(b.eventDate);
    return order === 'asc' ? dateA - dateB : dateB - dateA;
  });
};

/**
 * Get Etherscan transaction URL
 * 
 * @param {string} txHash - Transaction hash
 * @param {string} network - Ethereum network (mainnet|goerli|sepolia)
 * @returns {string} Etherscan URL
 */
export const getEtherscanUrl = (txHash, network = 'mainnet') => {
  const baseUrls = {
    mainnet: 'https://etherscan.io',
    goerli: 'https://goerli.etherscan.io',
    sepolia: 'https://sepolia.etherscan.io'
  };
  
  return `${baseUrls[network]}/tx/${txHash}`;
};

/**
 * Format date for display
 * 
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
export const formatEventDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

/**
 * Check if event is upcoming (future date)
 * 
 * @param {string} eventDate - ISO date string
 * @returns {boolean}
 */
export const isUpcoming = (eventDate) => {
  return new Date(eventDate) > new Date();
};
