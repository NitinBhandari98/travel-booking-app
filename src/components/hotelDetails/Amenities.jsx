export default function Amenities() {
  const amenities = [
    "🏊 Swimming Pool",
    "📶 Free WiFi",
    "🍽 Restaurant",
    "🚗 Free Parking",
    "💪 Fitness Center",
    "🧖 Spa & Wellness",
    "🛎 Room Service",
    "❄ Air Conditioning",
    "☕ Breakfast Included",
    "👨‍👩‍👧 Family Rooms",
    "🔒 24/7 Security",
    "🐶 Pet Friendly",
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">
      <h2 className="text-3xl font-bold mb-8">
        Hotel Amenities
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {amenities.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl p-4 text-center font-medium hover:bg-orange-500 hover:text-white transition duration-300"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}