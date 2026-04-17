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
  {
    q: "Can I call instead of WhatsApp to book?",
    a: "Yes. You can call directly at +91-7061819139. Our booking team is available 24/7 to take your call and confirm bookings instantly.",
  },
  {
    q: "What are your operating hours?",
    a: "We operate 24 hours a day, 7 days a week including all holidays. You can call or WhatsApp us at any time — day or night.",
  },
  {
    q: "How quickly will I get a response after contacting?",
    a: "We respond within 2 to 5 minutes on WhatsApp and answer calls immediately. During peak hours, response may take up to 10 minutes.",
  },
  {
    q: "Can I book an escort for a specific date and time?",
    a: "Yes. You can make advance bookings by specifying your preferred date, time and location. We will confirm availability and schedule your booking.",
  },
  {
    q: "Do you have a second WhatsApp number?",
    a: "Yes. If our primary number is busy, you can reach us at +91-9229604907. Both numbers are active 24/7 for bookings and enquiries.",
  },
  {
    q: "Can I request a specific type of escort?",
    a: "Yes. Tell us your preference — college girl, Russian, VIP, housewife, model or independent escort. We will share matching verified profiles.",
  },
  {
    q: "Is there any registration required to book?",
    a: "No. No registration, sign-up or account creation is needed. Simply call or WhatsApp us directly and your booking will be confirmed.",
  },
  {
    q: "Can I reschedule my booking after confirming?",
    a: "Yes. You can reschedule your booking by calling or WhatsApp. Rescheduling is free and can be done anytime before the escort departs.",
  },
  {
    q: "What if I have a complaint about the service?",
    a: "Contact us immediately via phone or WhatsApp. We take all complaints seriously and resolve them within 24 hours. Client satisfaction is our priority.",
  },
  {
    q: "Do you provide service outside major cities?",
    a: "Yes. We cover 90+ cities across India including tier-2 and tier-3 cities. Call us to check availability in your specific location.",
  },
  {
    q: "Can I contact you for bulk or corporate bookings?",
    a: "Yes. For multiple bookings or special arrangements, contact us via WhatsApp. We offer customized packages for special events and occasions.",
  },
  {
    q: "Is there an email address for contact?",
    a: "Yes. You can email us at contact@girlbests.in. However, for faster response, we recommend calling or WhatsApp at +91-7061819139.",
  },
  {
    q: "What languages does your support team speak?",
    a: "Our support team speaks Hindi and English fluently. We can assist clients in both languages for bookings and queries across India.",
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

        {/* SEO Content */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-[#ff9900] mb-4 text-center">How to Contact & Book a Call Girl at Girlbests</h2>
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <p>
              Contacting Girlbests for a booking is quick, simple and 100% confidential. We are available <strong className="text-white">24 hours a day, 7 days a week</strong> across all 90+ cities in India. Whether you prefer a phone call, WhatsApp message or email — our dedicated booking team responds within minutes to help you find the perfect companion.
            </p>
            <p>
              To make a booking, simply call or WhatsApp us at <strong className="text-white">+91-{siteConfig.phone}</strong> or our alternate number <strong className="text-white">+91-{siteConfig.whatsapp2}</strong>. Share your city, area, preferred escort type (college girl, independent, Russian, VIP, housewife) and your budget. Our team will share verified profiles with genuine photos for you to choose from. Once confirmed, the escort arrives at your hotel, residence or preferred location within 30 to 60 minutes.
            </p>

            <h3 className="text-lg font-bold text-white pt-1">What to Share When You Contact Us</h3>
            <p>
              For the fastest booking experience, share the following details: your <strong className="text-white">city and area</strong>, <strong className="text-white">escort category preference</strong>, your <strong className="text-white">budget range</strong>, and <strong className="text-white">preferred timing</strong> (day or night, short-time or full-night). Our team handles the rest — profile matching, confirmation and dispatch — so you can sit back and wait for your companion to arrive.
            </p>

            <h3 className="text-lg font-bold text-white pt-1">100% Private & Secure Communication</h3>
            <p>
              We never store your phone number, chat history or personal details after the booking is completed. All conversations on WhatsApp and calls are treated as strictly confidential. We do not share client information with any third party under any circumstances. Your privacy is not just a promise — it is our core policy backed by a decade of zero data breaches and a trusted reputation across India.
            </p>
            <p>
              For email enquiries, write to us at <strong className="text-white">{siteConfig.email}</strong>. Email is best for corporate bookings, event companions, travel escort enquiries and custom requests. We typically respond to emails within 2 to 4 hours. For urgent bookings, we recommend calling or WhatsApp for an instant response.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-[#ff9900] mb-6 text-center">Booking FAQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactFaqs.map(({ q, a }) => (
              <div key={q} className="bg-outer rounded-xl p-5">
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
