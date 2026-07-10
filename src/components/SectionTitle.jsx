export default function SectionTitle({
  title,
  subtitle,
  center = true,
}) {
  return (
    <div className={center ? "text-center mb-14" : "mb-14"}>
      <span className="inline-block bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold">
        Explore
      </span>

      <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
        {title}
      </h2>

      <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}