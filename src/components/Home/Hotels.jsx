import HotelCard from "../Hotels/HotelCard";
import { auth, db } from "../../firebase";

const hotels = [
  {
    id: 1,
    name: "Taj Resort Goa",
    location: "Goa, India",
    price: 4999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
  },
  {
    id: 2,
    name: "Snow Peak Resort",
    location: "Manali, India",
    price: 3999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
  },
  {
    id: 3,
    name: "Royal Palm Dubai",
    location: "Dubai, UAE",
    price: 8999,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
  },
];

export default function Hotels() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="text-orange-500 font-semibold uppercase tracking-widest">
            Luxury Hotels
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Best Hotels For Your Stay
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Stay at premium hotels with world-class facilities,
            beautiful locations and affordable prices.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {hotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
            />
          ))}

        </div>

      </div>
    </section>
  );
}