import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#0F172A] text-white pt-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}
          <div>

            <h2 className="text-4xl font-extrabold">
              <span className="text-orange-500">Travel</span>Go
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              Explore the world's most beautiful destinations with luxury
              hotels, affordable flights and unforgettable travel experiences.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* Company */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <Link to="/" className="hover:text-orange-500 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/" className="hover:text-orange-500 transition">
                  Our Team
                </Link>
              </li>

              <li>
                <Link to="/" className="hover:text-orange-500 transition">
                  Careers
                </Link>
              </li>

              <li>
                <Link to="/" className="hover:text-orange-500 transition">
                  Blog
                </Link>
              </li>

            </ul>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <Link
                  to="/"
                  className="hover:text-orange-500 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/hotels"
                  className="hover:text-orange-500 transition"
                >
                  Hotels
                </Link>
              </li>

              <li>
                <Link
                  to="/flights"
                  className="hover:text-orange-500 transition"
                >
                  Flights
                </Link>
              </li>

              <li>
                <Link
                  to="/packages"
                  className="hover:text-orange-500 transition"
                >
                  Packages
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-orange-500 transition"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-orange-500" />
                <p>New Delhi, India</p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-orange-500" />
                <p>+91 98765 43210</p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-orange-500" />
                <p>support@travelgo.com</p>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 mt-16">

          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

            <p className="text-gray-400 text-center">
              © 2026 TravelGo. All Rights Reserved.
            </p>

            <p className="text-gray-400 mt-4 md:mt-0 text-center">
              Made with ❤️ using React & Tailwind CSS
            </p>

          </div>

        </div>

      </footer>

      {/* Scroll To Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 text-white shadow-xl flex items-center justify-center transition duration-300"
      >
        <FaArrowUp />
      </button>
    </>
  );
}