export default function PaymentMethod() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-8">

      <h2 className="text-3xl font-bold mb-8">
        Payment Method
      </h2>

      <div className="space-y-5">

        <label className="flex items-center gap-4 border rounded-2xl p-4 cursor-pointer hover:border-orange-500">
          <input type="radio" name="payment" defaultChecked />
          <span className="text-lg">💳 Credit Card</span>
        </label>

        <label className="flex items-center gap-4 border rounded-2xl p-4 cursor-pointer hover:border-orange-500">
          <input type="radio" name="payment" />
          <span className="text-lg">🏦 Debit Card</span>
        </label>

        <label className="flex items-center gap-4 border rounded-2xl p-4 cursor-pointer hover:border-orange-500">
          <input type="radio" name="payment" />
          <span className="text-lg">📱 UPI</span>
        </label>

        <label className="flex items-center gap-4 border rounded-2xl p-4 cursor-pointer hover:border-orange-500">
          <input type="radio" name="payment" />
          <span className="text-lg">🌐 Net Banking</span>
        </label>

        <label className="flex items-center gap-4 border rounded-2xl p-4 cursor-pointer hover:border-orange-500">
          <input type="radio" name="payment" />
          <span className="text-lg">🏨 Pay at Hotel</span>
        </label>

      </div>

    </div>
  );
}