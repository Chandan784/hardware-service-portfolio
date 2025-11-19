export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 bg-brand-light text-center"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Contact{" "}
        <span className="text-brand-primary">Jagannath InfoTech Solutions</span>
      </h2>

      <p className="text-gray-600 max-w-xl mx-auto mb-12 text-lg">
        Get reliable laptop repair, CCTV installation, and AC service from our
        expert technicians. We are available 7 days a week.
      </p>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Phone */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-brand-primary mb-3">
            📞 Phone
          </h3>
          <p className="text-gray-700 text-lg">+91 90000 00000</p>
        </div>

        {/* Email */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-brand-primary mb-3">
            📧 Email
          </h3>
          <p className="text-gray-700 text-lg">support@jitservices.com</p>
        </div>

        {/* Location */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-brand-primary mb-3">
            📍 Location
          </h3>
          <p className="text-gray-700 text-lg">Bhubaneswar, Odisha</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
        <a
          href="tel:+919000000000"
          className="px-8 py-3 bg-brand-primary text-white font-semibold rounded-xl shadow hover:opacity-90 transition"
        >
          Call Now
        </a>

        <a
          href="https://wa.me/919000000000"
          className="px-8 py-3 border border-brand-primary text-brand-primary font-semibold rounded-xl hover:bg-brand-primary hover:text-white transition"
        >
          WhatsApp Us
        </a>
      </div>
    </section>
  );
}
