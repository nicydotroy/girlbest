import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { organizationSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

const aboutFaqs = [
  {
    q: "How long has Girlbests been operating?",
    a: "Girlbests has been operating since 2015 — over 10 years providing verified escort services across India. We have served more than 1 lakh satisfied clients.",
  },
  {
    q: "Are all escort profiles on Girlbests genuine?",
    a: "Yes. Every escort profile is personally verified by our team before listing. We guarantee genuine photos and accurate descriptions. No fake or misleading profiles.",
  },
  {
    q: "How does Girlbests ensure client privacy?",
    a: "We accept cash payment only — no digital trail. Client information is never stored or shared. Our zero-disclosure policy is strictly enforced.",
  },
  {
    q: "What cities does Girlbests cover?",
    a: "Girlbests covers 90+ cities across India including Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad and many more.",
  },
  {
    q: "What is the mission of Girlbests?",
    a: "Our mission is to provide a safe, transparent and professional platform connecting clients with verified escorts. We prioritize safety, privacy and genuine experiences.",
  },
  {
    q: "How many escorts are listed on Girlbests?",
    a: "Girlbests has over 1000+ verified escort profiles across India. New profiles are added daily after thorough verification by our team.",
  },
  {
    q: "What makes Girlbests different from other escort services?",
    a: "Girlbests stands out with 100% verified profiles, cash-only payment for privacy, 24/7 availability, 10+ years of experience and a zero-complaints policy.",
  },
  {
    q: "Does Girlbests have a physical office?",
    a: "Girlbests operates primarily online for client privacy. Our team coordinates bookings via phone and WhatsApp. We have representatives in all major cities.",
  },
  {
    q: "What is the age requirement to use Girlbests?",
    a: "You must be 18 years or older to use Girlbests. All escorts listed on our platform are also verified adults aged 18+. Age verification is mandatory.",
  },
  {
    q: "Does Girlbests operate legally?",
    a: "Girlbests operates as an adult companion directory. All services are between consenting adults. We comply with applicable laws and do not facilitate illegal activities.",
  },
  {
    q: "How does Girlbests verify escort profiles?",
    a: "Our verification process includes photo verification, identity checks and in-person meeting. Only after passing all checks is a profile listed on our platform.",
  },
  {
    q: "Can I trust the reviews on Girlbests?",
    a: "Yes. All reviews on Girlbests are from verified clients. We do not allow fake or paid reviews. Our rating system reflects genuine client experiences.",
  },
  {
    q: "What customer support does Girlbests offer?",
    a: "We offer 24/7 customer support via phone and WhatsApp. Our team is always available to help with bookings, queries and any concerns you may have.",
  },
  {
    q: "Does Girlbests share my data with third parties?",
    a: "Never. We have a strict no-disclosure policy. Client data is never shared, sold or transferred to any third party. Your privacy is our top priority.",
  },
  {
    q: "How can I provide feedback about Girlbests?",
    a: "You can share your feedback via WhatsApp or phone call. We value client feedback and continuously improve our services based on your suggestions.",
  },
  {
    q: "What is the cancellation policy at Girlbests?",
    a: "You can cancel anytime before the escort arrives with no charges. We never take advance payments, so cancellation is completely risk-free for clients.",
  },
];

export const metadata: Metadata = {
  title: "About Girlbests | India's No.1 Trusted Escort Service | Est. 2015",
  description:
    "Girlbests is India's most trusted and verified escort service. 10+ years experience, 1 lakh+ clients, 1000+ profiles, 90+ cities. Learn about our commitment to safety, privacy and genuine service.",
  alternates: { canonical: `${siteConfig.baseUrl}/about` },
  openGraph: {
    title: "About Girlbests | India's No.1 Escort Service",
    description: "10+ years, 1 lakh+ happy clients, 1000+ verified profiles across 90+ cities.",
    url: `${siteConfig.baseUrl}/about`,
  },
  twitter: {
    card: "summary_large_image",
    title: "About Girlbests | India's No.1 Escort Service",
    description: "10+ years, 1 lakh+ happy clients, 1000+ verified profiles across 90+ cities.",
  },
};

export default function AboutPage() {
  const jsonLdOrg = organizationSchema();
  const jsonLdFaqAbout = faqSchema(aboutFaqs);
  const jsonLdBreadcrumb = breadcrumbSchema([
    { name: "Home", url: siteConfig.baseUrl },
    { name: "About Us", url: `${siteConfig.baseUrl}/about` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaqAbout) }}
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
            <li className="text-[#ff9900] font-medium">About Us</li>
          </ol>
        </div>
      </nav>

      <section aria-label="About Girlbests" className="py-12" style={{ background: "linear-gradient(135deg,#1a0000 0%,#0d0000 100%)" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
            About Girlbests
          </h1>
          <p className="text-gray-400 text-center mb-6">
            India&apos;s Most Trusted Escort Service — Established 2015
          </p>

          {/* Trust stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "1 Lakh+", label: "Happy Clients" },
              { value: "1000+", label: "Verified Profiles" },
              { value: "90+", label: "Cities Covered" },
            ].map((s) => (
              <div key={s.label} className="bg-outer rounded-xl p-4 text-center">
                <p className="text-white text-2xl font-bold">{s.value}</p>
                <p className="text-gray-400 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-outer rounded-xl p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#ff9900] mb-4">Who We Are</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Girlbests</strong> is India&apos;s premier and
              most trusted escort service platform, established in 2015. We connect discerning
              gentlemen with <strong className="text-white">verified, high-profile companions</strong>{" "}
              across 90+ cities. Over the past decade, we have served{" "}
              <strong className="text-white">more than 1 lakh satisfied clients</strong> and
              maintained a <strong className="text-white">4.8/5 rating</strong> with a
              zero-complaints policy.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our platform features <strong className="text-white">1000+ genuine verified profiles</strong>{" "}
              of beautiful, educated and professional escorts including college girls,
              independent escorts, Russian models, VIP companions, housewife escorts and
              air hostess companions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Every profile is{" "}
              <strong className="text-white">personally verified by our dedicated team</strong>{" "}
              before being listed. We guarantee genuine photos, accurate descriptions and
              authentic profiles — no fake content, ever.
            </p>
          </div>

          <div className="bg-outer rounded-xl p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#ff9900] mb-4">Our Commitment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: "✅",
                  title: "100% Verified Profiles",
                  desc: "Every escort is manually verified for authenticity. What you see is what you get.",
                },
                {
                  icon: "🔒",
                  title: "Complete Privacy",
                  desc: "Cash payment only. Client data never stored or shared. Zero-disclosure guarantee.",
                },
                {
                  icon: "🛡️",
                  title: "Safety First",
                  desc: "Strict 18+ age verification. Consensual, legal, safe service. Zero-tolerance for unsafe practices.",
                },
                {
                  icon: "⭐",
                  title: "4.8/5 Client Rating",
                  desc: "Over 3,800 verified reviews. Highest satisfaction rate in India's escort industry.",
                },
                {
                  icon: "🕐",
                  title: "24/7 Availability",
                  desc: "Round-the-clock service, every day of the year, including all holidays.",
                },
                {
                  icon: "📍",
                  title: "Pan-India Coverage",
                  desc: "90+ cities from metro to tier-2. Local area coverage in every city.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SEO Content */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-[#ff9900] mb-4 text-center">Why Millions Trust Girlbests</h2>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>
                Since 2015, <strong className="text-white">Girlbests</strong> has grown from a single-city escort service to India&apos;s most trusted platform covering <strong className="text-white">90+ cities and 888+ areas</strong>. Our journey has been built on three pillars — <strong className="text-white">genuine profiles, total privacy and professional service</strong>. We have served over 1 lakh clients with a 4.8/5 satisfaction rating and a zero-complaints policy that sets us apart in the industry.
              </p>
              <p>
                Our team comprises experienced professionals dedicated to providing a safe and seamless escort experience. From our booking coordinators who match you with the right companion, to our verification team that screens every escort — every member of the Girlbests team is committed to excellence. We operate with a clear code of conduct that ensures respect, safety and professionalism at every step.
              </p>

              <h3 className="text-lg font-bold text-white pt-1">Our Commitment to Safety & Privacy</h3>
              <p>
                Safety is non-negotiable at Girlbests. Every escort is a <strong className="text-white">verified adult aged 18+</strong>. All interactions are between consenting adults. We accept <strong className="text-white">cash payment only</strong> to eliminate any digital trail. Client data is never stored, shared or sold. Our decade-long record of <strong className="text-white">zero data breaches and zero safety incidents</strong> is our strongest credential.
              </p>
              <p>
                Whether you are a first-time client exploring companion services or a long-time patron — Girlbests offers the same trustworthy, discreet experience. Our customer support is available 24/7 to address any questions, concerns or special requests. We believe that trust is earned through consistency, and every booking reinforces the reputation we have built over the years.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#ff9900] mb-6 text-center">
              About Girlbests — FAQ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aboutFaqs.map(({ q, a }) => (
                <div key={q} className="bg-outer rounded-xl p-5">
                  <h3 className="text-white font-bold text-sm mb-2">{q}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-outer rounded-xl p-6 md:p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-3">Get In Touch</h2>
            <p className="text-gray-400 mb-5">
              Our team is available 24/7 for bookings and enquiries.
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
    </>
  );
}
