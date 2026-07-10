export default function HotelFilters({
  price,
  setPrice,
  rating,
  setRating,
}) {
  return (
    <aside className="bg-white rounded-3xl shadow-lg p-6 sticky top-24">

      <h2 className="text-2xl font-bold mb-6">
        Filters
      </h2>

      {/* Price */}
      <div className="mb-8">
        <h3 className="font-semibold mb-3">
          Max Price
        </h3>

        <input
          type="range"
          min="1000"
          max="10000"
          step="500"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-orange-500"
        />

        <div className="flex justify-between mt-2">
          <span>₹1,000</span>
          <span className="font-bold text-orange-500">
            ₹{price.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-8">
        <h3 className="font-semibold mb-3">
          Minimum Rating
        </h3>

        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full border rounded-xl p-3"
        >
          <option value="0">All Ratings</option>
          <option value="3">3★ & Above</option>
          <option value="4">4★ & Above</option>
          <option value="4.5">4.5★ & Above</option>
        </select>
      </div>

      <button
        onClick={() => {
          setPrice(10000);
          setRating(0);
        }}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold"
      >
        Reset Filters
      </button>

    </aside>
  );
}