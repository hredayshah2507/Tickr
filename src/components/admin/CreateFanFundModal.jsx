import { useState } from 'react';
import { X, Upload, Calendar, Target, Users } from 'lucide-react';

/**
 * CreateFanFundModal Component
 * 
 * Modal form for creating new fan-funding campaigns
 */
const CreateFanFundModal = ({ onClose, campaign = null }) => {
  const isEditing = campaign !== null;
  
  const [formData, setFormData] = useState({
    title: campaign?.title || '',
    category: campaign?.category || 'concerts',
    targetAmount: campaign?.targetAmount || '',
    durationDays: campaign?.daysLeft || '60',
    date: campaign?.date || '',
    description: campaign?.description || '',
    image: campaign?.image || '',
    venue: campaign?.venue || ''
  });

  const categories = ['concerts', 'music', 'events', 'documentary', 'tour', 'album'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // TODO: Implement actual creation logic with blockchain/API
    console.log('Creating/Updating fan funding:', formData);
    
    alert(isEditing ? 'Campaign updated successfully!' : 'Campaign created successfully!');
    onClose();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
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
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">
              {isEditing ? 'Edit Campaign' : 'Start Fan Funding Campaign'}
            </h2>
            <p className="text-neutral-400 text-sm">
              Collect funds from fans to organize your event
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition"
          >
            <X size={20} className="text-neutral-400" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Campaign Title */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Campaign Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="e.g., Indie Artist Summer Tour"
              className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 outline-none focus:border-amber-500 transition"
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
              className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white outline-none focus:border-amber-500 transition cursor-pointer"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Target Amount and Duration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                <Target size={16} className="inline mr-1" />
                Target Amount (₹) *
              </label>
              <input
                type="number"
                name="targetAmount"
                value={formData.targetAmount}
                onChange={handleChange}
                required
                min="1000"
                placeholder="750000"
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 outline-none focus:border-amber-500 transition"
              />
              <p className="text-xs text-neutral-500 mt-1">Minimum: ₹1,000</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                <Calendar size={16} className="inline mr-1" />
                Campaign Duration (Days) *
              </label>
              <input
                type="number"
                name="durationDays"
                value={formData.durationDays}
                onChange={handleChange}
                required
                min="1"
                max="365"
                placeholder="60"
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 outline-none focus:border-amber-500 transition"
              />
              <p className="text-xs text-neutral-500 mt-1">Max: 365 days</p>
            </div>
          </div>

          {/* Event Date */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Expected Event Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white outline-none focus:border-amber-500 transition"
            />
          </div>

          {/* Venue */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Venue / Location
            </label>
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              placeholder="e.g., Multiple Cities, Online, Mumbai"
              className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 outline-none focus:border-amber-500 transition"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Campaign Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Describe your campaign, what the funds will be used for, and what contributors will get in return..."
              className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 outline-none focus:border-amber-500 transition resize-none"
            />
            <p className="text-xs text-neutral-500 mt-1">
              Be detailed! Explain how funds will be used and contributor benefits.
            </p>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Campaign Image *
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg cursor-pointer transition">
                <Upload size={20} className="text-amber-400" />
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
              className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 outline-none focus:border-amber-500 transition"
            />
          </div>

          {/* Info Box */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
            <div className="flex gap-3">
              <Users size={20} className="text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-amber-400 font-semibold mb-1">How Fan Funding Works</h4>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Fans contribute to reach your target amount. If the goal is met, funds are released to organize the event. Contributors get exclusive perks, early access, and rewards based on their contribution level.
                </p>
              </div>
            </div>
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
              className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white rounded-lg font-semibold transition shadow-lg shadow-amber-500/30"
            >
              {isEditing ? 'Update Campaign' : 'Launch Campaign'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFanFundModal;
