import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Call Girl Rates & Price List | Escort Service Charges | Girlbests",
  description:
    "Transparent call girl rates and pricing. Budget to VIP escort service packages. Starting from ₹3999. Cash payment accepted.",
};

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
  return (
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
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-10 rounded-full text-lg transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
