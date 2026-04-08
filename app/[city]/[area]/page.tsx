import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, getCityBySlug, getAreaBySlug } from "@/lib/cities";
import { siteConfig } from "@/lib/config";

interface Props {
  params: Promise<{ city: string; area: string }>;
}

export async function generateStaticParams() {
  const params: { city: string; area: string }[] = [];
  for (const city of cities) {
    for (const area of city.areas) {
      params.push({ city: city.slug, area: area.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug, area: areaSlug } = await params;
  const city = getCityBySlug(citySlug);
  const area = getAreaBySlug(citySlug, areaSlug);
  if (!city || !area) return {};
  return {
    title: `Call Girl in ${area.name} ${city.name} | Escort Service ${area.name} | Girlbests`,
    description: `Find verified call girls in ${area.name}, ${city.name}. Independent escorts available 24/7. 100% discreet. Cash payment. Call +91-${siteConfig.phone}`,
    alternates: { canonical: `${siteConfig.baseUrl}/${city.slug}/${area.slug}` },
    openGraph: {
      title: `Call Girl in ${area.name} ${city.name} | Girlbests`,
      description: `Premium escort service in ${area.name}, ${city.name}. Verified profiles.`,
      url: `${siteConfig.baseUrl}/${city.slug}/${area.slug}`,
    },
  };
}

const bannerImages = Array.from({ length: 20 }, (_, i) =>
  `/images/banner/${String(i + 1).padStart(2, "0")}.jpg`
);

export default async function AreaPage({ params }: Props) {
  const { city: citySlug, area: areaSlug } = await params;
  const city = getCityBySlug(citySlug);
  const area = getAreaBySlug(citySlug, areaSlug);
  if (!city || !area) notFound();

  const otherAreas = city.areas.filter((a) => a.slug !== area.slug);

  return (
    <>
      {/* Hero */}
      <section
        className="py-10"
        style={{ background: "linear-gradient(135deg,#1a0000 0%,#0d0000 100%)" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-[#ff9900] text-sm font-semibold mb-2 uppercase tracking-wide">
              <Link href={`/${city.slug}`} className="hover:underline">
                {city.name}
              </Link>{" "}
              › {area.name}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Call Girl in {area.name}, {city.name}
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Verified &amp; independent call girls available in {area.name}, {city.name}.
              Genuine profiles, safe &amp; discreet service. Available 24/7.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-[#5e0707] hover:bg-red-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
              >
                📞 Call: +91-{siteConfig.phone}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20GirlBests%20I%20need%20service%20in%20${encodeURIComponent(area.name)}%20${encodeURIComponent(city.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {bannerImages.slice(0, 3).map((src, i) => (
              <div key={i} className="img-box rounded-xl overflow-hidden">
                <Image
                  src={src}
                  alt={`Call Girl in ${area.name} ${city.name} ${i + 1}`}
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

      {/* Gallery */}
      <section className="bg-main py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Call Girls in {area.name} — Photo Gallery
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
            {bannerImages.slice(3, 18).map((src, i) => (
              <div key={i} className="img-box">
                <Image
                  src={src}
                  alt={`Escort in ${area.name} ${i + 1}`}
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

      {/* Content */}
      <section className="py-10" style={{ background: "#0d0000" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-outer rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Call Girl Service in {area.name}, {city.name}
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Are you looking for a genuine and verified call girl service in {area.name},{" "}
              {city.name}? You have come to the right place. Girlbests offers the most reliable
              and discreet escort service in {area.name} with a large selection of beautiful,
              educated and professional companions.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              All our call girls in {area.name}, {city.name} are independently verified and
              available for outcall and incall services. We offer complete privacy, secure
              transactions (cash only) and 24/7 availability to ensure you have the best
              experience.
            </p>
            <h3 className="text-xl font-bold text-[#ff9900] mb-3">
              Available Escort Types in {area.name}
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 mb-5">
              <li>College Girls in {area.name}</li>
              <li>Independent Escorts near {area.name}</li>
              <li>Model & VIP Call Girls</li>
              <li>Housewife Escorts in {area.name}</li>
              <li>Russian & Foreign Models</li>
              <li>Air Hostess & Celebrity Escorts</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-[#5e0707] hover:bg-red-800 text-white font-semibold py-2 px-6 rounded-full transition-colors"
              >
                📞 Call Now
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20I%20need%20service%20in%20${encodeURIComponent(area.name)}%20${encodeURIComponent(city.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition-colors"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other areas in this city */}
      {otherAreas.length > 0 && (
        <section className="py-8" style={{ background: "#0a0a0a" }}>
          <div className="container mx-auto px-4">
            <h3 className="text-lg font-bold text-white mb-4 text-center">
              More Areas in {city.name}
            </h3>
            <div className="service-links">
              {otherAreas.map((a) => (
                <Link key={a.slug} href={`/${city.slug}/${a.slug}`}>
                  Call Girl in {a.name}
                </Link>
              ))}
            </div>
            <div className="text-center mt-4">
              <Link
                href={`/${city.slug}`}
                className="text-[#ff9900] hover:underline text-sm"
              >
                ← All Call Girls in {city.name}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA bar */}
      <section className="bg-[#5e0707] py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-white mb-3">
            Book Escort in {area.name}, {city.name}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white text-[#5e0707] font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors"
            >
              📞 +91-{siteConfig.phone}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20GirlBests`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-600 transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
