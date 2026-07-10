export default function HotelInfo({ hotel }) {
  return (
    <div className="mt-10">

      {/* Hotel Name */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>
          <h1 className="text-4xl font-bold">
            {hotel.name}
          </h1>

          <p className="text-gray-500 mt-2">
            📍 {hotel.location}
          </p>
        </div>

        <div className="bg-orange-500 text-white px-5 py-3 rounded-2xl text-center">
          <h2 className="text-2xl font-bold">
            ⭐ {hotel.rating}
          </h2>
          <p className="text-sm">Excellent</p>
        </div>

      </div>

      {/* Description */}
      <p className="mt-8 text-gray-600 leading-8">
        Experience luxury like never before. Enjoy spacious rooms,
        breathtaking views, premium dining, infinity pool,
        spa treatments and world-class hospitality. Perfect for
        family vacations, romantic getaways and business trips.
      </p>

      {/* Hotel Features */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

        <div className="bg-gray-100 rounded-2xl p-5 text-center">
          <h3 className="text-3xl">🛏️</h3>
          <p className="mt-2 font-semibold">2 Bedrooms</p>
        </div>

        <div className="bg-gray-100 rounded-2xl p-5 text-center">
          <h3 className="text-3xl">👥</h3>
          <p className="mt-2 font-semibold">4 Guests</p>
        </div>

        <div className="bg-gray-100 rounded-2xl p-5 text-center">
          <h3 className="text-3xl">📶</h3>
          <p className="mt-2 font-semibold">Free WiFi</p>
        </div>

        <div className="bg-gray-100 rounded-2xl p-5 text-center">
          <h3 className="text-3xl">🏊</h3>
          <p className="mt-2 font-semibold">Swimming Pool</p>
        </div>

      </div>

    </div>
  );
}