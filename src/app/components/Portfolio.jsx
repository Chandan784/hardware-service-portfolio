export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Laptop Motherboard Repair",
      image:
        "https://media.istockphoto.com/id/928791064/photo/technician-repairing-laptop-computer-closeup.webp?a=1&b=1&s=612x612&w=0&k=20&c=xCs8t_gBQ_IEkofGODMPCmJuGZ2yWclIhfqYuPGvkbQ=",
    },
    {
      title: "CCTV Installation Setup",
      image:
        "https://media.istockphoto.com/id/1192103258/photo/close-up-of-surveillance-camera-installation-male-hand-holds-cctv-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=texl4jOb2iFyVTq-8jl31_vODxFWYJnMOaQ_1eJO_Aw=",
    },
    {
      title: "AC Deep Cleaning Service",
      image:
        "https://media.istockphoto.com/id/2206342744/photo/technician-repairing-air-conditioner-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=R6EmLqVOBQ0QRlrzRfl0ZqdI-TOHmOt7081-dbY_igI=",
    },
    {
      title: "Office CCTV Monitoring System",
      image:
        "https://images.unsplash.com/photo-1680479611243-a072462e4d6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fE9mZmljZSUyMENDVFYlMjBNb25pdG9yaW5nJTIwU3lzdGVtfGVufDB8fDB8fHww",
    },
    {
      title: "Laptop Screen Replacement",
      image:
        "https://images.unsplash.com/photo-1721332154191-ba5f1534266e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhcHRvcCUyMHNjcmVlbiUyMHJlcGFpcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "AC Installation at Home",
      image:
        "https://images.unsplash.com/photo-1680479611243-a072462e4d6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fE9mZmljZSUyMENDVFYlMjBNb25pdG9yaW5nJTIwU3lzdGVtfGVufDB8fDB8fHww",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-6">
          Our <span className="text-brand-primary">Portfolio</span>
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          A glimpse of our recent Laptop Repairs, CCTV Installations, and AC
          Services.
        </p>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
