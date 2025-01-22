import { FaFacebook, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 bg-[#b71515] text-white">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Image Column */}
        <div className="w-full md:w-1/3">
          <h2 className="font-bold text-lg mb-3">Our Team</h2>
          <img
            src="/logo.webp"
            alt="Liverpool Team"
            className="w-10 h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Quick Links Column */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h2 className="font-bold text-lg mb-3">Quick Links</h2>
          <ul>
            <li>
              <a href="/" className="hover:underline text-white">
                Team News
              </a>
            </li>
            <li>
              <a href="/players" className="hover:underline text-white">
                Players
              </a>
            </li>
            <li>
              <a href="/fixtures" className="hover:underline text-white">
                Fixtures
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links Column */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h2 className="font-bold text-lg mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <ul>
              <li>
                <a href="#" className="text-white">
                  <FaFacebook size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  <FaTwitter size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  <FaYoutube size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  <FaTiktok size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom: Copyright Text */}
      <div className="py-2 flex justify-center text-center mt-8">
        <p className="text-white text-sm">
          &copy; {new Date().getFullYear()} Liverpoolnews. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
