export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 text-center bg-gray-50">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
        Reliable <span className="text-brand-primary">Laptop Repair</span>,
        <br />
        CCTV & AC Installation Services
      </h1>

      <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
        Fast, affordable, and trusted services in Bhubaneswar from Jagannath
        Infotech Solutions.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <a
          href="tel:+919000000000"
          className="px-6 py-3 bg-brand-primary text-white rounded-lg font-semibold"
        >
          Call Now
        </a>
        <a
          href="https://wa.me/919000000000"
          className="px-6 py-3 border border-brand-primary text-brand-primary rounded-lg font-semibold"
        >
          WhatsApp
        </a>
      </div>
    </section>
  );
}
