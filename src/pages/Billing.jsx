import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { events, fanFundedEvents } from "../constants";

const Billing = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Data coming from EventModal
  const { eventId, seats = 1 } = location.state || {};

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [txStatus, setTxStatus] = useState("idle");
  // idle | pending | success | failed

  useEffect(() => {
    // Prevent direct access without event data
    if (!eventId) {
      console.log("No eventId provided, redirecting to home");
      navigate("/");
      return;
    }

    console.log("Looking for event with ID:", eventId);
    console.log("Events structure:", events);
    console.log("Fan funded events:", fanFundedEvents);

    // Search in all event categories
    let selectedEvent = null;
    
    // Search in regular events (all categories)
    if (events && typeof events === 'object') {
      Object.keys(events).forEach(category => {
        const categoryEvents = events[category];
        if (Array.isArray(categoryEvents)) {
          const found = categoryEvents.find((e) => e.id === eventId);
          if (found) {
            console.log("Found event in category:", category, found);
            selectedEvent = found;
          }
        }
      });
    }
    
    // If not found, search in fan-funded events
    if (!selectedEvent && Array.isArray(fanFundedEvents)) {
      selectedEvent = fanFundedEvents.find((e) => e.id === eventId);
      if (selectedEvent) {
        console.log("Found event in fan-funded events:", selectedEvent);
      }
    }
    
    if (!selectedEvent) {
      console.error("Event not found with ID:", eventId);
    }
    
    setEvent(selectedEvent);
    setLoading(false);
  }, [eventId, navigate]);

  // Show loading state
  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-950 text-white px-6 py-10 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-violet-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading event details...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Show error if event not found
  if (!event) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-950 text-white px-6 py-10">
          <div className="app-card max-w-3xl mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4 text-red-400">Event Not Found</h1>
            <p className="text-gray-400 mb-6">
              We couldn't find the event you're trying to book. This might be because:
            </p>
            <ul className="text-left text-gray-400 mb-6 space-y-2">
              <li>• The event ID is invalid</li>
              <li>• The event has been removed</li>
              <li>• There was an error loading the event data</li>
            </ul>
            <button
              onClick={() => navigate("/")}
              className="btn-primary"
            >
              Back to Home
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const totalPrice = event.price * seats;

  const handlePayment = async () => {
    try {
      setTxStatus("pending");

      // 🔗 Blockchain transaction logic will go here later
      // Example: contract.bookEvent(eventId, seats, { value: ... })

      // Temporary simulation
      setTimeout(() => {
        setTxStatus("success");
      }, 2000);
    } catch (error) {
      console.error(error);
      setTxStatus("failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-950 text-white px-6 py-10">
        <div className="app-card max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">
            Billing & Confirmation
          </h1>

          {/* Event Summary */}
          <div className="section-divider space-y-3">
            <p>
              <span className="text-gray-400">Event:</span>{" "}
              <span className="font-semibold">{event.title}</span>
            </p>
            <p>
              <span className="text-gray-400">Date:</span>{" "}
              {event.date}
            </p>
            <p>
              <span className="text-gray-400">Venue:</span>{" "}
              {event.venue}
            </p>
            <p>
              <span className="text-gray-400">Seats:</span>{" "}
              {seats}
            </p>
            <p>
              <span className="text-gray-400">
                Price per seat:
              </span>{" "}
              ₹{event.price}
            </p>
            <p className="text-lg font-semibold">
              Total: ₹{totalPrice}
            </p>
          </div>

          {/* Action / Transaction State */}
          <div className="mt-6">
            {txStatus === "idle" && (
              <button
                onClick={handlePayment}
                className="btn-primary"
              >
                Confirm & Pay
              </button>
            )}

            {txStatus === "pending" && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-400 mx-auto mb-4"></div>
                <p className="tx-pending text-lg">
                  Transaction pending… confirm in wallet
                </p>
              </div>
            )}

            {txStatus === "success" && (
              <div className="tx-success space-y-4 text-center py-8">
                <div className="text-6xl mb-4">🎉</div>
                <p className="text-2xl font-bold text-green-400">Payment Successful!</p>
                <p className="text-gray-400">Your ticket has been booked successfully.</p>
                <button
                  onClick={() => navigate("/")}
                  className="btn-primary mt-4"
                >
                  Back to Home
                </button>
              </div>
            )}

            {txStatus === "failed" && (
              <div className="text-center py-8">
                <p className="tx-failed text-lg mb-4">
                  Transaction failed. Please try again.
                </p>
                <button
                  onClick={() => setTxStatus("idle")}
                  className="btn-primary"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Billing;