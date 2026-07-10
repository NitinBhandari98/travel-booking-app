export default function BookingForm() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        Guest Details
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 font-medium">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full h-14 border rounded-2xl px-5 outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-14 border rounded-2xl px-5 outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Enter phone number"
            className="w-full h-14 border rounded-2xl px-5 outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Guests
          </label>
          <select className="w-full h-14 border rounded-2xl px-5 outline-none focus:border-orange-500">
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
            <option>5+ Guests</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Check In
          </label>
          <input
            type="date"
            className="w-full h-14 border rounded-2xl px-5 outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Check Out
          </label>
          <input
            type="date"
            className="w-full h-14 border rounded-2xl px-5 outline-none focus:border-orange-500"
          />
        </div>

      </div>

    </div>
  );
}