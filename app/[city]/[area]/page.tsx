import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, getCityBySlug, getAreaBySlug } from "@/lib/cities";
import { siteConfig } from "@/lib/config";
import {
  areaLocalBusinessSchema,
  faqSchema,
  breadcrumbSchema,
  getAreaFaqs,
} from "@/lib/schema";

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
    title: `Call Girl in ${area.name} ${city.name} | Escort Near ${area.name} ₹3999 | Girlbests`,
    description: `Verified call girls in ${area.name}, ${city.name}. Independent escorts available 24/7 near ${area.name}. 100% discreet, cash payment. Book: +91-${siteConfig.phone}.`,
    alternates: { canonical: `${siteConfig.baseUrl}/${city.slug}/${area.slug}` },
    openGraph: {
      title: `Call Girl in ${area.name}, ${city.name} | Girlbests`,
      description: `Verified escorts near ${area.name}, ${city.name}. 24/7 available. Starting ₹3,999.`,
      url: `${siteConfig.baseUrl}/${city.slug}/${area.slug}`,
      type: "website",
      images: [{ url: `${siteConfig.baseUrl}/images/banner/01.jpg`, width: 800, height: 600 }],
    },
  };
}

const bannerImages = Array.from({ length: 20 }, (_, i) =>
  `/images/banner/${String(i + 1).padStart(2, "0")}.jpg`
);

const heroAlts = [
  (area: string, city: string) => `Premium independent call girl service near ${area}, ${city}`,
  (area: string, city: string) => `Verified VIP escort available near ${area}, ${city}`,
  (area: string, city: string) => `High-profile escort companion near ${area}, ${city}`,
];

export default async function AreaPage({ params }: Props) {
  const { city: citySlug, area: areaSlug } = await params;
  const city = getCityBySlug(citySlug);
  const area = getAreaBySlug(citySlug, areaSlug);
  if (!city || !area) notFound();

  const otherAreas = city.areas.filter((a) => a.slug !== area.slug);
  const areaFaqs = getAreaFaqs(city, area);
  const jsonLdBreadcrumb = breadcrumbSchema([
    { name: "Home", url: siteConfig.baseUrl },
    { name: `Call Girl in ${city.name}`, url: `${siteConfig.baseUrl}/${city.slug}` },
    { name: `Call Girl in ${area.name}`, url: `${siteConfig.baseUrl}/${city.slug}/${area.slug}` },
  ]);
  const jsonLdBusiness = areaLocalBusinessSchema(city, area);
  const jsonLdFaq = faqSchema(areaFaqs);

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

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-outer py-2 px-4">
        <div className="container mx-auto">
          <ol className="flex items-center gap-2 text-sm text-gray-400 flex-wrap">
            <li>
              <Link href="/" className="hover:text-[#ff9900] transition-colors">Home</Link>
            </li>
            <li className="text-gray-600">›</li>
            <li>
              <Link href={`/${city.slug}`} className="hover:text-[#ff9900] transition-colors">
                {city.name}
              </Link>
            </li>
            <li className="text-gray-600">›</li>
            <li className="text-[#ff9900] font-medium">{area.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section
        aria-label={`Call girl service in ${area.name}, ${city.name}`}
        className="py-10"
        style={{ background: "linear-gradient(135deg,#1a0000 0%,#0d0000 100%)" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
              Call Girl in {area.name}, {city.name}
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-2">
              Find <strong>verified call girls near {area.name}</strong> in {city.name}.
              College girls, independent escorts, model escorts and VIP companions available{" "}
              <strong>24/7 near you</strong>. 100% discreet, genuine profiles, cash payment.
            </p>
            <p className="text-[#ff9900] font-semibold mb-6">
              Starting ₹3,999 · Reaches {area.name} in 30–60 mins
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-[#5e0707] hover:bg-red-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
                aria-label={`Call to book escort in ${area.name}, ${city.name}`}
              >
                📞 Call: +91-{siteConfig.phone}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20GirlBests%20I%20need%20service%20in%20${encodeURIComponent(area.name)}%20${encodeURIComponent(city.name)}`}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
                aria-label={`WhatsApp for escort in ${area.name}`}
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
                  alt={heroAlts[i](area.name, city.name)}
                  width={400}
                  height={280}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-52 object-cover"
                  priority={i === 0}
                  title={heroAlts[i](area.name, city.name)}
                />
                <a href={`tel:${siteConfig.phone}`}>📞 Book Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        aria-label={`Call girls near ${area.name} photo gallery`}
        className="bg-main py-10"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-2">
            Call Girls near {area.name} — Photo Gallery
          </h2>
          <p className="text-gray-400 text-center mb-6">
            Genuine photos of verified escorts serving {area.name}, {city.name}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
            {bannerImages.slice(3, 18).map((src, i) => {
              const galleryAlts = [
                "Young college girl escort", "Independent model companion",
                "Russian VIP call girl", "Professional housewife escort",
                "Premium air hostess companion", "Celebrity model escort",
                "High-profile independent girl", "Verified escort profile",
                "Professional escort companion", "VIP escort service",
                "Luxury model escort", "Discreet companion service",
                "Elite independent escort", "Premium verified escort",
                "Exclusive VIP companion",
              ];
              return (
              <div key={i} className="img-box">
                <Image
                  src={src}
                  alt={`${galleryAlts[i]} near ${area.name}, ${city.name}`}
                  width={400}
                  height={350}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  className="w-full h-36 object-cover rounded-xl"
                  title={`${galleryAlts[i]} near ${area.name}, ${city.name}`}
                />
                <a href={`tel:${siteConfig.phone}`}>📞 Book</a>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EEAT Content */}
      <section
        aria-label={`About call girl service in ${area.name}`}
        className="py-10"
        style={{ background: "#0d0000" }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-outer rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Call Girl Service in {area.name}, {city.name} — Verified &amp; Trusted
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Looking for a reliable and genuine{" "}
              <strong className="text-white">
                call girl service near {area.name}, {city.name}
              </strong>
              ? Girlbests is the most trusted escort platform serving {area.name} and all
              surrounding areas in {city.name}. Our escorts in {area.name} are{" "}
              <strong className="text-white">personally verified</strong> with genuine photos —
              what you see is exactly what you get.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Our <strong className="text-white">escort service near {area.name}</strong> is
              available <strong className="text-white">24 hours a day</strong>, every day of the
              week. Escorts can reach your hotel or location in {area.name} within{" "}
              <strong className="text-white">30 to 60 minutes</strong> of booking. We accept{" "}
              <strong className="text-white">cash payment only</strong> to ensure complete
              privacy and confidentiality.
            </p>

            <h3 className="text-xl font-bold text-[#ff9900] mb-3">
              Escort Types Available near {area.name}
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 mb-6 columns-2">
              <li>College Girls near {area.name}</li>
              <li>Independent Escorts</li>
              <li>Russian &amp; Foreign Models</li>
              <li>Model &amp; VIP Escorts</li>
              <li>Housewife Call Girls</li>
              <li>Air Hostess Companions</li>
            </ul>

            {/* Rate table */}
            <h3 className="text-xl font-bold text-[#ff9900] mb-3">
              Escort Rates near {area.name}, {city.name}
            </h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm text-gray-300 border-collapse">
                <thead>
                  <tr className="border-b border-[#5e0707]">
                    <th className="text-left py-2 pr-4 text-white">Type</th>
                    <th className="text-left py-2 text-white">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["College Call Girl", "₹3,999+"],
                    ["Independent Escort", "₹5,999+"],
                    ["Model / VIP Escort", "₹9,999+"],
                    ["Russian Call Girl", "₹14,999+"],
                    ["Full Night", "₹7,999+"],
                  ].map(([type, rate]) => (
                    <tr key={type} className="border-b border-[#5e0707]/40">
                      <td className="py-2 pr-4">{type}</td>
                      <td className="py-2 text-[#ff9900] font-semibold">{rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap gap-4 mt-5">
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-[#5e0707] hover:bg-red-800 text-white font-semibold py-2 px-6 rounded-full transition-colors"
              >
                📞 Call Now
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20I%20need%20service%20in%20${encodeURIComponent(area.name)}%20${encodeURIComponent(city.name)}`}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition-colors"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (ASO + VSO) */}
      <section
        aria-label={`FAQ about escort service near ${area.name}`}
        className="bg-main py-10"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            FAQ — Call Girl in {area.name}, {city.name}
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Common questions about escort service near {area.name}
          </p>
          <div className="space-y-4">
            {areaFaqs.map(({ q, a }) => (
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
            Book a Call Girl near {area.name} Now
          </h2>
          <p className="text-red-200 mb-5">
            Available 24/7 · Cash payment · Escort arrives in 30–60 mins
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white text-[#5e0707] font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors"
            >
              📞 +91-{siteConfig.phone}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20I%20need%20escort%20service%20near%20${encodeURIComponent(area.name)}%20${encodeURIComponent(city.name)}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="bg-green-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-600 transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Other areas */}
      {otherAreas.length > 0 && (
        <section
          aria-label={`Other areas in ${city.name}`}
          className="py-8"
          style={{ background: "#0d0000" }}
        >
          <div className="container mx-auto px-4">
            <h3 className="text-lg font-bold text-white mb-4 text-center">
              More Areas in {city.name}
            </h3>
            <div className="service-links">
              {otherAreas.map((a) => (
                <Link
                  key={a.slug}
                  href={`/${city.slug}/${a.slug}`}
                  aria-label={`Call girl in ${a.name}, ${city.name}`}
                >
                  📍 Call Girl in {a.name}
                </Link>
              ))}
            </div>
            <div className="text-center mt-4">
              <Link
                href={`/${city.slug}`}
                className="text-[#ff9900] hover:underline text-sm"
              >
                ← View All Areas in {city.name}
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
