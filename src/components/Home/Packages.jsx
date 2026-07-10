import { Link } from "react-router-dom";

const packages = [
  {
    id: 1,
    title: "Goa Beach Escape",
    days: "4 Days / 3 Nights",
    price: "₹19,999",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
  },
  {
    id: 2,
    title: "Dubai Luxury Tour",
    days: "5 Days / 4 Nights",
    price: "₹49,999",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
  },
  {
    id: 3,
    title: "Maldives Honeymoon",
    days: "6 Days / 5 Nights",
    price: "₹79,999",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800",
  },
];

export default function Packages() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold uppercase tracking-widest">
            Holiday Packages
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Best Travel Packages
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Choose from our carefully designed holiday packages and enjoy a
            stress-free vacation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">{pkg.title}</h3>

                <p className="text-gray-500 mt-2">{pkg.days}</p>

                <div className="flex justify-between items-center mt-6">
                  <h4 className="text-3xl font-bold text-orange-500">
                    {pkg.price}
                  </h4>

                  <Link
                    to="/packages"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-full transition"
                  >
                    View
                  </Link>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}