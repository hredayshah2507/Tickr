import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CategoryNav from "./components/CategoryNav";
import EventsCarousel from "./components/EventsCarousel";
import FeatureSection from "./components/FeatureSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { events, categories, fanFundedEvents } from "./constants";

const App = () => {
  const [activeCategory, setActiveCategory] = useState("movies");
  const [viewMode, setViewMode] = useState("regular"); // "regular" or "fanfund"

  const categoryName = categories.find(c => c.id === activeCategory)?.name || "Movies";
  const categoryEvents = events[activeCategory] || [];

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-10 px-6">
        <HeroSection />
        <CategoryNav activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        
        {/* Toggle Button for Events / Fan Funding */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setViewMode("regular")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition duration-300 ${
                viewMode === "regular"
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/50"
                  : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white"
              }`}
            >
              Events
            </button>
            <button
              onClick={() => setViewMode("fanfund")}
              className={`px-6 py-2.5 rounded-lg font-semibold transition duration-300 ${
                viewMode === "fanfund"
                  ? "bg-amber-600 text-white shadow-lg shadow-amber-500/50"
                  : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white"
              }`}
            >
              Fan Funding
            </button>
          </div>
        </div>

        {/* Regular Events Section */}
        {viewMode === "regular" && (
          <EventsCarousel 
            category={activeCategory} 
            events={categoryEvents}
            categoryName={categoryName}
            isFanFund={false}
          />
        )}

        {/* Fan Funded Events Section */}
        {viewMode === "fanfund" && (
          <EventsCarousel 
            category="fanfund" 
            events={fanFundedEvents}
            categoryName="Fan Funding Pools"
            isFanFund={true}
          />
        )}

        <FeatureSection />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
