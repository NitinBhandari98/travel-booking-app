export default function PriceSummary() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        Price Summary
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between">
          <span className="text-gray-600">
            Room Price
          </span>
          <span className="font-semibold">
            ₹4,999
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">
            Taxes & Fees
          </span>
          <span className="font-semibold">
            ₹599
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">
            Service Charge
          </span>
          <span className="font-semibold">
            ₹200
          </span>
        </div>

        <hr />

        <div className="flex justify-between text-2xl font-bold">
          <span>Total</span>
          <span className="text-orange-500">
            ₹5,798
          </span>
        </div>

      </div>

      <button className="w-full mt-8 h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-bold text-lg transition">
        Confirm Booking
      </button>

    </div>
  );
}