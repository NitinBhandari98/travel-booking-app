export default function HotelGallery({ hotel }) {
  return (
    <div className="grid grid-cols-4 gap-4">

      {/* Main Image */}
      <div className="col-span-4 lg:col-span-2">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-[420px] object-cover rounded-3xl"
        />
      </div>

      {/* Gallery Images */}
      <div className="col-span-4 lg:col-span-2 grid grid-cols-2 gap-4">

        <img
          src={hotel.image}
          alt={hotel.name}
          className="h-48 w-full object-cover rounded-2xl"
        />

        <img
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800"
          alt="Hotel Room"
          className="h-48 w-full object-cover rounded-2xl"
        />

        <img
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"
          alt="Hotel Interior"
          className="h-48 w-full object-cover rounded-2xl"
        />

        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800"
          alt="Luxury Room"
          className="h-48 w-full object-cover rounded-2xl"
        />

      </div>

    </div>
  );
}