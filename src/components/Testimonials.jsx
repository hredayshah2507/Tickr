import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide py-20 border-b border-neutral-800">
      <div className="text-center mb-16">
        <span className="bg-neutral-900 text-violet-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Community Love
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 lg:my-12">
          Users Love TicketChain
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Hear from real users about their experience with blockchain-powered ticket booking
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-neutral-900/50 backdrop-blur rounded-lg p-6 border border-neutral-700 hover:border-violet-500 transition hover:shadow-lg hover:shadow-violet-500/10"
          >
            {/* Stars */}
            <div className="text-violet-500 mb-3 text-lg">⭐⭐⭐⭐⭐</div>

            {/* Testimonial Text */}
            <p className="text-neutral-200 mb-6 text-sm leading-relaxed italic">
              "{testimonial.text}"
            </p>

            {/* User Info */}
            <div className="flex items-center gap-4 pt-4 border-t border-neutral-700">
              <img
                className="w-12 h-12 rounded-full border-2 border-violet-500 object-cover"
                src={testimonial.image}
                alt={testimonial.user}
              />
              <div>
                <h6 className="font-bold text-white">{testimonial.user}</h6>
                <span className="text-xs font-normal text-neutral-400">
                  {testimonial.company}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-3 gap-6">
        <div className="text-center p-6 rounded-lg border border-neutral-700">
          <div className="text-3xl font-bold text-violet-500 mb-2">9.8/10</div>
          <div className="text-neutral-400 text-sm">Average Rating</div>
        </div>
        <div className="text-center p-6 rounded-lg border border-neutral-700">
          <div className="text-3xl font-bold text-violet-500 mb-2">98%</div>
          <div className="text-neutral-400 text-sm">Satisfaction Rate</div>
        </div>
        <div className="text-center p-6 rounded-lg border border-neutral-700">
          <div className="text-3xl font-bold text-violet-500 mb-2">50K+</div>
          <div className="text-neutral-400 text-sm">Happy Customers</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
