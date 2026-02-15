import { useState } from 'react';
import { Plus, Search, Edit, Trash2, Eye, Calendar } from 'lucide-react';
import CreateEventModal from './CreateEventModal';

/**
 * EventManagement Component
 * 
 * Manage regular events - create, edit, delete, view
 */
const EventManagement = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Mock events data - replace with actual data from API/blockchain
  const mockEvents = [
    {
      id: 1,
      title: 'Dune: Part Two',
      category: 'movies',
      venue: 'PVR Cinemas, Mumbai',
      date: '2025-02-01',
      time: '19:00',
      price: 450,
      status: 'published',
      tickets: { sold: 245, total: 300 }
    },
    {
      id: 2,
      title: 'Coldplay World Tour',
      category: 'concerts',
      venue: 'Mumbai Expo Centre',
      date: '2025-02-20',
      time: '18:30',
      price: 8000,
      status: 'published',
      tickets: { sold: 1850, total: 2000 }
    },
    {
      id: 3,
      title: 'IPL 2025 - CSK vs MI',
      category: 'sports',
      venue: 'Chennai Stadium',
      date: '2025-03-20',
      time: '19:30',
      price: 1200,
      status: 'draft',
      tickets: { sold: 0, total: 5000 }
    }
  ];

  const categories = ['all', 'movies', 'concerts', 'sports', 'theater', 'events'];
  
  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || event.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = (eventId) => {
    if (confirm('Are you sure you want to delete this event?')) {
      // TODO: Implement delete logic
      console.log('Deleting event:', eventId);
    }
  };

  const getStatusBadge = (status) => {
    const config = {
      published: { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/50' },
      draft: { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/50' },
      cancelled: { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/50' }
    };
    const { bg, text, border } = config[status] || config.draft;
    
    return (
      <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase ${bg} ${text} border ${border}`}>
        {status}
      </span>
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Event Management</h2>
          <p className="text-neutral-400">Create and manage regular events</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-violet-700 hover:from-violet-600 hover:to-violet-800 text-white rounded-lg font-semibold transition shadow-lg shadow-violet-500/30"
        >
          <Plus size={20} />
          <span>Create Event</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search */}
        <div className="flex-1 flex items-center gap-2 bg-neutral-800 rounded-lg px-4 py-3 border border-neutral-700">
          <Search size={20} className="text-neutral-400" />
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent outline-none text-white flex-1 placeholder-neutral-400"
          />
        </div>

        {/* Category Filter */}
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="bg-neutral-800 text-white px-4 py-3 rounded-lg border border-neutral-700 outline-none cursor-pointer"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Events List */}
      {filteredEvents.length === 0 ? (
        <div className="text-center py-16 bg-neutral-900/50 rounded-xl border border-neutral-700">
          <Calendar size={48} className="text-neutral-600 mx-auto mb-4" />
          <p className="text-neutral-400 text-lg">No events found</p>
          <p className="text-neutral-500 text-sm mt-2">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-neutral-900/80 backdrop-blur rounded-xl border border-neutral-700 hover:border-violet-500/50 transition-all duration-300 p-6"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                {/* Event Info */}
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{event.title}</h3>
                    {getStatusBadge(event.status)}
                  </div>
                  <p className="text-neutral-400 mb-2">
                    📍 {event.venue}
                  </p>
                  <p className="text-neutral-400 text-sm">
                    📅 {new Date(event.date).toLocaleDateString('en-IN')} • 🕐 {event.time}
                  </p>
                  <div className="mt-3 flex items-center gap-4 text-sm">
                    <span className="text-violet-400 font-semibold">₹{event.price}</span>
                    <span className="text-neutral-500">•</span>
                    <span className="text-neutral-400">
                      {event.tickets.sold}/{event.tickets.total} tickets sold
                    </span>
                    <span className="text-neutral-500">•</span>
                    <span className={`font-semibold ${
                      (event.tickets.sold / event.tickets.total) > 0.7 ? 'text-emerald-400' : 'text-amber-400'
                    }`}>
                      {Math.round((event.tickets.sold / event.tickets.total) * 100)}% sold
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex lg:flex-col gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition border border-neutral-600">
                    <Eye size={16} />
                    <span className="text-sm">View</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition">
                    <Edit size={16} />
                    <span className="text-sm">Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
                  >
                    <Trash2 size={16} />
                    <span className="text-sm">Delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create Event Modal */}
      {showCreateModal && (
        <CreateEventModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  );
};

export default EventManagement;
