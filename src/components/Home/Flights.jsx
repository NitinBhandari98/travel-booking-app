import { FaPlaneDeparture } from "react-icons/fa";

const flights = [
  {
    id: 1,
    from: "Delhi",
    to: "Dubai",
    price: "₹18,999",
    time: "4h 20m",
  },
  {
    id: 2,
    from: "Mumbai",
    to: "Goa",
    price: "₹5,499",
    time: "1h 15m",
  },
  {
    id: 3,
    from: "Bangalore",
    to: "Manali",
    price: "₹8,999",
    time: "2h 45m",
  },
];

export default function Flights() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold uppercase tracking-widest">
            Flights
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Best Flight Deals
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Book domestic and international flights at unbeatable prices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {flights.map((flight) => (
            <div
              key={flight.id}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-orange-100 p-4 rounded-full">
                  <FaPlaneDeparture className="text-3xl text-orange-500" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center">
                {flight.from} → {flight.to}
              </h3>

              <p className="text-center text-gray-500 mt-3">
                Flight Time: {flight.time}
              </p>

              <h4 className="text-center text-3xl font-bold text-orange-500 mt-6">
                {flight.price}
              </h4>

              <button className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold transition">
                Book Flight
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}