import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cities } from "@/lib/cities";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Call Girl Service | No.1 Escort Service in India | Girlbests",
  description:
    "Find the best high profile and independent call girls across India. 1000+ verified profiles. 100% safe & discreet. Cash payment accepted. Call now!",
  alternates: { canonical: siteConfig.baseUrl },
};

const galleryImages = [
  "/images/gallery/01.jpg",
  "/images/gallery/02.jpg",
  "/images/gallery/03.jpg",
  "/images/gallery/04.jpg",
  "/images/gallery/05.jpg",
  "/images/gallery/06.jpg",
  "/images/gallery/07.jpg",
  "/images/gallery/08.jpg",
  "/images/gallery/09.jpg",
  "/images/gallery/10.jpg",
  "/images/gallery/11.jpg",
  "/images/gallery/12.jpg",
];

const sliderImages = [
  "/images/slider/01.jpg",
  "/images/slider/02.jpg",
  "/images/slider/03.jpg",
];

const serviceTypes = [
  "College Call Girls",
  "Russian Call Girls",
  "Model Call Girls",
  "VIP Escort Service",
  "Housewife Escorts",
  "Air Hostess Call Girls",
  "Independent Call Girls",
  "Celebrity Escorts",
];

export default function Home() {
  return (
    <>
      {/* Hero / Slider Section */}
      <section className="relative w-full overflow-hidden" style={{ background: "linear-gradient(135deg,#1a0000 0%,#0d0000 100%)" }}>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sliderImages.map((src, i) => (
              <div key={i} className="img-box rounded-xl overflow-hidden">
                <Image
                  src={src}
                  alt={`Call Girl Service ${i + 1}`}
                  width={400}
                  height={280}
                  className="w-full h-52 object-cover"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* Hero CTA */}
          <div className="text-center mt-8 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              No.1 Call Girl Service in India
            </h1>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              High profile &amp; independent escorts available 24/7. 1000+ verified profiles.
              100% safe, discreet &amp; genuine service.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-[#5e0707] hover:bg-red-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
              >
                📞 Call Now: +91-{siteConfig.phone}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20GirlBests%20I%20need%20service`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="bg-main py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
            Our Escort Services
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {serviceTypes.map((type) => (
              <div
                key={type}
                className="bg-outer text-center py-4 px-3 rounded-xl cursor-default"
              >
                <span className="text-[#ff9900] text-sm font-semibold">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Cities */}
      <section className="py-10" style={{ background: "#0d0000" }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            Call Girl Service — Top Cities
          </h2>
          <p className="text-gray-400 text-center mb-6">
            Select your city to find verified escorts near you
          </p>
          <div className="service-links">
            {cities.map((city) => (
              <Link key={city.slug} href={`/${city.slug}`}>
                Call Girl in {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-main py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            Photo Gallery
          </h2>
          <p className="text-gray-400 text-center mb-6">
            Browse our collection of beautiful escorts
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((src, i) => (
              <div key={i} className="img-box">
                <Image
                  src={src}
                  alt={`Escort Photo ${i + 1}`}
                  width={300}
                  height={220}
                  className="w-full h-44 object-cover rounded-xl"
                />
                <a href={`tel:${siteConfig.phone}`}>📞 Book Now</a>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/gallery"
              className="inline-block bg-[#5e0707] hover:bg-red-800 text-white font-semibold py-2 px-8 rounded-full transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10" style={{ background: "#0d0000" }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
            Why Choose Girlbests?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "✅", title: "100% Verified Profiles", desc: "All escorts are personally verified for authenticity and safety." },
              { icon: "🔒", title: "100% Discreet & Safe", desc: "Complete privacy guaranteed. Your identity stays confidential." },
              { icon: "💰", title: "Cash Payment Only", desc: "Secure, hassle-free cash transactions. No digital trail." },
              { icon: "🕐", title: "24/7 Availability", desc: "Service available round the clock, any day of the week." },
              { icon: "💎", title: "VIP & Budget Options", desc: "Services ranging from ₹3999 to premium VIP packages." },
              { icon: "📍", title: "Pan India Coverage", desc: "Available across 90+ cities throughout India." },
            ].map((item) => (
              <div key={item.title} className="bg-outer rounded-xl p-5">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#5e0707] py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to Book Your Companion?
          </h2>
          <p className="text-red-200 mb-5">
            Call or WhatsApp us now. Available 24/7 across India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white text-[#5e0707] font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors"
            >
              📞 +91-{siteConfig.phone}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20GirlBests`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-600 transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
