import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-700">
      {/* CTA Section */}
      <div className="py-16 px-6 bg-gradient-to-r from-violet-900/20 to-transparent rounded-lg mb-12">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Book Your First NFT Ticket?</h3>
          <p className="text-neutral-400 mb-6">Join thousands of users experiencing trustless event ticketing with blockchain</p>
          <button className="bg-gradient-to-r from-violet-500 to-violet-800 hover:shadow-lg hover:shadow-violet-500/50 text-white px-8 py-3 rounded-lg font-semibold transition">
            Start Booking Now
          </button>
        </div>
      </div>

      <div className="py-10">
        {/* Main Footer Links */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4 text-violet-500">Tixly</h3>
            <p className="text-neutral-400 text-sm">Blockchain-powered event ticketing platform</p>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-violet-500 transition text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-violet-500 transition text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-violet-500 transition text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-neutral-500 text-sm">
            © 2025 Tixly. All rights reserved. | Built on Ethereum
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-neutral-400 hover:text-violet-500 transition">Privacy Policy</a>
            <a href="#" className="text-neutral-400 hover:text-violet-500 transition">Terms of Service</a>
            <a href="#" className="text-neutral-400 hover:text-violet-500 transition">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
