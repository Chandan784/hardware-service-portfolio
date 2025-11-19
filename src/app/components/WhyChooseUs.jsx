export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Why Choose <span className="text-brand-primary">Us</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Jagannath Info Tech Solutions delivers reliable, fast, and affordable
          service for all your Laptop, AC, and CCTV needs with expert
          technicians.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center border border-gray-100 hover:shadow-lg transition">
            <div className="text-brand-primary text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Fast & Reliable Service
            </h3>
            <p className="text-gray-600">
              We provide quick doorstep service with guaranteed satisfaction.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center border border-gray-100 hover:shadow-lg transition">
            <div className="text-brand-primary text-5xl mb-4">🛠️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Skilled Technicians
            </h3>
            <p className="text-gray-600">
              Our certified experts handle laptop, AC, and CCTV issues with
              precision.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center border border-gray-100 hover:shadow-lg transition">
            <div className="text-brand-primary text-5xl mb-4">💰</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Affordable Pricing
            </h3>
            <p className="text-gray-600">
              Best-in-market pricing with no hidden charges—complete
              transparency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
