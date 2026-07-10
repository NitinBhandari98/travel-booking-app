import { Link, useParams } from "react-router-dom";

import HotelGallery from "../components/hotelDetails/HotelGallery";
import HotelInfo from "../components/hotelDetails/HotelInfo";
import Amenities from "../components/hotelDetails/Amenities";
import BookingCard from "../components/hotelDetails/BookingCard";

const hotels = [
  {
    id: 1,
    name: "Taj Resort",
    location: "Goa",
    price: 4999,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
  },
  {
    id: 2,
    name: "Sea View Hotel",
    location: "Maldives",
    price: 8999,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
  },
  {
    id: 3,
    name: "Royal Palace",
    location: "Dubai",
    price: 6999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
  },
  {
    id: 4,
    name: "Mountain View",
    location: "Manali",
    price: 3999,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
  },
];

export default function HotelDetails() {
  const { id } = useParams();

  const hotel = hotels.find((item) => item.id === Number(id));

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Hotel Not Found
      </div>
    );
  }

  return (
    <section className="bg-gray-100 min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        <Link
          to="/hotels"
          className="inline-flex items-center mb-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold"
        >
          ← Back to Hotels
        </Link>

        <HotelGallery hotel={hotel} />

        <div className="grid lg:grid-cols-3 gap-10 mt-10">

          <div className="lg:col-span-2">
            <HotelInfo hotel={hotel} />
            <Amenities />
          </div>

          <BookingCard hotel={hotel} />

        </div>

      </div>
    </section>
  );
}