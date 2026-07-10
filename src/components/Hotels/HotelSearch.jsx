export default function HotelSearch() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 mb-10">

      <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-5">

        {/* Destination */}
        <div>
          <label className="block text-sm font-semibold text-gray-500 mb-2">
            Destination
          </label>

          <input
            type="text"
            placeholder="Where are you going?"
            className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-orange-500"
          />
        </div>

        {/* Check In */}
        <div>
          <label className="block text-sm font-semibold text-gray-500 mb-2">
            Check In
          </label>

          <input
            type="date"
            className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-orange-500"
          />
        </div>

        {/* Check Out */}
        <div>
          <label className="block text-sm font-semibold text-gray-500 mb-2">
            Check Out
          </label>

          <input
            type="date"
            className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-orange-500"
          />
        </div>

        {/* Guests */}
        <div>
          <label className="block text-sm font-semibold text-gray-500 mb-2">
            Guests
          </label>

          <select className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-orange-500">
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
            <option>5+ Guests</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="flex items-end">

          <button className="w-full h-14 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg transition duration-300">
            🔍 Search
          </button>

        </div>

      </div>

    </div>
  );
}