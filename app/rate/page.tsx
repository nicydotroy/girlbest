import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Call Girl Rates 2026 | Escort Service Price List India | Girlbests",
  description:
    "Complete call girl rate list 2026. College girls from ₹3,999. Model escorts from ₹7,999. Russian VIP from ₹14,999. Transparent pricing, cash payment. Call +91-7061819139.",
  alternates: { canonical: `${siteConfig.baseUrl}/rate` },
  openGraph: {
    title: "Call Girl Rates 2026 | Escort Price List | Girlbests",
    description: "Complete transparent escort rate list. Starting ₹3,999. All types covered.",
    url: `${siteConfig.baseUrl}/rate`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Call Girl Rates 2026 | Escort Price List | Girlbests",
    description: "Complete transparent escort rate list. Starting ₹3,999. All types covered.",
  },
};

const rateFaqs = [
  {
    q: "What is the minimum price for call girl service in India?",
    a: "The minimum rate for call girl service in India starts from ₹3,999 for a short time booking (1–2 hours). Full night service starts from ₹6,999.",
  },
  {
    q: "How much does a Russian call girl cost in India?",
    a: "Russian call girl rates in India start from ₹14,999 for short time and ₹24,999 for full night. Russian escorts are among the premium category.",
  },
  {
    q: "What is a full night booking and how much does it cost?",
    a: "A full night booking is typically 8–10 hours. Rates start from ₹6,999 for college call girls and go up to ₹24,999 for premium Russian escorts.",
  },
  {
    q: "Are the rates on Girlbests fixed or negotiable?",
    a: "The rates shown are starting prices. Final rate depends on your city, escort selection and services required. Call +91-7061819139 for a confirmed quote.",
  },
  {
    q: "What is the rate for college call girls?",
    a: "College call girl rates start from ₹3,999 for short time and ₹6,999 for full night. They are the most affordable and popular escort category.",
  },
  {
    q: "How much does an independent escort cost?",
    a: "Independent escort rates start from ₹4,999 for short time and ₹8,999 for full night. Independent escorts often offer more flexible services.",
  },
  {
    q: "What is the VIP escort service rate?",
    a: "VIP high-profile escort rates start from ₹9,999 for short time and ₹14,999 for full night. VIP escorts include models, actresses and celebrity companions.",
  },
  {
    q: "Do rates vary by city?",
    a: "Yes. Rates may vary slightly between cities. Metro cities like Delhi, Mumbai and Bangalore may have different pricing than tier-2 cities. Call for exact rates.",
  },
  {
    q: "Is there any hidden charge or extra fee?",
    a: "No. The rate quoted is the final rate. There are no hidden charges, service fees or taxes. What we quote is exactly what you pay in cash.",
  },
  {
    q: "Do I need to pay in advance?",
    a: "No. We never ask for advance payment or deposits. Full payment is made in cash only when you meet the escort. Zero risk for clients.",
  },
  {
    q: "What is included in the escort service rate?",
    a: "The quoted rate includes the escort's companionship for the booked duration. Specific services vary by escort. Call +91-7061819139 to discuss details.",
  },
  {
    q: "How much does a housewife escort cost?",
    a: "Housewife escort rates start from ₹4,999 for short time and ₹7,999 for full night. Housewife escorts are experienced and mature companions.",
  },
  {
    q: "Are there any discounts for regular clients?",
    a: "Yes. We offer special rates and priority booking for regular clients. Contact us to learn about our loyalty benefits and repeat booking discounts.",
  },
  {
    q: "What is the rate for a 2-hour booking?",
    a: "A 2-hour booking typically costs between ₹4,999 and ₹7,999 depending on the escort category. This is a popular option for extended companionship.",
  },
  {
    q: "How do I get the best rate for escort service?",
    a: "Call us directly at +91-7061819139 and tell us your budget. We will find the best matching escort within your price range across any city in India.",
  },
  {
    q: "Are model escort rates different from regular escorts?",
    a: "Yes. Model escorts are premium category with rates starting from ₹9,999 for short time. They are professional models offering high-end companionship.",
  },
];

const ratePackages = [
  {
    category: "Budget Escorts",
    color: "border-gray-500",
    badge: "AFFORDABLE",
    badgeBg: "bg-gray-600",
    rates: [
      { type: "College Call Girl (Short Time)", price: "₹3,999" },
      { type: "College Call Girl (Full Night)", price: "₹6,999" },
      { type: "Local Housewife (Short Time)", price: "₹4,999" },
      { type: "Local Housewife (Full Night)", price: "₹7,999" },
    ],
  },
  {
    category: "Standard Escorts",
    color: "border-[#5e0707]",
    badge: "POPULAR",
    badgeBg: "bg-[#5e0707]",
    rates: [
      { type: "Independent Escort (Short Time)", price: "₹5,999" },
      { type: "Independent Escort (Full Night)", price: "₹9,999" },
      { type: "Model Escort (Short Time)", price: "₹7,999" },
      { type: "Model Escort (Full Night)", price: "₹12,999" },
    ],
  },
  {
    category: "VIP / Premium",
    color: "border-[#ff9900]",
    badge: "PREMIUM",
    badgeBg: "bg-[#ff9900]",
    rates: [
      { type: "VIP High Profile (Short Time)", price: "₹9,999" },
      { type: "VIP High Profile (Full Night)", price: "₹17,999" },
      { type: "Russian / Foreign Girl (ST)", price: "₹14,999" },
      { type: "Russian / Foreign Girl (FN)", price: "₹24,999" },
    ],
  },
];

export default function RatePage() {
  const jsonLdService = serviceSchema("India");
  const jsonLdFaq = faqSchema(rateFaqs);
  const jsonLdBreadcrumb = breadcrumbSchema([
    { name: "Home", url: siteConfig.baseUrl },
    { name: "Call Girl Rates", url: `${siteConfig.baseUrl}/rate` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
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
            <li className="text-[#ff9900] font-medium">Call Girl Rates</li>
          </ol>
        </div>
      </nav>

      <section
      className="py-10"
      style={{ background: "linear-gradient(135deg,#1a0000 0%,#0d0000 100%)" }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
          Call Girl Rates & Pricing
        </h1>
        <p className="text-gray-400 text-center mb-10">
          Transparent pricing for all escort service types. Cash payment only.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {ratePackages.map((pkg) => (
            <div
              key={pkg.category}
              className={`bg-outer rounded-xl p-6 border-t-4 ${pkg.color}`}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-white font-bold text-lg">{pkg.category}</h2>
                <span
                  className={`${pkg.badgeBg} text-white text-xs font-bold px-2 py-1 rounded`}
                >
                  {pkg.badge}
                </span>
              </div>
              <ul className="space-y-3">
                {pkg.rates.map((r) => (
                  <li key={r.type} className="flex justify-between items-start gap-2">
                    <span className="text-gray-400 text-sm">{r.type}</span>
                    <span className="text-[#ff9900] font-bold text-sm whitespace-nowrap">
                      {r.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-outer rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-3">Important Notes</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
            <li>All rates are starting prices. Final rate depends on location, selection and services.</li>
            <li>Cash payment only. No digital payments accepted.</li>
            <li>Rates may vary by city and escort availability.</li>
            <li>Short Time typically means 1-2 hours. Full Night is 8-10 hours.</li>
            <li>Call or WhatsApp for exact pricing and availability.</li>
          </ul>
        </div>

        <div className="text-center">
          <p className="text-white font-bold text-xl mb-4">
            For exact rates, call us now:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-[#5e0707] hover:bg-red-800 text-white font-bold py-3 px-10 rounded-full text-lg transition-colors"
            >
              📞 +91-{siteConfig.phone}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20I%20need%20rates%20and%20availability`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-10 rounded-full text-lg transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

        {/* Rate FAQ (ASO + VSO) */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-[#ff9900] mb-6 text-center">
            Call Girl Rate — FAQ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rateFaqs.map(({ q, a }) => (
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
