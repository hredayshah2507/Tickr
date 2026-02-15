import { useState } from 'react';
import { X, Upload, Calendar, MapPin, DollarSign } from 'lucide-react';

/**
 * CreateEventModal Component
 * 
 * Modal form for creating new events
 */
const CreateEventModal = ({ onClose, event = null }) => {
  const isEditing = event !== null;
  
  const [formData, setFormData] = useState({
    title: event?.title || '',
    category: event?.category || 'movies',
    venue: event?.venue || '',
    date: event?.date || '',
    time: event?.time || '',
    price: event?.price || '',
    totalTickets: event?.tickets?.total || '',
    description: event?.description || '',
    image: event?.image || '',
    rating: event?.rating || '4.5'
  });

  const categories = ['movies', 'concerts', 'sports', 'theater', 'events'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // TODO: Implement actual creation logic with blockchain/API
    console.log('Creating/Updating event:', formData);
    
    // For now, just close modal
    alert(isEditing ? 'Event updated successfully!' : 'Event created successfully!');
    onClose();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // TODO: Implement image upload to IPFS or cloud storage
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-neutral-900 rounded-xl border border-neutral-700 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-neutral-900 border-b border-neutral-700 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            {isEditing ? 'Edit Event' : 'Create New Event'}
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition"
          >
            <X size={20} className="text-neutral-400" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Event Title */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Event Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter event title"
              className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 outline-none focus:border-violet-500 transition"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white outline-none focus:border-violet-500 transition cursor-pointer"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Venue */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              <MapPin size={16} className="inline mr-1" />
              Venue *
            </label>
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              required
              placeholder="Enter venue name and location"
              className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 outline-none focus:border-violet-500 transition"
            />
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                <Calendar size={16} className="inline mr-1" />
                Date *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white outline-none focus:border-violet-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Time *
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white outline-none focus:border-violet-500 transition"
              />
            </div>
          </div>

          {/* Price and Total Tickets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                <DollarSign size={16} className="inline mr-1" />
                Ticket Price (₹) *
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                placeholder="450"
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 outline-none focus:border-violet-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Total Tickets *
              </label>
              <input
                type="number"
                name="totalTickets"
                value={formData.totalTickets}
                onChange={handleChange}
                required
                min="1"
                placeholder="300"
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 outline-none focus:border-violet-500 transition"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Enter event description..."
              className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 outline-none focus:border-violet-500 transition resize-none"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Event Image
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg cursor-pointer transition">
                <Upload size={20} className="text-violet-400" />
                <span className="text-white font-medium">Upload Image</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              {formData.image && (
                <div className="w-20 h-20 rounded-lg overflow-hidden border border-neutral-700">
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
            <p className="text-xs text-neutral-500 mt-2">
              Recommended: 800x600px, Max 5MB
            </p>
          </div>

          {/* Image URL (Alternative) */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Or paste image URL
            </label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 outline-none focus:border-violet-500 transition"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4 border-t border-neutral-700">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg font-semibold transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-violet-500 to-violet-700 hover:from-violet-600 hover:to-violet-800 text-white rounded-lg font-semibold transition shadow-lg shadow-violet-500/30"
            >
              {isEditing ? 'Update Event' : 'Create Event'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEventModal;
