import HotelCard from "../components/hotels/HotelCard";
import HotelSearch from "../components/hotels/HotelSearch";
import HotelFilters from "../components/hotels/HotelFilters";
import HotelPagination from "../components/hotels/HotelPagination";

const hotels = [
  {
    id: 1,
    name: "Taj Resort",
    location: "Goa",
    rating: 4.8,
    price: "₹4,999",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900",
  },
  {
    id: 2,
    name: "Sea View Resort",
    location: "Maldives",
    rating: 4.9,
    price: "₹8,999",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900",
  },
  {
    id: 3,
    name: "Royal Palace",
    location: "Dubai",
    rating: 4.7,
    price: "₹6,999",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900",
  },
  {
    id: 4,
    name: "Mountain View",
    location: "Manali",
    rating: 4.6,
    price: "₹3,999",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900",
  },
  {
    id: 5,
    name: "Beach Paradise",
    location: "Bali",
    rating: 4.9,
    price: "₹9,999",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900",
  },
  {
    id: 6,
    name: "Snow Resort",
    location: "Switzerland",
    rating: 5.0,
    price: "₹14,999",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900",
  },
];

export default function HotelsPage() {
  return (
    <section className="bg-gray-50 min-h-screen py-28">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12 text-center">

          <h1 className="text-5xl font-bold">
            Find Your Perfect Stay
          </h1>

          <p className="text-gray-500 mt-4">
            Discover luxury hotels at the best prices around the world.
          </p>

        </div>

        {/* Search */}
        <HotelSearch />

        {/* Layout */}
        <div className="grid lg:grid-cols-4 gap-8 mt-10">

          {/* Sidebar */}
          <div>
            <HotelFilters />
          </div>

          {/* Hotels */}
          <div className="lg:col-span-3">

            <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8">

              {hotels.map((hotel) => (
                <HotelCard
                  key={hotel.id}
                  hotel={hotel}
                />
              ))}

            </div>

            <HotelPagination />

          </div>

        </div>

      </div>

    </section>
  );
}