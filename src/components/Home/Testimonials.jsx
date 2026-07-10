import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Delhi",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Amazing experience! The hotel booking was smooth and everything was exactly as promised.",
  },
  {
    id: 2,
    name: "Priya Verma",
    location: "Mumbai",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "TravelGo helped me find the best holiday package. Highly recommended for stress-free travel.",
  },
  {
    id: 3,
    name: "Amit Singh",
    location: "Bangalore",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    review:
      "Excellent customer support and great prices. I will definitely book my next trip here.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold uppercase tracking-widest">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            What Our Travelers Say
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Thousands of happy travelers trust TravelGo for unforgettable journeys.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-gray-500">{item.location}</p>
                </div>

              </div>

              <div className="flex gap-1 mt-6 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-600 leading-7 mt-5">
                "{item.review}"
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}