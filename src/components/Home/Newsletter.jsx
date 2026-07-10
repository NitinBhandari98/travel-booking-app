export default function Newsletter() {
  return (
    <section className="bg-orange-500 py-20">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Get Travel Deals in Your Inbox
        </h2>

        <p className="text-white mt-4 text-lg">
          Subscribe to receive exclusive offers and latest travel updates.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-4 rounded-xl w-full md:w-96 outline-none"
          />

          <button className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}