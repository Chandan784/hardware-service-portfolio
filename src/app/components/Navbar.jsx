"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          <span className="text-brand-primary">Jagannath</span> Infotech
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-lg font-medium">
          <Link href="/" className="hover:text-brand-primary transition">
            Home
          </Link>
          <Link href="#about" className="hover:text-brand-primary transition">
            About
          </Link>
          <Link
            href="#services"
            className="hover:text-brand-primary transition"
          >
            Services
          </Link>
          <Link href="#contact" className="hover:text-brand-primary transition">
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 text-lg animate-slideDown">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block hover:text-brand-primary"
          >
            Home
          </Link>

          <Link
            href="#about"
            onClick={() => setOpen(false)}
            className="block hover:text-brand-primary"
          >
            About
          </Link>

          <Link
            href="#services"
            onClick={() => setOpen(false)}
            className="block hover:text-brand-primary"
          >
            Services
          </Link>

          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="block hover:text-brand-primary"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
