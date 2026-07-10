import { Link } from "react-router-dom";

const destinations = [
  {
    id: 1,
    name: "Goa",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
  },
  {
    id: 2,
    name: "Manali",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
  },
  {
    id: 3,
    name: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
  },
  {
    id: 4,
    name: "Maldives",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800",
  },
];

export default function Destinations() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold uppercase tracking-widest">
            Top Places
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Popular Destinations
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Discover the most loved travel destinations around the world.
            Explore beaches, mountains, luxury cities and unforgettable experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {destinations.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6 text-center">

                <h3 className="text-2xl font-bold">
                  {item.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  Luxury hotels, beaches & adventures
                </p>

                <Link
                  to="/hotels"
                  className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-full font-semibold transition"
                >
                  Explore
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}