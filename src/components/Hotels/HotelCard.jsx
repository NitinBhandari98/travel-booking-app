import { FaHeart, FaMapMarkerAlt, FaStar, FaWifi, FaSwimmingPool } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HotelCard({ hotel }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      {/* Hotel Image */}
      <div className="relative overflow-hidden">

        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
        />

        {/* Rating */}
        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow">
          <FaStar className="text-yellow-400 text-sm" />
          <span className="font-semibold text-sm">{hotel.rating}</span>
        </div>

        {/* Wishlist */}
        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow hover:bg-orange-500 hover:text-white transition">
          <FaHeart />
        </button>

      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-2xl font-bold text-gray-800">
          {hotel.name}
        </h3>

        <p className="flex items-center gap-2 text-gray-500 mt-2">
          <FaMapMarkerAlt className="text-orange-500" />
          {hotel.location}
        </p>

        {/* Amenities */}
        <div className="flex gap-4 mt-5 text-gray-500">

          <div className="flex items-center gap-2">
            <FaWifi className="text-orange-500" />
            <span className="text-sm">Free WiFi</span>
          </div>

          <div className="flex items-center gap-2">
            <FaSwimmingPool className="text-orange-500" />
            <span className="text-sm">Pool</span>
          </div>

        </div>

        {/* Price */}
        <div className="flex justify-between items-center mt-8">

          <div>
            <p className="text-sm text-gray-400">
              Starting From
            </p>

            <h4 className="text-3xl font-bold text-orange-500">
              {hotel.price}
              <span className="text-base text-gray-500 font-medium">
                {" "}/night
              </span>
            </h4>
          </div>

          <Link
            to={`/hotel/${hotel.id}`}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Book Now
          </Link>

        </div>

      </div>

    </div>
  );
}