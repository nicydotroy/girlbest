"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/lib/config";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/rate", label: "Rate" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Top bar */}
      <div className="bg-[#5e0707] py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-white text-sm hidden sm:inline-flex items-center gap-1"
            >
              ✉ {siteConfig.email}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp2}?text=Hii%20Girlbest%20Call%20Girl`}
              className="text-white text-sm font-semibold inline-flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              📱 +91-{siteConfig.whatsapp2}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white text-sm font-bold">Follow Us:</span>
            <a
              href="https://www.facebook.com/"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="https://www.instagram.com"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              in
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-black py-3 border-b border-[#5e0707]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src="/images/logo.jpg"
                alt="Girlbests"
                width={160}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-[#ff9900] transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>

          {/* Mobile nav */}
          {menuOpen && (
            <nav className="lg:hidden mt-3 bg-black/90 rounded-lg p-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-[#ff9900] transition-colors font-medium py-1 border-b border-gray-800"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
