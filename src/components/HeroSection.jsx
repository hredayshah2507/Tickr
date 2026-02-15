import { Wallet } from "lucide-react";
import { events } from "../constants";

const HeroSection = () => {
  // Get featured events (first 3 from movies as featured)
  const featuredEvents = events.movies.slice(0, 3);

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 mb-16">
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide font-bold">
        Book Events on
        <span className="bg-gradient-to-r from-violet-500 to-violet-800 text-transparent bg-clip-text">
          {" "}
          Blockchain
        </span>
      </h1>

      {/* Subheading */}
      <p className="mt-6 text-lg text-center text-neutral-400 max-w-4xl">
        Experience trustless ticketing with NFT-based events. Zero scalping, instant payments, and true ownership of your tickets.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 my-10">
        <button className="bg-gradient-to-r from-violet-500 to-violet-800 hover:shadow-lg hover:shadow-violet-500/50 py-4 px-6 rounded-lg text-white font-semibold flex items-center justify-center gap-2 transition">
          <Wallet size={20} />
          Connect MetaMask
        </button>
        <a
          href="#browse"
          className="py-4 px-6 rounded-lg border border-violet-500 text-violet-500 hover:bg-violet-500/10 font-semibold transition text-center"
        >
          Browse Events
        </a>
      </div>

      {/* Featured Events Carousel */}
      <div className="w-full mt-16">
        <h2 className="text-3xl font-bold mb-8">Featured Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <div
              key={event.id}
              className="group cursor-pointer overflow-hidden rounded-xl border border-neutral-700 hover:border-orange-500 transition"
            >
              {/* Event Image */}
              <div className="relative h-64 overflow-hidden bg-neutral-800">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-xl font-bold text-white">{event.title}</h3>
                  <p className="text-violet-400 text-sm">⭐ {event.rating}</p>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-4 bg-neutral-900/50 backdrop-blur">
                <p className="text-sm text-neutral-400">📍 {event.venue}</p>
                <p className="text-sm text-neutral-400 mt-1">📅 {event.date}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-2xl font-bold text-violet-500">₹{event.price}</span>
                  <button className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="w-full mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-4 border border-neutral-700 rounded-lg hover:border-violet-500 transition">
          <div className="text-3xl font-bold text-violet-500">10K+</div>
          <div className="text-neutral-400 text-sm mt-2">Events Listed</div>
        </div>
        <div className="text-center p-4 border border-neutral-700 rounded-lg hover:border-violet-500 transition">
          <div className="text-3xl font-bold text-violet-500">50K+</div>
          <div className="text-neutral-400 text-sm mt-2">Happy Users</div>
        </div>
        <div className="text-center p-4 border border-neutral-700 rounded-lg hover:border-violet-500 transition">
          <div className="text-3xl font-bold text-violet-500">$5M+</div>
          <div className="text-neutral-400 text-sm mt-2">Volume Traded</div>
        </div>
        <div className="text-center p-4 border border-neutral-700 rounded-lg hover:border-violet-500 transition">
          <div className="text-3xl font-bold text-violet-500">0%</div>
          <div className="text-neutral-400 text-sm mt-2">Black Market</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
