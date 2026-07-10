import { Link } from "react-router-dom";

const packages = [
  {
    id: 1,
    title: "Romantic Maldives",
    days: "5 Days / 4 Nights",
    price: "₹49,999",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=900",
  },
  {
    id: 2,
    title: "Dubai Luxury Tour",
    days: "6 Days / 5 Nights",
    price: "₹59,999",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900",
  },
  {
    id: 3,
    title: "Goa Beach Holiday",
    days: "4 Days / 3 Nights",
    price: "₹19,999",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900",
  },
];

export default function Packages() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex justify-between items-end mb-14">

          <div>
            <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
              Holiday Packages
            </p>

            <h2 className="text-5xl font-bold mt-3">
              Best Travel Deals
            </h2>

            <p className="text-gray-500 mt-4 max-w-xl">
              Choose from our carefully crafted holiday packages
              for unforgettable travel experiences.
            </p>
          </div>

          <Link
            to="/packages"
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-full font-semibold transition"
          >
            View All
          </Link>

        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {packages.map((item) => (

            <div
              key={item.id}
              className="group rounded-[30px] overflow-hidden bg-white shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-3"
            >

              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-7">

                <span className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold">
                  {item.days}
                </span>

                <h3 className="text-2xl font-bold mt-5">
                  {item.title}
                </h3>

                <div className="flex justify-between items-center mt-8">

                  <div>
                    <p className="text-gray-400 text-sm">
                      Starting From
                    </p>

                    <h4 className="text-3xl font-bold text-orange-500">
                      {item.price}
                    </h4>
                  </div>

                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition">
                    Book Now
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}