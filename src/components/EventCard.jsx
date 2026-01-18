const EventCard = ({ event, onClick }) => {
  const isFanFunded = event.type === "fanfund";

  return (
    <div
      onClick={onClick}
      className="group flex-shrink-0 w-80 cursor-pointer overflow-hidden rounded-xl border border-neutral-700 hover:border-violet-500 transition hover:shadow-lg hover:shadow-violet-500/20"
    >
      {/* Event Image */}
      <div className="relative h-64 overflow-hidden bg-neutral-800">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Event Details */}
      <div className="p-5 bg-neutral-900/50 backdrop-blur">
        {/* Title and Badge */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-white truncate flex-1">{event.title}</h3>
          {isFanFunded ? (
            <span className="text-amber-400 text-xs font-bold ml-2 px-2 py-1 bg-amber-900/30 rounded-lg whitespace-nowrap">
              🎉 Fan Fund
            </span>
          ) : (
            <span className="text-violet-400 text-sm font-semibold ml-2">⭐ {event.rating}</span>
          )}
        </div>

        {/* Venue */}
        <p className="text-sm text-neutral-400 mb-1">📍 {event.venue}</p>

        {/* Date & Time */}
        <p className="text-sm text-neutral-400 mb-1">
          📅 {new Date(event.date).toLocaleDateString("en-IN")} • ⏰ {event.time}
        </p>

        {/* Description */}
        <p className="text-xs text-neutral-500 mb-4">{event.description}</p>

        {/* Price/Funding and Button */}
        <div className="flex justify-between items-center pt-4 border-t border-neutral-700">
          {isFanFunded ? (
            <div>
              <p className="text-xs text-neutral-400">Raised</p>
              <span className="text-2xl font-bold text-amber-400">
                ₹{event.raisedAmount?.toLocaleString() || 0}
              </span>
            </div>
          ) : (
            <div>
              <p className="text-xs text-neutral-400">Starting from</p>
              <span className="text-2xl font-bold text-violet-500">₹{event.price}</span>
            </div>
          )}
          <button className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-lg transition font-semibold text-sm">
            {isFanFunded ? "View" : "Book Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
