import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div id="features" className="relative mt-20 py-20 border-b border-neutral-800">
      <div className="text-center mb-16">
        <span className="bg-neutral-900 text-violet-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Web3 Advantages
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Blockchain-Powered
          <span className="bg-gradient-to-r from-violet-500 to-violet-800 text-transparent bg-clip-text">
            {" "}
            Ticketing
          </span>
        </h2>
        <p className="mt-6 text-lg text-neutral-400 max-w-3xl mx-auto">
          Discover how blockchain technology revolutionizes event ticketing with transparency, security, and true ownership.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-neutral-700 hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/10 transition group bg-neutral-900/50 backdrop-blur"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 p-2 bg-violet-500/20 text-violet-500 justify-center items-center rounded-lg group-hover:bg-violet-500/30 transition">
                {feature.icon}
              </div>
              <div>
                <h5 className="text-xl font-bold text-white mb-2">{feature.text}</h5>
                <p className="text-neutral-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Security Badge */}
      <div className="mt-16 p-6 rounded-xl border border-violet-500/50 bg-gradient-to-r from-violet-500/10 to-transparent">
        <div className="flex items-center gap-4">
          <div className="text-4xl">🔒</div>
          <div>
            <h3 className="text-xl font-bold">Enterprise-Grade Security</h3>
            <p className="text-neutral-400">All transactions secured by Ethereum blockchain with multi-signature security.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
