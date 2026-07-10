import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, db } from "../firebase";
import { useSearchParams } from "react-router-dom";

import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

const hotelsData = [
  {
    id: 1,
    name: "Taj Resort",
    location: "Goa",
    price: "₹4,999",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
  },
  {
    id: 2,
    name: "Sea View Hotel",
    location: "Maldives",
    price: "₹8,999",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
  },
  {
    id: 3,
    name: "Royal Palace",
    location: "Dubai",
    price: "₹6,999",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
  },
  {
    id: 4,
    name: "Mountain View",
    location: "Manali",
    price: "₹3,999",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
  },
];

export default function Hotels() {
  const [searchParams] = useSearchParams();

const [search, setSearch] = useState(
  searchParams.get("search") || ""
);

  const filteredHotels = hotelsData.filter(
    (hotel) =>
      hotel.name.toLowerCase().includes(search.toLowerCase()) ||
      hotel.location.toLowerCase().includes(search.toLowerCase())
  );

  const addToWishlist = async (hotel) => {
    if (!auth.currentUser) {
      toast.error("Please Login First");
      return;
    }

    try {
      const q = query(
        collection(db, "wishlist"),
        where("userId", "==", auth.currentUser.uid),
        where("hotelId", "==", hotel.id)
      );

      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        toast.info("Already in Wishlist ❤️");
        return;
      }

      await addDoc(collection(db, "wishlist"), {
        userId: auth.currentUser.uid,
        hotelId: hotel.id,
        hotel: hotel.name,
        location: hotel.location,
        price: hotel.price,
        rating: hotel.rating,
        image: hotel.image,
        createdAt: serverTimestamp(),
      });

      toast.success("❤️ Added To Wishlist");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  console.log("Search =", search);
console.log("Filtered =", filteredHotels.length);
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-4">
          Find Your Perfect Hotel
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Search hotels by destination and explore amazing stays.
        </p>

        <div className="bg-white rounded-3xl shadow-xl p-6 mb-12">
          <div className="grid md:grid-cols-5 gap-4">

            <input
              type="text"
              placeholder="Search Hotel or Destination..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded-xl p-4 outline-none focus:border-orange-500"
            />

            <input
              type="date"
              className="border rounded-xl p-4"
            />

            <input
              type="date"
              className="border rounded-xl p-4"
            />

            <button className="bg-orange-500 text-white rounded-xl font-semibold">
              Search
            </button>

            <button
              onClick={() => setSearch("")}
              className="bg-gray-700 text-white rounded-xl font-semibold"
            >
              Reset
            </button>

          </div>
        </div>
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {filteredHotels.length > 0 ? (
            filteredHotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300"
              >
                <div className="relative">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-56 object-cover"
                  />

                  <button
                    onClick={() => addToWishlist(hotel)}
                    className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full shadow-lg text-xl hover:scale-110 transition"
                  >
                    ❤️
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">
                      {hotel.name}
                    </h2>

                    <span className="font-semibold">
                      ⭐ {hotel.rating}
                    </span>
                  </div>

                  <p className="text-gray-500 mt-2">
                    📍 {hotel.location}
                  </p>

                  <div className="flex justify-between items-center mt-6">
                    <div>
                      <h3 className="text-orange-500 text-2xl font-bold">
                        {hotel.price}
                      </h3>

                      <p className="text-sm text-gray-500">
                        per night
                      </p>
                    </div>

                    <Link
                      to={`/hotel/${hotel.id}`}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-full transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-4 text-center py-20">
              <h2 className="text-3xl font-bold">
                No Hotels Found 😔
              </h2>

              <p className="text-gray-500 mt-3">
                Try searching with another destination.
              </p>

              <button
                onClick={() => setSearch("")}
                className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl"
              >
                Show All Hotels
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}        