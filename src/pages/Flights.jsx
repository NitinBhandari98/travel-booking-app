import { useState } from "react";

const flights = [
  {
    id: 1,
    from: "Delhi",
    to: "Dubai",
    airline: "Emirates",
    price: "₹18,999",
    duration: "3h 45m",
  },
  {
    id: 2,
    from: "Mumbai",
    to: "Maldives",
    airline: "IndiGo",
    price: "₹14,499",
    duration: "2h 30m",
  },
  {
    id: 3,
    from: "Bengaluru",
    to: "Singapore",
    airline: "Singapore Airlines",
    price: "₹24,999",
    duration: "4h 20m",
  },
  {
    id: 4,
    from: "Delhi",
    to: "Goa",
    airline: "Air India",
    price: "₹8,999",
    duration: "2h 15m",
  },
];

export default function Flights() {
  const [search, setSearch] = useState("");

  const filteredFlights = flights.filter(
    (flight) =>
      flight.from.toLowerCase().includes(search.toLowerCase()) ||
      flight.to.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-4">
          Find Your Flight
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Search and compare the best flight deals.
        </p>

        <div className="bg-white rounded-3xl shadow-xl p-6 mb-12">
          <div className="grid md:grid-cols-5 gap-4">

            <input
              type="text"
              placeholder="From / To"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded-xl p-4 outline-none focus:border-orange-500"
            />

            <input
              type="date"
              className="border rounded-xl p-4"
            />

            <select className="border rounded-xl p-4">
              <option>Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>

            <button className="bg-orange-500 text-white rounded-xl font-semibold">
              Search
            </button>

            <button
              onClick={() => setSearch("")}
              className="bg-gray-700 text-white rounded-xl font-semibold"
            >
              Reset
            </button>

          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {filteredFlights.map((flight) => (

            <div
              key={flight.id}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition"
            >

              <div className="flex justify-between items-center">

                <div>
                  <h2 className="text-2xl font-bold">{flight.from}</h2>
                  <p className="text-gray-500">Departure</p>
                </div>

                <div className="text-4xl">✈️</div>

                <div className="text-right">
                  <h2 className="text-2xl font-bold">{flight.to}</h2>
                  <p className="text-gray-500">Arrival</p>
                </div>

              </div>

              <hr className="my-6" />

              <div className="flex justify-between">
                <div>
                  <p className="text-gray-500">Airline</p>
                  <h3 className="font-bold">{flight.airline}</h3>
                </div>

                <div>
                  <p className="text-gray-500">Duration</p>
                  <h3 className="font-bold">{flight.duration}</h3>
                </div>
              </div>

              <div className="flex justify-between items-center mt-8">

                <div>
                  <p className="text-gray-500">Price</p>
                  <h2 className="text-3xl font-bold text-orange-500">
                    {flight.price}
                  </h2>
                </div>

                <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600">
                  Book Now
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}