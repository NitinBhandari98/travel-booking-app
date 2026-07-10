export default function HotelPagination() {
  return (
    <div className="flex justify-center items-center gap-3 mt-14">

      {/* Previous */}
      <button className="w-11 h-11 rounded-full border border-gray-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition">
        ←
      </button>

      {/* Pages */}
      <button className="w-11 h-11 rounded-full bg-orange-500 text-white font-semibold">
        1
      </button>

      <button className="w-11 h-11 rounded-full border border-gray-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition">
        2
      </button>

      <button className="w-11 h-11 rounded-full border border-gray-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition">
        3
      </button>

      <button className="w-11 h-11 rounded-full border border-gray-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition">
        4
      </button>

      {/* Next */}
      <button className="w-11 h-11 rounded-full border border-gray-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition">
        →
      </button>

    </div>
  );
}