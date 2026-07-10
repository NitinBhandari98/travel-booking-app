import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      if (!auth.currentUser) {
        setLoading(false);
        return;
      }

      const q = query(
        collection(db, "bookings"),
        where("userId", "==", auth.currentUser.uid)
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));

      setBookings(data);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  const cancelBooking = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to cancel this booking?"
  );

  if (!confirmDelete) return;

  try {
    await deleteDoc(doc(db, "bookings", id));

    setBookings((prev) => prev.filter((item) => item.id !== id));

    toast.success("Booking Cancelled Successfully");
  } catch (err) {
    console.log(err);
    toast.error(err.message);
  }
};
  return (
    <section className="min-h-screen bg-gray-100 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-12">
          My Bookings
        </h1>

        {loading ? (
          <h2 className="text-center text-2xl font-bold">
            Loading...
          </h2>
        ) : bookings.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-lg p-12 text-center">

            <h2 className="text-3xl font-bold mb-4">
              No Bookings Found 😔
            </h2>

            <p className="text-gray-500 mb-8">
              Book your first trip today.
            </p>

            <Link
              to="/hotels"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold"
            >
              Explore Hotels
            </Link>

          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {bookings.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg"
                >

                  <img
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
                    alt="Hotel"
                    className="w-full h-60 object-cover"
                  />

                  <div className="p-6">

                    <h2 className="text-2xl font-bold">
                      {item.hotel}
                    </h2>

                    <p className="text-gray-500 mt-2">
                      📍 {item.location}
                    </p>

                    <p className="mt-3">
                      👤 Guests : {item.guests}
                    </p>

                    <p className="mt-2">
                      📅 {item.checkIn} → {item.checkOut}
                    </p>

                    <p className="mt-4 text-orange-500 text-2xl font-bold">
                      ₹{item.price}
                    </p>

                    <button
                      onClick={() => cancelBooking(item.id)}
                      className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl cursor-pointer"
                    >
                      Cancel Booking
                    </button>

                  </div>

                </div>
              ))}

            </div>

            <div className="text-center mt-12">

              <Link
                to="/hotels"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold"
              >
                Book Another Hotel
              </Link>

            </div>
          </>
        )}

      </div>
    </section>
  );
}