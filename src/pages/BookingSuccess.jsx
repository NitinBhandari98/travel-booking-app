import { Link } from "react-router-dom";

export default function BookingSuccess() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white px-6">

      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-xl w-full text-center">

        <div className="w-28 h-28 rounded-full bg-green-100 flex items-center justify-center mx-auto text-6xl">
          ✅
        </div>

        <h1 className="text-5xl font-bold text-green-600 mt-8">
          Booking Confirmed!
        </h1>

        <p className="text-gray-500 mt-6 leading-8">
          Thank you for booking with <strong>TravelGo</strong>.
          Your booking has been successfully confirmed.
          A confirmation email has been sent to your registered email address.
        </p>

        <div className="bg-gray-100 rounded-2xl p-6 mt-10 text-left">

          <h2 className="text-2xl font-bold mb-4">
            Booking Summary
          </h2>

          <div className="space-y-3">

            <div className="flex justify-between">
              <span>Hotel</span>
              <span>Taj Resort</span>
            </div>

            <div className="flex justify-between">
              <span>Destination</span>
              <span>Goa</span>
            </div>

            <div className="flex justify-between">
              <span>Total Paid</span>
              <span className="font-bold text-orange-500">
                ₹5,598
              </span>
            </div>

          </div>

        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

          <Link
            to="/my-bookings"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold"
          >
            My Bookings
          </Link>

          <Link
            to="/"
            className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-xl font-bold transition"
          >
            Back Home
          </Link>

        </div>

      </div>

    </section>
  );
}