import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { organizationSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us | Book Call Girl Service 24/7 | Girlbests",
  description:
    "Contact Girlbests to book escort service across India. Call or WhatsApp +91-7061819139 anytime. 24/7 response, instant booking confirmation.",
  alternates: { canonical: `${siteConfig.baseUrl}/contact` },
  openGraph: {
    title: "Contact Girlbests | Book Call Girl 24/7",
    description: "Call or WhatsApp +91-7061819139. Instant booking confirmation. 24/7 available.",
    url: `${siteConfig.baseUrl}/contact`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Girlbests | Book Call Girl 24/7",
    description: "Call or WhatsApp +91-7061819139. Instant booking confirmation. 24/7 available.",
  },
};

const contactFaqs = [
  {
    q: "What is the quickest way to book a call girl?",
    a: "The fastest way is to WhatsApp us at +91-7061819139. Share your city, area and type of escort needed. We respond within 2 minutes.",
  },
  {
    q: "What information do I need to provide to book?",
    a: "Just tell us your city, your area or hotel name, your budget and preferred escort type. That is all we need to find your perfect match.",
  },
  {
    q: "Is WhatsApp booking safe and private?",
    a: "Yes. WhatsApp messages are end-to-end encrypted. We never save client conversations. Everything is 100% private and confidential.",
  },
];

export default function ContactPage() {
  const jsonLdOrg = organizationSchema();
  const jsonLdFaq = faqSchema(contactFaqs);
  const jsonLdBreadcrumb = breadcrumbSchema([
    { name: "Home", url: siteConfig.baseUrl },
    { name: "Contact Us", url: `${siteConfig.baseUrl}/contact` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Breadcrumb Nav */}
      <nav aria-label="Breadcrumb" className="bg-outer py-2 px-4">
        <div className="container mx-auto">
          <ol className="flex items-center gap-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-[#ff9900] transition-colors">Home</Link></li>
            <li className="text-gray-600">›</li>
            <li className="text-[#ff9900] font-medium">Contact Us</li>
          </ol>
        </div>
      </nav>

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
            rel="nofollow noopener noreferrer"
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
            rel="nofollow noopener noreferrer"
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

        {/* FAQ */}
        <div className="bg-outer rounded-xl p-6 mt-8">
          <h2 className="text-xl font-bold text-[#ff9900] mb-6">Booking FAQ</h2>
          <div className="space-y-4">
            {contactFaqs.map(({ q, a }) => (
              <div key={q} className="border-b border-[#5e0707]/40 pb-4 last:border-0 last:pb-0">
                <h3 className="text-white font-bold text-sm mb-1">{q}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
