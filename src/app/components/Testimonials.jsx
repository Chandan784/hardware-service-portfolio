export default function Testimonials() {
  const reviews = [
    "Excellent laptop repair service!",
    "CCTV installation was quick & professional!",
    "AC servicing improved cooling instantly!",
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-extrabold text-brand-primary mb-10">
        What Our Clients Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <div key={i} className="p-8 bg-white shadow-md rounded-xl border">
            <p className="text-gray-700 italic">“{r}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}
