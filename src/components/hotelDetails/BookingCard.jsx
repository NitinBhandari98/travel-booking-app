import { Link } from "react-router-dom";

export default function BookingCard({ hotel }) {
  const taxes = 599;
  const total = hotel.price + taxes;

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-24">

      {/* Price */}
      <div className="border-b pb-6">
        <h2 className="text-4xl font-bold text-orange-500">
          ₹{hotel.price.toLocaleString()}
          <span className="text-lg text-gray-500 font-medium">
            {" "}/ night
          </span>
        </h2>

        <p className="text-gray-500 mt-2">
          ⭐ {hotel.rating} (2,450 Reviews)
        </p>
      </div>

      {/* Booking Form */}
      <div className="space-y-5 mt-8">

        <div>
          <label className="block text-sm font-semibold text-gray-500 mb-2">
            Check In
          </label>

          <input
            type="date"
            className="w-full h-14 px-5 border rounded-2xl outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-500 mb-2">
            Check Out
          </label>

          <input
            type="date"
            className="w-full h-14 px-5 border rounded-2xl outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-500 mb-2">
            Guests
          </label>

          <select className="w-full h-14 px-5 border rounded-2xl outline-none focus:border-orange-500">
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
            <option>5+ Guests</option>
          </select>
        </div>

      </div>

      {/* Price Summary */}
      <div className="border-t mt-8 pt-6 space-y-3">

        <div className="flex justify-between">
          <span>Room Price</span>
          <span>₹{hotel.price.toLocaleString()}</span>
        </div>

        <div className="flex justify-between">
          <span>Taxes & Fees</span>
          <span>₹{taxes}</span>
        </div>

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span className="text-orange-500">
            ₹{total.toLocaleString()}
          </span>
        </div>

      </div>

      <Link
        to="/booking"
        className="w-full mt-8 h-14 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg flex items-center justify-center transition"
      >
        Reserve Now
      </Link>

    </div>
  );
}