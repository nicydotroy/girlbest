import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cities } from "@/lib/cities";
import { siteConfig } from "@/lib/config";
import {
  faqSchema,
  serviceSchema,
  reviewsSchema,
  howToSchema,
  homeBreadcrumbSchema,
  getHomepageFaqs,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "No.1 Call Girl Service in India | Independent Escorts ₹3999 | Girlbests",
  description:
    "India's most trusted call girl service. 1000+ verified profiles across 90+ cities. College girls, Russian escorts, VIP models available 24/7. Cash payment. Book now: +91-7061819139.",
  alternates: { canonical: siteConfig.baseUrl },
  openGraph: {
    title: "No.1 Call Girl Service in India | Girlbests",
    description:
      "1000+ verified escort profiles across 90+ cities. 24/7 available. Starting ₹3,999.",
    url: siteConfig.baseUrl,
    type: "website",
  },
};

const sliderImages = [
  { src: "/images/slider/01.jpg", alt: "Premium independent call girl service available across India" },
  { src: "/images/slider/02.jpg", alt: "Verified VIP escort companions for discreet bookings" },
  { src: "/images/slider/03.jpg", alt: "High-profile college girl escorts available 24/7 in 90+ cities" },
];

const galleryImages = [
  { src: "/images/gallery/01.jpg", alt: "Young college call girl escort in India" },
  { src: "/images/gallery/02.jpg", alt: "Independent high-profile model escort" },
  { src: "/images/gallery/03.jpg", alt: "Russian VIP call girl available for booking" },
  { src: "/images/gallery/04.jpg", alt: "Professional housewife escort companion" },
  { src: "/images/gallery/05.jpg", alt: "Premium air hostess call girl service" },
  { src: "/images/gallery/06.jpg", alt: "Celebrity model escort available 24/7" },
];

const serviceTypes = [
  { label: "College Call Girls", icon: "🎓" },
  { label: "Russian Escorts", icon: "🌍" },
  { label: "Model Escorts", icon: "💎" },
  { label: "VIP High Profile", icon: "👑" },
  { label: "Housewife Escorts", icon: "🏠" },
  { label: "Air Hostess", icon: "✈️" },
  { label: "Independent Girls", icon: "🌸" },
  { label: "Celebrity Escorts", icon: "⭐" },
];

const trustStats = [
  { value: "1000+", label: "Verified Profiles" },
  { value: "90+", label: "Cities Covered" },
  { value: "1 Lakh+", label: "Happy Clients" },
  { value: "24/7", label: "Available" },
];

const testimonials = [
  {
    name: "Rahul S., Delhi",
    rating: 5,
    text: "100% genuine profile. Escort arrived on time, exactly as shown. Completely discreet and professional. Best service I have used.",
  },
  {
    name: "Arjun M., Mumbai",
    rating: 5,
    text: "Booked within 10 minutes, girl arrived in 45 mins. Amazing experience. They maintain full confidentiality. Highly recommended.",
  },
  {
    name: "Vikram K., Bangalore",
    rating: 5,
    text: "Used Girlbests 5+ times. Always genuine profiles, never disappointed. Rates are fair and service is top class.",
  },
  {
    name: "Suresh P., Hyderabad",
    rating: 5,
    text: "Quick booking, polite staff, genuine photos. Cash payment gives complete privacy. Will use again 100%.",
  },
];

export default function Home() {
  const homeFaqs = getHomepageFaqs();
  const jsonLdFaq = faqSchema(homeFaqs);
  const jsonLdService = serviceSchema("India");
  const jsonLdReviews = reviewsSchema();
  const jsonLdHowTo = howToSchema();
  const jsonLdBreadcrumb = homeBreadcrumbSchema();

  return (
    <>
      {/* JSON-LD: FAQ + Service + Reviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdReviews) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section
        aria-label="Hero"
        className="relative w-full"
        style={{ background: "linear-gradient(135deg,#1a0000 0%,#0d0000 100%)" }}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sliderImages.map((img, i) => (
              <div key={i} className="img-box rounded-xl overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={280}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-52 object-cover"
                  priority={i === 0}
                  title={img.alt}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8 mb-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
              No.1 Call Girl Service in India
            </h1>
            <p className="text-gray-300 text-lg mb-2 max-w-3xl mx-auto">
              India&apos;s most trusted escort service — <strong>1000+ verified profiles</strong>,{" "}
              <strong>90+ cities</strong>, available <strong>24 hours a day, 7 days a week</strong>.
              College girls, Russian models, VIP escorts and more. 100% discreet. Cash payment only.
            </p>
            <p className="text-[#ff9900] font-semibold text-base mb-6">
              Starting from just ₹3,999 · Book in 5 minutes
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-[#5e0707] hover:bg-red-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
                aria-label="Call now to book escort service"
              >
                📞 Call Now: +91-{siteConfig.phone}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20GirlBests%20I%20need%20service`}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
                aria-label="WhatsApp to book escort service"
              >
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STATS (EEAT) ──────────────────────────────────── */}
      <section
        aria-label="Trust statistics"
        className="bg-[#5e0707] py-6"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {trustStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-white text-3xl font-bold">{stat.value}</p>
                <p className="text-red-200 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE TYPES ────────────────────────────────────────── */}
      <section
        aria-label="Types of escort service available"
        className="bg-main py-10"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            Types of Call Girl Service Available
          </h2>
          <p className="text-gray-400 text-center mb-6">
            Choose from 8 categories of verified escorts across India
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {serviceTypes.map(({ label, icon }) => (
              <div
                key={label}
                className="bg-outer text-center py-4 px-3 rounded-xl"
              >
                <div className="text-2xl mb-2">{icon}</div>
                <span className="text-[#ff9900] text-sm font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOP CITIES ───────────────────────────────────────────── */}
      <section
        aria-label="Call girl service available cities"
        className="py-10"
        style={{ background: "#0d0000" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            Call Girl Service — Available in 90+ Cities
          </h2>
          <p className="text-gray-400 text-center mb-6">
            Select your city to find verified independent escorts near you
          </p>
          <div className="service-links">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                aria-label={`Call girl service in ${city.name}`}
              >
                📍 Call Girl in {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ────────────────────────────────────────── */}
      <section aria-label="Escort photo gallery" className="bg-main py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            Call Girls Photo Gallery
          </h2>
          <p className="text-gray-400 text-center mb-6">
            Browse genuine photos of verified escorts available near you
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="img-box">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={300}
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="w-full h-44 object-cover rounded-xl"
                  title={img.alt}
                />
                <a href={`tel:${siteConfig.phone}`}>📞 Book Now</a>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/gallery"
              className="inline-block bg-[#5e0707] hover:bg-red-800 text-white font-semibold py-2 px-8 rounded-full transition-colors"
            >
              View Complete Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US (EEAT) ─────────────────────────────────── */}
      <section
        aria-label="Why choose Girlbests"
        className="py-10"
        style={{ background: "#0d0000" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            Why Girlbests is India&apos;s Most Trusted Escort Service
          </h2>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Over 1 lakh satisfied clients trust us for our genuine profiles, complete
            discretion and 24/7 professional service across India.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "✅",
                title: "100% Verified Profiles",
                desc: "Every escort is personally verified before listing. No fake photos. What you see is what you get.",
              },
              {
                icon: "🔒",
                title: "Complete Discretion Guaranteed",
                desc: "Your identity, contact details and bookings are never shared. Zero-disclosure policy.",
              },
              {
                icon: "💰",
                title: "Cash Payment Only",
                desc: "Pay cash directly to the escort. No digital trail, no UPI, no card. Total financial privacy.",
              },
              {
                icon: "🕐",
                title: "24/7 Round-the-Clock Service",
                desc: "Book at 3 AM or 3 PM. We are always available, every day of the year including holidays.",
              },
              {
                icon: "💎",
                title: "VIP to Budget — All Options",
                desc: "From ₹3,999 affordable college girls to ₹25,000 premium Russian VIP models. Every budget covered.",
              },
              {
                icon: "📍",
                title: "Pan India — 90+ Cities",
                desc: "Delhi, Mumbai, Bangalore, Hyderabad, Chennai and 85+ more cities. Local area coverage in every city.",
              },
              {
                icon: "⚡",
                title: "Fast Response — Book in 5 Minutes",
                desc: "Call or WhatsApp, share your location, get profiles. Escort reaches you in 30–60 minutes.",
              },
              {
                icon: "🛡️",
                title: "Safe & Legal Compliance",
                desc: "Strictly adult 18+ service. Consensual and safe. Age verification on every booking.",
              },
              {
                icon: "⭐",
                title: "5-Star Client Satisfaction",
                desc: "Rated 4.8/5 by over 3,800 verified clients. Zero-complaints guarantee or money back.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-outer rounded-xl p-5">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS (ASO: How-To) ───────────────────────────── */}
      <section
        aria-label="How to book call girl service"
        className="bg-main py-10"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            How to Book a Call Girl in 3 Easy Steps
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Booking escort service with Girlbests is quick, simple and completely discreet
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Call or WhatsApp Us",
                desc: "Contact us on +91-7061819139. Tell us your city, area, preferred escort type and budget. Available 24/7.",
              },
              {
                step: "02",
                title: "Choose Your Escort",
                desc: "We share verified profiles matching your preference. All photos are genuine. Select your companion.",
              },
              {
                step: "03",
                title: "She Arrives at Your Location",
                desc: "Escort reaches your hotel or location within 30–60 minutes. Pay cash on arrival. Enjoy your time.",
              },
            ].map((s) => (
              <div key={s.step} className="bg-outer rounded-xl p-6 text-center">
                <div className="text-5xl font-bold text-[#5e0707] mb-3">{s.step}</div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS (EEAT — Social Proof) ──────────────────── */}
      <section
        aria-label="Client testimonials and reviews"
        className="py-10"
        style={{ background: "#0d0000" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Rated 4.8 / 5 by over 3,800 verified clients across India
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-outer rounded-xl p-5">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-[#ff9900] text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm italic mb-3">&quot;{t.text}&quot;</p>
                <p className="text-[#ff9900] text-xs font-semibold">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO Content ──────────────────────────────────────────── */}
      <section className="bg-outer py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
            India&apos;s Most Trusted Call Girl Service — Girlbests
          </h2>
          <div className="space-y-5 text-gray-300 text-sm leading-relaxed">
            <p>
              Welcome to <strong className="text-white">Girlbests</strong> — India&apos;s premier escort service platform connecting you with over 1000 verified call girls across 90+ cities. Since 2015, we have been the most trusted name in the escort industry, serving over 1 lakh satisfied clients with our commitment to safety, privacy and genuine experiences. Whether you are looking for a college call girl, an independent escort, a Russian model or a VIP high-profile companion — Girlbests is your one-stop destination.
            </p>
            <p>
              Our platform covers every major city in India — from <strong className="text-white">Delhi, Mumbai, Bangalore and Hyderabad</strong> to Kolkata, Chennai, Pune, Ahmedabad, Jaipur and Lucknow. We also serve tier-2 cities like Indore, Bhopal, Nagpur, Patna, Ranchi, Dehradun and Chandigarh. Each city has dedicated area-level pages with escorts available within 30 to 60 minutes of your call. With <strong className="text-white">888+ area pages</strong> across India, you can find a verified escort near your exact location.
            </p>

            <h3 className="text-xl font-bold text-[#ff9900] pt-2">Why Girlbests Is the Best Escort Service in India</h3>
            <p>
              What separates Girlbests from other escort platforms is our rigorous verification process. Every escort on our platform undergoes personal identity verification, photo authentication and background screening before being listed. We guarantee that every photo on our website is genuine — no fake images, no misleading descriptions. Our <strong className="text-white">zero-complaints policy</strong> and 4.8/5 client satisfaction rating are proof of our commitment to quality.
            </p>
            <p>
              Privacy is our top priority. We accept <strong className="text-white">cash payment only</strong> — no UPI, no credit cards, no digital trail. Your identity remains completely anonymous. We never store client data, never share information with third parties and maintain a strict zero-disclosure policy. This is why clients trust us for repeat bookings across India.
            </p>

            <h3 className="text-xl font-bold text-[#ff9900] pt-2">Types of Call Girls Available at Girlbests</h3>
            <p>
              We offer a wide range of escort categories to match every preference and budget. <strong className="text-white">College call girls</strong> starting from ₹3,999 are young, educated and well-mannered companions perfect for a casual outing or private companionship. <strong className="text-white">Independent escorts</strong> from ₹4,999 offer flexible services and manage their own schedules. <strong className="text-white">Russian and foreign model escorts</strong> from ₹14,999 are the premium choice for those seeking an exotic experience. <strong className="text-white">VIP high-profile escorts</strong> include models, actresses and celebrity companions starting from ₹9,999.
            </p>
            <p>
              We also offer <strong className="text-white">housewife escorts</strong> from ₹4,999 — experienced and mature companions for those who prefer a more intimate, personal connection. <strong className="text-white">Model escorts</strong> and <strong className="text-white">air hostess companions</strong> are available for high-end events, dinner dates and overnight bookings. All categories are available for both incall and outcall services across India.
            </p>

            <h3 className="text-xl font-bold text-[#ff9900] pt-2">How to Book a Call Girl on Girlbests</h3>
            <p>
              Booking is simple and takes less than 5 minutes. Call or WhatsApp us at <strong className="text-white">+91-7061819139</strong> with your city, area, preferred escort type and budget. Our booking team, available 24/7, will share verified profiles matching your requirements. Once you confirm, the escort arrives at your hotel, residence or preferred location within 30 to 60 minutes. No advance payment, no registration, no hassle — just call and book.
            </p>
            <p>
              We also have a secondary WhatsApp number <strong className="text-white">+91-9229604907</strong> for faster response during peak hours. Whether it is a short-time booking of 1 to 2 hours, a 4-hour extended session or a full-night 8 to 10 hour package — we accommodate every need. Cancellations are free and can be made anytime before the escort departs. We never ask for deposits or advance payments, making every booking completely risk-free.
            </p>

            <h3 className="text-xl font-bold text-[#ff9900] pt-2">Safe, Discreet and Professional Escort Service</h3>
            <p>
              At Girlbests, safety goes beyond just privacy. Every escort is a verified adult aged 18 and above. All services are between consenting adults. We have dedicated customer support available round the clock to handle any concerns or issues. Our decade-long track record with zero safety incidents and zero data breaches speaks for itself. Whether you are a first-time client or a regular — Girlbests provides the same professional, trustworthy experience every single time.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ (ASO + VSO) ──────────────────────────────────────── */}
      <section
        aria-label="Frequently asked questions about escort service"
        className="bg-main py-10"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Answers to common questions about our call girl service in India
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {homeFaqs.map(({ q, a }) => (
              <div key={q} className="bg-outer rounded-xl p-5">
                <h3 className="text-white font-bold text-base mb-2">{q}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SECTION (EEAT) ─────────────────────────────────── */}
      <section
        aria-label="About Girlbests escort service"
        className="py-10"
        style={{ background: "#0d0000" }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-outer rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              About Girlbests — India&apos;s No.1 Escort Service
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Girlbests is India&apos;s most trusted and verified escort service platform, with a
              decade of experience serving over{" "}
              <strong className="text-white">1 lakh satisfied clients</strong> across{" "}
              <strong className="text-white">90+ cities</strong>. Our platform features{" "}
              <strong className="text-white">1000+ verified, genuine profiles</strong> of
              beautiful and professional companions including college call girls, Russian models,
              VIP escorts, housewife escorts, model escorts and air hostess companions.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Every escort profile on Girlbests is{" "}
              <strong className="text-white">personally verified</strong> by our team before
              being listed. We guarantee genuine photos, accurate descriptions and authentic
              profiles. We operate under a strict{" "}
              <strong className="text-white">zero-complaints policy</strong> and have maintained
              a <strong className="text-white">4.8/5 client satisfaction rating</strong> over
              the years.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our service is available <strong className="text-white">24 hours a day</strong>,
              all 7 days, across all locations. We accept{" "}
              <strong className="text-white">cash payment only</strong> for complete client
              privacy. All escorts on our platform are adults aged 18+ and operate on a fully
              consensual basis.
            </p>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────── */}
      <section className="bg-[#5e0707] py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Book Your Companion Now — Available 24/7 Across India
          </h2>
          <p className="text-red-200 mb-5">
            Call or WhatsApp now for instant booking. Escort reaches you in 30–60 minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white text-[#5e0707] font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors"
            >
              📞 +91-{siteConfig.phone}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20GirlBests%20I%20need%20booking`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="bg-green-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-600 transition-colors"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
