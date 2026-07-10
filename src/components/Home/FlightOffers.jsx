export default function FlightOffers() {
  const offers = [
    {
      id: 1,
      title: "Summer Sale",
      discount: "40% OFF",
      desc: "Book international flights and save up to 40%.",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 2,
      title: "Early Bird Offer",
      discount: "30% OFF",
      desc: "Book your trip 30 days in advance and save more.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "Family Package",
      discount: "Buy 3 Get 1",
      desc: "Perfect deals for family vacations and holidays.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold uppercase tracking-widest">
            Special Offers
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Exclusive Flight Deals
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Grab the best offers before they expire and travel at amazing prices.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`bg-gradient-to-r ${offer.color} rounded-3xl p-8 text-white shadow-xl hover:scale-105 transition duration-300`}
            >
              <p className="uppercase tracking-widest text-sm">
                {offer.title}
              </p>

              <h3 className="text-5xl font-extrabold mt-4">
                {offer.discount}
              </h3>

              <p className="mt-5 leading-7">
                {offer.desc}
              </p>

              <button className="mt-8 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                Book Now
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}