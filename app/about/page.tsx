import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Us | Girlbests — No.1 Escort Service India",
  description:
    "Learn about Girlbests — India's most trusted escort service platform with 1000+ verified profiles across 90+ cities.",
};

export default function AboutPage() {
  return (
    <section className="py-12" style={{ background: "linear-gradient(135deg,#1a0000 0%,#0d0000 100%)" }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          About Girlbests
        </h1>
        <p className="text-gray-400 text-center mb-10">
          India&apos;s Most Trusted Escort Service Platform
        </p>

        <div className="bg-outer rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#ff9900] mb-4">Who We Are</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Girlbests is India&apos;s premier escort service platform, connecting discerning
            gentlemen with verified, high-profile companions across 90+ cities. Founded with
            the vision of providing a safe, discreet and reliable service, we have grown to
            become the most trusted name in the industry.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Our platform features 1000+ genuine profiles of beautiful, educated and
            professional escorts including college girls, independent escorts, Russian models,
            VIP companions and more. Every profile on our platform is personally verified by
            our team to ensure authenticity and safety.
          </p>
        </div>

        <div className="bg-outer rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#ff9900] mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            Our mission is to provide a safe, discreet and professional escort experience for
            our clients. We are committed to maintaining the highest standards of service
            quality, client privacy and escort safety. We believe in transparency, honesty and
            delivering exactly what we promise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            { title: "1000+ Verified Profiles", desc: "Every escort is manually verified for authenticity." },
            { title: "90+ Cities Covered", desc: "Pan-India service coverage from metro cities to smaller towns." },
            { title: "100% Discreet", desc: "Your privacy is our top priority. No data is shared." },
            { title: "24/7 Service", desc: "Available round the clock, every day of the year." },
          ].map((item) => (
            <div key={item.title} className="bg-outer rounded-xl p-5">
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-outer rounded-xl p-6 md:p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Get In Touch</h2>
          <p className="text-gray-400 mb-5">
            Have questions? Our team is available 24/7 to assist you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-[#5e0707] hover:bg-red-800 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              📞 +91-{siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="border border-[#5e0707] text-white hover:bg-[#5e0707] font-bold py-3 px-8 rounded-full transition-colors"
            >
              ✉ {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
