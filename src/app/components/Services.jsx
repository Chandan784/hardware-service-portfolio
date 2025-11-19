export default function Services() {
  const services = [
    {
      title: "Laptop Repair",
      img: "https://plus.unsplash.com/premium_photo-1664301887532-328f07bb2c24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwcmVwYWlyfGVufDB8fDB8fHww",
    },
    {
      title: "CCTV Installation",
      img: "https://media.istockphoto.com/id/1008281518/photo/security-system.webp?a=1&b=1&s=612x612&w=0&k=20&c=sQuFKd5xXZGJhnHTjZ7PCdRvUVHtlrPDz3qU2VDb_Rc=",
    },
    {
      title: "AC Repair & Installation",
      img: "https://media.istockphoto.com/id/2211719481/photo/technician-with-screwdriver-repairing-air-conditioner-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=jgXsFwah9TmgEV1m6MXRy3_BqpA0V6zJ5q4AkWw4vM4=",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
        Our <span className="text-brand-primary">Services</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-10 mt-10">
        {services.map((s, i) => (
          <div
            key={i}
            className="shadow-md border rounded-xl overflow-hidden hover:scale-[1.03] transition"
          >
            <img src={s.img} className="w-full h-56 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold">{s.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
