export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      rating: "⭐⭐⭐⭐⭐",
      comment: "Amazing hotel with excellent service. Highly recommended!",
    },
    {
      id: 2,
      name: "Priya Verma",
      rating: "⭐⭐⭐⭐",
      comment: "Beautiful rooms and friendly staff. Food was delicious.",
    },
    {
      id: 3,
      name: "Amit Singh",
      rating: "⭐⭐⭐⭐⭐",
      comment: "Best stay ever! Swimming pool and sea view were fantastic.",
    },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6">Guest Reviews</h2>

      <div className="grid gap-5">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-gray-100 rounded-2xl p-6 shadow"
          >
            <h3 className="text-xl font-semibold">{review.name}</h3>
            <p className="text-yellow-500 mt-2">{review.rating}</p>
            <p className="text-gray-600 mt-3">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}