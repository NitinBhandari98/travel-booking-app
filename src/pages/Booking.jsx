import { useState } from "react";
import { useNavigate } from "react-router-dom";
import{toast} from "react-toastify";

export default function Booking() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    checkIn: "",
    checkOut: "",
    request: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleContinue = () => {
  if (
    !form.name ||
    !form.email ||
    !form.phone ||
    !form.guests ||
    !form.checkIn ||
    !form.checkOut
  ) {
    toast.warning("Please fill all fields");
    return;
  }

  if (new Date(form.checkOut) <= new Date(form.checkIn)) {
    toast.error("Check-out date must be after Check-in date");
    return;
  }

  navigate("/payment", {
    state: form,
  });
};
  return (
    <section className="bg-gray-100 min-h-screen pt-28 pb-16">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Complete Your Booking
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
                  <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="border rounded-xl p-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="border rounded-xl p-4"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="border rounded-xl p-4"
          />

          <input
            type="number"
            name="guests"
            placeholder="Guests"
            value={form.guests}
            onChange={handleChange}
            className="border rounded-xl p-4"
          />

          <input
            type="date"
            name="checkIn"
            value={form.checkIn}
            onChange={handleChange}
            className="border rounded-xl p-4"
          />

          <input
            type="date"
            name="checkOut"
            value={form.checkOut}
            onChange={handleChange}
            className="border rounded-xl p-4"
          />

        </div>

        <textarea
          rows="4"
          name="request"
          placeholder="Special Request"
          value={form.request}
          onChange={handleChange}
          className="w-full border rounded-xl p-4 mt-6"
        />

        <button
          onClick={handleContinue}
          className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold"
        >
          Continue To Payment
        </button>

      </div>
    </section>
  );
}