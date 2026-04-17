import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Photo Gallery | Call Girls Gallery | Girlbests",
  description:
    "Browse our photo gallery of beautiful, verified call girls available across India. 1000+ genuine profiles. College girls, Russian models, VIP escorts.",
  alternates: { canonical: `${siteConfig.baseUrl}/gallery` },
  openGraph: {
    title: "Call Girls Photo Gallery | Girlbests",
    description:
      "Browse genuine photos of 1000+ verified escorts available across 90+ cities in India.",
    url: `${siteConfig.baseUrl}/gallery`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Call Girls Photo Gallery | Girlbests",
    description: "Browse genuine photos of 1000+ verified escorts available across 90+ cities in India.",
  },
};

const galleryAlts = [
  "Young college call girl escort", "Independent high-profile model escort",
  "Russian VIP call girl for booking", "Professional housewife escort companion",
  "Premium air hostess call girl", "Celebrity model escort available",
  "High-profile independent escort", "Verified escort companion profile",
  "Professional VIP escort service", "Luxury model call girl",
  "Discreet companion escort", "Elite independent call girl",
  "Premium verified escort India", "Exclusive VIP companion",
  "Genuine college escort girl", "Independent Russian model",
  "Professional model companion", "VIP high-profile escort",
  "Verified call girl India", "Premium escort companion",
  "Luxury VIP call girl service", "Independent escort girl",
  "Professional college escort", "Genuine model companion",
  "High-class independent escort", "Verified Russian escort",
  "Premium call girl profile", "Exclusive model escort",
  "Elite VIP companion girl", "Genuine independent escort",
  "Professional verified call girl", "Luxury escort companion",
  "Premium VIP model escort", "Discreet call girl service",
  "Independent verified escort", "High-profile model girl",
  "Genuine VIP escort India", "Professional independent companion",
  "Celebrity escort companion", "Verified model call girl",
  "Premium independent escort", "Luxury call girl companion",
  "Elite escort service India", "Exclusive verified escort",
  "Professional VIP call girl", "Genuine escort service India",
];

const allImages = [
  ...Array.from({ length: 46 }, (_, i) => `/images/banner/${String(i + 1).padStart(2, "0")}.jpg`),
];

export default function GalleryPage() {
  const jsonLdBreadcrumb = breadcrumbSchema([
    { name: "Home", url: siteConfig.baseUrl },
    { name: "Photo Gallery", url: `${siteConfig.baseUrl}/gallery` },
  ]);

  const jsonLdImageGallery = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Call Girls Photo Gallery — Girlbests",
    description: "Browse genuine photos of 1000+ verified escorts available across 90+ cities in India.",
    url: `${siteConfig.baseUrl}/gallery`,
    image: allImages.slice(0, 20).map((src, i) => ({
      "@type": "ImageObject",
      url: `${siteConfig.baseUrl}${src}`,
      name: galleryAlts[i] || `Verified escort profile ${i + 1}`,
      description: galleryAlts[i] || `Verified escort profile ${i + 1} available at Girlbests India`,
      width: "400",
      height: "350",
      contentUrl: `${siteConfig.baseUrl}${src}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdImageGallery) }}
      />

      {/* Breadcrumb Nav */}
      <nav aria-label="Breadcrumb" className="bg-outer py-2 px-4">
        <div className="container mx-auto">
          <ol className="flex items-center gap-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-[#ff9900] transition-colors">Home</Link></li>
            <li className="text-gray-600">›</li>
            <li className="text-[#ff9900] font-medium">Photo Gallery</li>
          </ol>
        </div>
      </nav>

      <section
        className="py-10"
        style={{ background: "linear-gradient(135deg,#1a0000 0%,#0d0000 100%)" }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
            Call Girls Photo Gallery
          </h1>
          <p className="text-gray-400 text-center mb-8">
            Browse genuine photos of verified escorts available across 90+ cities in India
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
            {allImages.map((src, i) => (
              <div key={i} className="img-box">
                <Image
                  src={src}
                  alt={galleryAlts[i] || `Verified escort profile ${i + 1} — Girlbests India`}
                  width={400}
                  height={350}
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  className="w-full h-40 object-cover rounded-xl"
                  loading={i < 10 ? "eager" : "lazy"}
                  title={galleryAlts[i] || `Verified escort profile ${i + 1}`}
                />
                <a href={`tel:${siteConfig.phone}`}>📞 Book Now</a>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-[#5e0707] hover:bg-red-800 text-white font-bold py-3 px-10 rounded-full text-lg transition-colors"
            >
              📞 Call to Book: +91-{siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
