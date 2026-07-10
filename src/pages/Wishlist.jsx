import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase";
import { toast } from "react-toastify";
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      if (!auth.currentUser) {
        setLoading(false);
        return;
      }

      const q = query(
        collection(db, "wishlist"),
        where("userId", "==", auth.currentUser.uid)
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));

      setWishlist(data);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }

    setLoading(false);
  };

  const removeWishlist = async (id) => {
    try {
      await deleteDoc(doc(db, "wishlist", id));

      setWishlist((prev) =>
        prev.filter((item) => item.id !== id)
      );

      toast.success("Removed from Wishlist ❤️");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-12">
          My Wishlist ❤️
        </h1>
                {loading ? (
          <h2 className="text-center text-2xl font-bold">
            Loading...
          </h2>
        ) : wishlist.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-lg p-12 text-center">

            <h2 className="text-3xl font-bold mb-4">
              Wishlist is Empty ❤️
            </h2>

            <p className="text-gray-500 mb-8">
              Save your favourite hotels to view them later.
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

              {wishlist.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                >

                  <img
                    src={item.image}
                    alt={item.hotel}
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
                      ⭐ {item.rating}
                    </p>

                    <p className="mt-4 text-orange-500 text-2xl font-bold">
                      {item.price}
                    </p>

                    <button
                      onClick={() => removeWishlist(item.id)}
                      className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl"
                    >
                      Remove
                    </button>

                  </div>

                </div>
              ))}

            </div>
          </>
        )}

      </div>
    </section>
  );
}