import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

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
  const galleryFaqs = [
    {
      q: "Are the photos in the gallery real and verified?",
      a: "Yes. All photos in our gallery are genuine and verified by our team. We never use stock photos or fake images. Every photo belongs to a real, verified escort.",
    },
    {
      q: "Can I book a call girl directly from the gallery?",
      a: "Yes. Simply call +91-7061819139 or WhatsApp us mentioning the escort you like from the gallery. We will confirm availability and booking instantly.",
    },
    {
      q: "How often is the gallery updated with new photos?",
      a: "Our gallery is updated regularly with new verified escort photos. New profiles are added daily as we onboard and verify new escorts across India.",
    },
    {
      q: "Do the escorts look the same as their gallery photos?",
      a: "Yes. All our escorts look exactly like their gallery photos. Our verification process ensures photo authenticity. What you see is what you get.",
    },
    {
      q: "Can I request more photos of a specific escort?",
      a: "Yes. Contact us via WhatsApp at +91-7061819139 and we can share additional verified photos of any escort listed in our gallery.",
    },
    {
      q: "Are all gallery escorts available for booking?",
      a: "Most escorts in our gallery are currently available. Availability changes daily. Call +91-7061819139 to confirm real-time availability of a specific escort.",
    },
    {
      q: "What types of escorts are shown in the gallery?",
      a: "Our gallery features college call girls, independent escorts, Russian models, VIP high-profile companions, housewife escorts and model escorts from across India.",
    },
    {
      q: "Can I see photos of escorts in my specific city?",
      a: "Yes. Contact us with your city name and we will share gallery photos of escorts specifically available in your city and nearby areas.",
    },
    {
      q: "Are the gallery photos recent?",
      a: "Yes. All gallery photos are recent, taken within the last few months. We regularly update and remove outdated photos to maintain accuracy.",
    },
    {
      q: "Do you have video profiles of escorts?",
      a: "Some escorts have video introductions available on request. Contact us via WhatsApp and we can share video profiles where available.",
    },
    {
      q: "Can I browse escorts by category in the gallery?",
      a: "Our gallery showcases all escort categories. For category-specific browsing, contact us and we will curate profiles matching your preference — college, VIP, Russian etc.",
    },
    {
      q: "How many escort photos are in the gallery?",
      a: "Our gallery contains 1000+ verified escort photos. The online gallery shows a curated selection. Contact us for the full portfolio in your preferred city.",
    },
    {
      q: "Are face photos available for escorts?",
      a: "Face photos are available for select escorts who consent to showing their face. Many escorts prefer partial face or no-face photos for privacy. Ask us for details.",
    },
    {
      q: "Can I share gallery photos with someone?",
      a: "We request that you do not share escort photos publicly. Photos are shared for booking purposes only. Sharing without consent violates our privacy policy.",
    },
    {
      q: "Do gallery escorts offer both incall and outcall?",
      a: "Most gallery escorts offer outcall service (coming to your location). Some also offer incall. Confirm the available service type when you contact us for booking.",
    },
    {
      q: "Why should I trust Girlbests gallery over others?",
      a: "Unlike other platforms, every Girlbests gallery photo is personally verified. We have a 10+ year track record with zero fake-photo complaints. 100% genuine, guaranteed.",
    },
  ];

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

      {/* FAQ Section */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(galleryFaqs)) }}
      />
      <section aria-label="Gallery FAQ" className="bg-main py-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            Photo Gallery — Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Common questions about our escort photo gallery
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {galleryFaqs.map(({ q, a }) => (
              <div key={q} className="bg-outer rounded-xl p-5">
                <h3 className="text-white font-bold text-sm mb-2">{q}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
