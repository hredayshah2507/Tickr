import { X } from "lucide-react";

const EventModal = ({ event, isOpen, onClose }) => {
  if (!isOpen) return null;

  // Determine event type
  const isFanFunded = event.type === "fanfund";

  // Calculate funding percentage
  let fundingPercentage = 0;
  if (isFanFunded && event.targetAmount) {
    fundingPercentage = Math.round((event.raisedAmount / event.targetAmount) * 100);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark translucent backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal card */}
      <div className="relative z-10 w-full max-w-2xl bg-neutral-900 rounded-xl border border-neutral-700 overflow-hidden shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition z-20"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Event Image */}
        <div className="relative h-80 overflow-hidden bg-neutral-800">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
        </div>

        {/* Modal Content */}
        <div className="p-8">
          {/* Title */}
          <h2 className="text-3xl font-bold text-white mb-2">{event.title}</h2>

          {/* Description */}
          <p className="text-neutral-300 text-lg mb-6">{event.description}</p>

          {/* Date & Venue */}
          <div className="space-y-3 mb-8 pb-8 border-b border-neutral-700">
            <div className="flex items-center gap-3">
              <span className="text-violet-500 text-xl">📅</span>
              <span className="text-neutral-300">
                {new Date(event.date).toLocaleDateString("en-IN", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                • {event.time}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-violet-500 text-xl">📍</span>
              <span className="text-neutral-300">{event.venue}</span>
            </div>
          </div>

          {/* Regular Event - Ticket Booking */}
          {!isFanFunded && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-400 mb-1">Starting Price</p>
                  <p className="text-3xl font-bold text-violet-500">₹{event.price}</p>
                </div>
                <button className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105">
                  Book Ticket
                </button>
              </div>
            </div>
          )}

          {/* Fan-Funded Event */}
          {isFanFunded && (
            <div className="space-y-6">
              {/* Funding Progress */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-neutral-300 font-semibold">Funding Progress</span>
                  <span className="text-violet-500 font-bold text-lg">{fundingPercentage}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-500 to-violet-600 rounded-full transition-all duration-500"
                    style={{ width: `${fundingPercentage}%` }}
                  />
                </div>

                {/* Funding amounts */}
                <div className="flex items-center justify-between mt-3 text-sm">
                  <span className="text-neutral-400">
                    Raised: <span className="text-violet-400 font-semibold">₹{event.raisedAmount?.toLocaleString()}</span>
                  </span>
                  <span className="text-neutral-400">
                    Target: <span className="text-violet-400 font-semibold">₹{event.targetAmount?.toLocaleString()}</span>
                  </span>
                </div>
              </div>

              {/* Fan count (optional) */}
              {event.contributors && (
                <div className="text-center py-4 bg-neutral-800/50 rounded-lg">
                  <p className="text-neutral-300">
                    <span className="font-bold text-violet-400">{event.contributors}</span> fans supporting this artist
                  </p>
                </div>
              )}

              {/* Contribute Button */}
              <button className="w-full px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105">
                Contribute to Funding
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventModal;
