export default function WhyChooseUs() {
  const features = [
    {
      title: "Best Price Guarantee",
      desc: "Enjoy the lowest prices with no hidden charges and exclusive travel deals.",
      icon: "💰",
    },
    {
      title: "24/7 Customer Support",
      desc: "Our travel experts are available anytime to assist you before and during your trip.",
      icon: "📞",
    },
    {
      title: "Easy & Secure Booking",
      desc: "Book your dream vacation in minutes with a fast and secure booking process.",
      icon: "✈️",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-600 px-5 py-2 rounded-full font-semibold">
            WHY CHOOSE US
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 leading-tight">
            We Make Every Journey
            <span className="text-blue-600"> Extraordinary</span>
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-base md:text-lg">
            Discover the world with confidence. We provide unforgettable
            experiences, affordable prices and exceptional customer support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-lg border border-white rounded-3xl shadow-xl p-10 hover:shadow-blue-200 hover:-translate-y-4 duration-500"
            >
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-5xl mx-auto group-hover:scale-110 duration-500">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mt-8 text-center">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-4 text-center leading-7">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

       <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-4xl font-bold text-blue-600">15K+</h2>
            <p className="text-gray-500 mt-2">Happy Travelers</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-4xl font-bold text-blue-600">250+</h2>
            <p className="text-gray-500 mt-2">Destinations</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-4xl font-bold text-blue-600">4.9★</h2>
            <p className="text-gray-500 mt-2">Customer Rating</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-4xl font-bold text-blue-600">24/7</h2>
            <p className="text-gray-500 mt-2">Support</p>
          </div>

        </div>

      </div>
    </section>
  );
}