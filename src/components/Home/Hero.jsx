import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserFriends,
  FaPlaneDeparture,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=2000"
        alt="Travel"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">

        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400 text-orange-300 px-5 py-2 rounded-full font-semibold backdrop-blur-md">
              <FaPlaneDeparture />
              Explore The World
            </span>

            <h1 className="text-white text-6xl lg:text-7xl font-extrabold leading-tight mt-8">
              Discover Your
              <br />
              <span className="text-orange-400">
                Dream Vacation
              </span>
            </h1>

            <p className="text-gray-200 text-lg leading-8 mt-8 max-w-xl">
              Book luxury hotels, flights and holiday packages at the
              best prices. Explore amazing destinations with unforgettable
              experiences.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl transition">
                Explore Now
              </button>

              <button className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
                Learn More
              </button>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-14">

              <div>
                <h2 className="text-4xl font-bold text-white">500+</h2>
                <p className="text-gray-300 mt-2">Luxury Hotels</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-white">120+</h2>
                <p className="text-gray-300 mt-2">Destinations</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-white">50K+</h2>
                <p className="text-gray-300 mt-2">Happy Travelers</p>
              </div>

            </div>

          </motion.div>
                  {/* RIGHT SIDE - Search Card */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/15 backdrop-blur-xl shadow-2xl p-8">

              <h2 className="text-3xl font-bold text-white mb-8">
                Search Your Trip
              </h2>

              <div className="space-y-5">

                <div className="flex items-center rounded-2xl bg-white/20 px-4 h-14">
                  <FaMapMarkerAlt className="text-orange-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Destination"
                    className="w-full bg-transparent text-white placeholder:text-gray-300 outline-none"
                  />
                </div>

                <div className="flex items-center rounded-2xl bg-white/20 px-4 h-14">
                  <FaCalendarAlt className="text-orange-400 mr-3" />
                  <input
                    type="date"
                    className="w-full bg-transparent text-white outline-none"
                  />
                </div>

                <div className="flex items-center rounded-2xl bg-white/20 px-4 h-14">
                  <FaCalendarAlt className="text-orange-400 mr-3" />
                  <input
                    type="date"
                    className="w-full bg-transparent text-white outline-none"
                  />
                </div>

                <div className="flex items-center rounded-2xl bg-white/20 px-4 h-14">
                  <FaUserFriends className="text-orange-400 mr-3" />
                  <select className="w-full bg-transparent text-white outline-none">
                    <option className="text-black">1 Guest</option>
                    <option className="text-black">2 Guests</option>
                    <option className="text-black">3 Guests</option>
                    <option className="text-black">4 Guests</option>
                  </select>
                </div>

                <button className="w-full h-14 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg transition">
                  Search Hotels
                </button>

              </div>

              <div className="grid grid-cols-3 gap-3 mt-8">

                <div className="rounded-2xl bg-white/20 py-4 text-center">
                  <h3 className="text-orange-400 font-bold">24/7</h3>
                  <p className="text-xs text-white">Support</p>
                </div>

                <div className="rounded-2xl bg-white/20 py-4 text-center">
                  <h3 className="text-orange-400 font-bold">100%</h3>
                  <p className="text-xs text-white">Secure</p>
                </div>

                <div className="rounded-2xl bg-white/20 py-4 text-center">
                  <h3 className="text-orange-400 font-bold">Best</h3>
                  <p className="text-xs text-white">Price</p>
                </div>

              </div>

            </div>
          </motion.div>
                  </div>

        {/* Floating Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hidden lg:flex absolute bottom-12 left-1/2 -translate-x-1/2 bg-white rounded-3xl shadow-2xl px-8 py-5 items-center gap-6"
        >
          <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-white text-3xl">
            ✈️
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800">
              50,000+ Happy Travelers
            </h3>

            <p className="text-gray-500">
              Trusted by travelers across the world.
            </p>
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center"
      >
        <p className="text-sm tracking-widest mb-2">
          SCROLL DOWN
        </p>

        <div className="w-7 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>

    </section>
  );
}