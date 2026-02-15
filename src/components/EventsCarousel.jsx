import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import EventCard from "./EventCard";
import EventModal from "./EventModal";

const EventsCarousel = ({ category, events, categoryName, isFanFund = false }) => {
  const carouselRef = useRef(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!events || events.length === 0) {
    return null;
  }

  return (
    <>
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{categoryName}</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-violet-500 transition"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-violet-500 transition"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
        >
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onClick={() => setSelectedEvent(event)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <EventModal
        event={selectedEvent}
        isOpen={selectedEvent !== null}
        onClose={() => setSelectedEvent(null)}
      />
    </>
  );
};

export default EventsCarousel;
