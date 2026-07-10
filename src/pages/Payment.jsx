import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function Payment() {
  const navigate = useNavigate();
  const location = useLocation();

  const booking = location.state;

  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (!auth.currentUser) {
      toast.error("Please Login First");
      navigate("/login");
      return;
    }

    if (!booking) {
      alert("Booking data not found");
      return;
    }

    if (!name || !card || !expiry || !cvv) {
      toast.warning("Please fill all payment details");
      return;
    }

    try {
      setLoading(true);

      const docRef = await addDoc(collection(db, "bookings"), {
        userId: auth.currentUser.uid,
        userName: booking.name,
        email: booking.email,
        phone: booking.phone,
        guests: booking.guests,
        checkIn: booking.checkIn,
        checkOut: booking.checkOut,
        request: booking.request || "",

        hotel: "Luxury Beach Resort",
        location: "Goa",
        price: 5598,

        paymentStatus: "Paid",
        createdAt: serverTimestamp(),
      });

      console.log("Booking Saved:", docRef.id);

      toast.success("Payment Successful 🎉");

      navigate("/booking-success");

    } catch (err) {
      console.error(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen pt-28 pb-16">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-center mb-10">
          Payment Details
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          <div>

            <h2 className="text-2xl font-bold mb-6">
              Card Information
            </h2>

            <input
              type="text"
              placeholder="Card Holder Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-xl p-4 mb-4"
            />

            <input
              type="text"
              placeholder="Card Number"
              value={card}
              onChange={(e) => setCard(e.target.value)}
              className="w-full border rounded-xl p-4 mb-4"
            />

            <div className="grid grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                className="border rounded-xl p-4"
              />

              <input
                type="password"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="border rounded-xl p-4"
              />

            </div>

          </div>

          <div className="bg-gray-50 rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Booking Summary
            </h2>

            <div className="space-y-3">

              <p><strong>Name:</strong> {booking?.name}</p>
              <p><strong>Email:</strong> {booking?.email}</p>
              <p><strong>Guests:</strong> {booking?.guests}</p>
              <p><strong>Check In:</strong> {booking?.checkIn}</p>
              <p><strong>Check Out:</strong> {booking?.checkOut}</p>

            </div>

            <hr className="my-6" />

            <div className="flex justify-between">
              <span>Room Price</span>
              <span>₹4,999</span>
            </div>

            <div className="flex justify-between mt-3">
              <span>Taxes</span>
              <span>₹599</span>
            </div>

            <hr className="my-6" />

            <div className="flex justify-between text-2xl font-bold">
              <span>Total</span>
              <span className="text-orange-500">₹5,598</span>
            </div>

            <button
              onClick={handlePayment}
              disabled={loading}
              className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold"
            >
              {loading ? "Processing..." : "Pay Now"}
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}