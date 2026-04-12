import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { cities } from "@/lib/cities";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#5e0707] pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-3">
              Call Girls Service
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Our list includes young call girls, college call girls, aunty call
              girls, Russian call girls, model call girls, VIP call girls, and
              many more. Browse our website to choose the perfect companion to
              fulfil your desires.
            </p>
            <p className="text-gray-400 text-xs mt-3">
              © {new Date().getFullYear()} Girlbests. All rights reserved.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-3">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/gallery", label: "Photo Gallery" },
                { href: "/rate", label: "Call Girl Rates" },
                { href: "/contact", label: "Contact Us" },
                { href: "/privacy", label: "Privacy Policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#ff9900] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* City links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-3">Top Cities</h4>
            <div className="flex flex-wrap gap-2">
              {cities.slice(0, 30).map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}`}
                  className="text-gray-400 hover:text-[#ff9900] text-xs transition-colors"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#5e0707] text-center">
          <p className="text-gray-500 text-xs">
            This website is for adults aged 18 and above only. By using this
            site you confirm you are 18+ and comply with local laws.
          </p>
          <div className="mt-3 flex justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-[#ff9900] hover:underline text-sm"
            >
              📞 +91-{siteConfig.phone}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20GirlBests`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-green-400 hover:underline text-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
