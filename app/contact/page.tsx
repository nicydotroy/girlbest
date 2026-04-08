import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact Us | Call Girl Service India | Girlbests",
  description:
    "Contact Girlbests for escort service inquiries. Available 24/7 by phone and WhatsApp. Fast, discreet response.",
};

export default function ContactPage() {
  return (
    <section
      className="py-10"
      style={{ background: "linear-gradient(135deg,#1a0000 0%,#0d0000 100%)" }}
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
          Contact Us
        </h1>
        <p className="text-gray-400 text-center mb-10">
          We are available 24/7. Get in touch for booking and enquiries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <a
            href={`tel:${siteConfig.phone}`}
            className="bg-outer rounded-xl p-6 flex items-center gap-4 hover:border-red-600 transition-colors"
          >
            <span className="text-4xl">📞</span>
            <div>
              <p className="text-gray-400 text-sm mb-1">Call Us (24/7)</p>
              <p className="text-white font-bold text-xl">+91-{siteConfig.phone}</p>
            </div>
          </a>

          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20GirlBests%20I%20need%20booking`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-outer rounded-xl p-6 flex items-center gap-4 hover:border-green-600 transition-colors"
          >
            <span className="text-4xl">💬</span>
            <div>
              <p className="text-gray-400 text-sm mb-1">WhatsApp (Primary)</p>
              <p className="text-white font-bold text-xl">+91-{siteConfig.whatsapp}</p>
            </div>
          </a>

          <a
            href={`https://wa.me/${siteConfig.whatsapp2}?text=Hi%20GirlBests`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-outer rounded-xl p-6 flex items-center gap-4 hover:border-green-600 transition-colors"
          >
            <span className="text-4xl">💬</span>
            <div>
              <p className="text-gray-400 text-sm mb-1">WhatsApp (Alternate)</p>
              <p className="text-white font-bold text-xl">+91-{siteConfig.whatsapp2}</p>
            </div>
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="bg-outer rounded-xl p-6 flex items-center gap-4 hover:border-blue-600 transition-colors"
          >
            <span className="text-4xl">✉</span>
            <div>
              <p className="text-gray-400 text-sm mb-1">Email Us</p>
              <p className="text-white font-bold text-lg break-all">{siteConfig.email}</p>
            </div>
          </a>
        </div>

        <div className="bg-outer rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-3">How to Book?</h2>
          <ol className="text-gray-300 text-sm space-y-2 text-left list-decimal list-inside max-w-md mx-auto mb-5">
            <li>Call or WhatsApp us on the number above</li>
            <li>Tell us your city, area and preferred type of companion</li>
            <li>We will share available profiles and rates</li>
            <li>Confirm your booking and location</li>
            <li>Our escort will arrive at your location</li>
            <li>Pay in cash upon arrival</li>
          </ol>
          <p className="text-gray-500 text-xs">
            100% discreet · Cash payment · Available 24/7 across India
          </p>
        </div>
      </div>
    </section>
  );
}
