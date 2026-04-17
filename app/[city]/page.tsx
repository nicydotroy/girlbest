import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, getCityBySlug } from "@/lib/cities";
import { siteConfig } from "@/lib/config";
import {
  localBusinessSchema,
  faqSchema,
  breadcrumbSchema,
  serviceSchema,
  getCityFaqs,
} from "@/lib/schema";

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
    description: `Find verified call girls in ${city.name}${city.state ? `, ${city.state}` : ""}. College girls, Russian models, VIP escorts available 24/7. Cash payment. Instant booking: +91-${siteConfig.phone}.`,
    alternates: { canonical: `${siteConfig.baseUrl}/${city.slug}` },
    openGraph: {
      title: `Call Girl in ${city.name} | Escort Service | Girlbests`,
      description: `Verified call girls in ${city.name}. 1000+ profiles, 24/7 available, starting ₹3,999.`,
      url: `${siteConfig.baseUrl}/${city.slug}`,
      type: "website",
      images: [{ url: `${siteConfig.baseUrl}/images/banner/01.jpg`, width: 800, height: 600 }],
    },
  };
}

const bannerImages = Array.from({ length: 10 }, (_, i) =>
  `/images/banner/${String(i + 1).padStart(2, "0")}.jpg`
);

const heroAlts = [
  (name: string) => `Premium independent call girl service in ${name}`,
  (name: string) => `Verified VIP escort available for booking in ${name}`,
  (name: string) => `High-profile college girl escort in ${name} available 24/7`,
];

export default async function CityPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  const cityFaqs = getCityFaqs(city);
  const jsonLdBreadcrumb = breadcrumbSchema([
    { name: "Home", url: siteConfig.baseUrl },
    { name: `Call Girl in ${city.name}`, url: `${siteConfig.baseUrl}/${city.slug}` },
  ]);
  const jsonLdBusiness = localBusinessSchema(city);
  const jsonLdFaq = faqSchema(cityFaqs);
  const jsonLdService = serviceSchema(city.name);

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-outer py-2 px-4"
      >
        <div className="container mx-auto">
          <ol className="flex items-center gap-2 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-[#ff9900] transition-colors">Home</Link>
            </li>
            <li className="text-gray-600">›</li>
            <li className="text-[#ff9900] font-medium">
              Call Girl in {city.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section
        aria-label={`Call girl service hero ${city.name}`}
        className="py-10"
        style={{ background: "linear-gradient(135deg,#1a0000 0%,#0d0000 100%)" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
              Call Girl Service in {city.name}
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-2">
              Find <strong>verified, genuine call girls in {city.name}</strong>
              {city.state ? `, ${city.state}` : ""}. 
              College girls, Russian models, VIP high-profile escorts and more — 
              available <strong>24 hours, 7 days a week</strong>. 100% discreet, cash payment only.
            </p>
            <p className="text-[#ff9900] font-semibold mb-6">
              Starting ₹3,999 · Escort arrives in 30–60 minutes · Book now
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-[#5e0707] hover:bg-red-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
                aria-label={`Call to book escort service in ${city.name}`}
              >
                📞 Call: +91-{siteConfig.phone}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20GirlBests%20I%20need%20service%20in%20${encodeURIComponent(city.name)}`}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
                aria-label={`WhatsApp to book escort in ${city.name}`}
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
                  alt={heroAlts[i](city.name)}
                  width={400}
                  height={280}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-52 object-cover"
                  priority={i === 0}
                  title={heroAlts[i](city.name)}
                />
                <a href={`tel:${siteConfig.phone}`}>📞 Book Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      {city.areas.length > 0 && (
        <section
          aria-label={`Call girl available areas in ${city.name}`}
          className="py-10"
          style={{ background: "#0d0000" }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
              Call Girl Service in {city.name} by Area — Near Me
            </h2>
            <p className="text-gray-400 text-center mb-6">
              Select your locality in {city.name} for hyper-local escort service
            </p>
            <div className="service-links">
              {city.areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/${city.slug}/${area.slug}`}
                  aria-label={`Call girl in ${area.name}, ${city.name}`}
                >
                  📍 Call Girl in {area.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section
        aria-label={`${city.name} call girls photo gallery`}
        className="bg-main py-10"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-2">
            {city.name} Call Girls Photo Gallery
          </h2>
          <p className="text-gray-400 text-center mb-6">
            Genuine photos of verified escorts available in {city.name}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {bannerImages.slice(3, 13).map((src, i) => {
              const galleryAlts = [
                "Young college girl escort", "Independent model companion",
                "Russian VIP call girl", "Professional housewife escort",
                "Premium air hostess companion", "Celebrity model escort",
                "High-profile independent girl", "Verified escort profile",
                "Professional escort companion", "VIP escort service",
              ];
              return (
              <div key={i} className="img-box">
                <Image
                  src={src}
                  alt={`${galleryAlts[i] || "Verified escort"} in ${city.name}`}
                  width={400}
                  height={350}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="w-full h-36 object-cover rounded-xl"
                  title={`${galleryAlts[i] || "Verified escort"} in ${city.name}`}
                />
                <a href={`tel:${siteConfig.phone}`}>📞 Book</a>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About + Rates (EEAT) */}
      <section
        aria-label={`About call girl service in ${city.name}`}
        className="py-10"
        style={{ background: "#0d0000" }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-outer rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Call Girl Service in {city.name} — Verified &amp; Trusted
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              <strong className="text-white">Girlbests</strong> is {city.name}&apos;s most trusted
              escort service platform. We offer a wide range of{" "}
              <strong className="text-white">high-profile, independent and verified call girls</strong>{" "}
              in {city.name}{city.state ? `, ${city.state}` : ""}. All our escorts in {city.name}{" "}
              are personally screened and verified before listing — genuine photos, accurate
              descriptions, and real profiles only.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Our{" "}
              <strong className="text-white">call girl service in {city.name}</strong> is
              available <strong className="text-white">24 hours a day, 7 days a week</strong>{" "}
              across all major areas and localities. Whether you need a same-day booking or an
              advance reservation, we can arrange your companion within{" "}
              <strong className="text-white">30 to 60 minutes</strong>. We accept{" "}
              <strong className="text-white">cash payment only</strong> for complete privacy.
            </p>

            {/* Service types list */}
            <h3 className="text-xl font-bold text-[#ff9900] mb-3">
              Types of Call Girls Available in {city.name}
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 mb-6 columns-2">
              <li>College Call Girls in {city.name}</li>
              <li>Independent Escorts</li>
              <li>Russian &amp; Foreign Models</li>
              <li>Model &amp; Celebrity Escorts</li>
              <li>Housewife Call Girls</li>
              <li>VIP High-Profile Escorts</li>
              <li>Air Hostess Companions</li>
              <li>Outcall Hotel Service</li>
            </ul>

            {/* Rate table */}
            <h3 className="text-xl font-bold text-[#ff9900] mb-3">
              Call Girl Rates in {city.name} 2026
            </h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm text-gray-300 border-collapse">
                <thead>
                  <tr className="border-b border-[#5e0707]">
                    <th className="text-left py-2 pr-4 text-white">Service Type</th>
                    <th className="text-left py-2 pr-4 text-white">Duration</th>
                    <th className="text-left py-2 text-white">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["College Call Girl", "1–2 Hours", "₹3,999+"],
                    ["Independent Escort", "2–3 Hours", "₹5,999+"],
                    ["Model / VIP Escort", "2–4 Hours", "₹9,999+"],
                    ["Russian Call Girl", "2–4 Hours", "₹14,999+"],
                    ["Full Night (8 Hours)", "Overnight", "₹7,999+"],
                  ].map(([type, dur, rate]) => (
                    <tr key={type} className="border-b border-[#5e0707]/40">
                      <td className="py-2 pr-4">{type}</td>
                      <td className="py-2 pr-4 text-gray-400">{dur}</td>
                      <td className="py-2 text-[#ff9900] font-semibold">{rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 text-xs">
              * Rates are indicative. Final rate confirmed at time of booking. Cash only.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ (ASO + VSO) */}
      <section
        aria-label={`FAQ about call girl service in ${city.name}`}
        className="bg-main py-10"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            Frequently Asked Questions — Call Girl in {city.name}
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Common questions about escort service in {city.name}
          </p>
          <div className="space-y-4">
            {cityFaqs.map(({ q, a }) => (
              <div key={q} className="bg-outer rounded-xl p-5">
                <h3 className="text-white font-bold text-base mb-2">{q}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#5e0707] py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Book a Call Girl in {city.name} Now — Available 24/7
          </h2>
          <p className="text-red-200 mb-5">
            Cash payment · 100% discreet · Escort arrives in 30–60 mins
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
              rel="nofollow noopener noreferrer"
              className="bg-green-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-600 transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Other cities */}
      <section aria-label="Other cities" className="py-8" style={{ background: "#0d0000" }}>
        <div className="container mx-auto px-4">
          <h3 className="text-lg font-bold text-white mb-4 text-center">
            Explore Escort Service in Other Cities
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
                  aria-label={`Call girl service in ${c.name}`}
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
