import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, getCityBySlug } from "@/lib/cities";
import { siteConfig } from "@/lib/config";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};
  return {
    title: `Call Girl in ${city.name} | Escort Service ${city.name} ₹3999 | Girlbests`,
    description: `Find verified call girls in ${city.name}${city.state ? `, ${city.state}` : ""}. Independent escorts, college girls, Russian models. 24/7 available. Cash payment. Call +91-${siteConfig.phone}`,
    alternates: { canonical: `${siteConfig.baseUrl}/${city.slug}` },
    openGraph: {
      title: `Call Girl in ${city.name} | Escort Service | Girlbests`,
      description: `Premium call girl service in ${city.name}. 1000+ verified profiles.`,
      url: `${siteConfig.baseUrl}/${city.slug}`,
    },
  };
}

const bannerImages = Array.from({ length: 10 }, (_, i) =>
  `/images/banner/${String(i + 1).padStart(2, "0")}.jpg`
);

export default async function CityPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  return (
    <>
      {/* Hero */}
      <section
        className="py-10"
        style={{ background: "linear-gradient(135deg,#1a0000 0%,#0d0000 100%)" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Call Girl Service in {city.name}
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Find high-profile, verified &amp; independent call girls in {city.name}
              {city.state ? `, ${city.state}` : ""}. 100% genuine service with 1000+
              profiles. Discreet, safe &amp; affordable.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-[#5e0707] hover:bg-red-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
              >
                📞 Call: +91-{siteConfig.phone}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20GirlBests%20I%20need%20service%20in%20${encodeURIComponent(city.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Top 3 banner images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {bannerImages.slice(0, 3).map((src, i) => (
              <div key={i} className="img-box rounded-xl overflow-hidden">
                <Image
                  src={src}
                  alt={`Call Girl in ${city.name} ${i + 1}`}
                  width={400}
                  height={280}
                  className="w-full h-52 object-cover"
                  priority={i === 0}
                />
                <a href={`tel:${siteConfig.phone}`}>📞 Book Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      {city.areas.length > 0 && (
        <section className="py-10" style={{ background: "#0d0000" }}>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
              Call Girl Service in {city.name} by Area
            </h2>
            <p className="text-gray-400 text-center mb-6">
              Choose your area in {city.name} for local escort service
            </p>
            <div className="service-links">
              {city.areas.map((area) => (
                <Link key={area.slug} href={`/${city.slug}/${area.slug}`}>
                  Call Girl in {area.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="bg-main py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            {city.name} Call Girls Gallery
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {bannerImages.slice(3, 13).map((src, i) => (
              <div key={i} className="img-box">
                <Image
                  src={src}
                  alt={`Escort in ${city.name} ${i + 1}`}
                  width={220}
                  height={180}
                  className="w-full h-36 object-cover rounded-xl"
                />
                <a href={`tel:${siteConfig.phone}`}>📞 Book</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info content */}
      <section className="py-10" style={{ background: "#0d0000" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-outer rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              About Our Call Girl Service in {city.name}
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Welcome to Girlbests — the most trusted escort service in {city.name}
              {city.state ? `, ${city.state}` : ""}. We offer a wide range of high-profile,
              independent and verified call girls to match every taste and budget. Whether you
              are looking for a college girl, Russian model, VIP escort or a housewife, we have
              the perfect companion for you.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              All our escorts in {city.name} are carefully screened and verified before being
              listed on our platform. We guarantee 100% genuine profiles, discreet service and
              your complete privacy. Our service is available 24 hours a day, 7 days a week
              across all major areas of {city.name}.
            </p>
            <h3 className="text-xl font-bold text-[#ff9900] mb-3">
              Types of Call Girls Available in {city.name}
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 mb-5">
              <li>College Call Girls in {city.name}</li>
              <li>Independent Escorts in {city.name}</li>
              <li>Russian & Foreign Girls</li>
              <li>Model & Celebrity Escorts</li>
              <li>Housewife Escorts in {city.name}</li>
              <li>VIP High-Profile Call Girls</li>
              <li>Air Hostess Escort Service</li>
            </ul>
            <h3 className="text-xl font-bold text-[#ff9900] mb-3">
              Call Girl Rates in {city.name}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-300 border-collapse">
                <thead>
                  <tr className="border-b border-[#5e0707]">
                    <th className="text-left py-2 pr-4 text-white">Service Type</th>
                    <th className="text-left py-2 text-white">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["College Call Girl", "₹3,999 onwards"],
                    ["Independent Escort", "₹5,999 onwards"],
                    ["Model / VIP Escort", "₹9,999 onwards"],
                    ["Russian Call Girl", "₹14,999 onwards"],
                    ["Full Night Service", "₹7,999 onwards"],
                  ].map(([type, rate]) => (
                    <tr key={type} className="border-b border-[#5e0707]/40">
                      <td className="py-2 pr-4">{type}</td>
                      <td className="py-2 text-[#ff9900] font-semibold">{rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#5e0707] py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Book a Call Girl in {city.name} Now
          </h2>
          <p className="text-red-200 mb-5">
            Available 24/7 · Cash payment · 100% discreet
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white text-[#5e0707] font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors"
            >
              📞 +91-{siteConfig.phone}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20I%20need%20escort%20service%20in%20${encodeURIComponent(city.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-600 transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Other cities */}
      <section className="py-8" style={{ background: "#0d0000" }}>
        <div className="container mx-auto px-4">
          <h3 className="text-lg font-bold text-white mb-4 text-center">
            Explore Other Cities
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {cities
              .filter((c) => c.slug !== city.slug)
              .slice(0, 20)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  className="text-gray-400 hover:text-[#ff9900] text-sm border border-[#5e0707]/50 px-3 py-1 rounded-full transition-colors"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
