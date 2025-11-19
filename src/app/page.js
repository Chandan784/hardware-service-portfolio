"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ContactSection from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Navbar />
        <Hero />

        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Testimonials />

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
