import { siteConfig } from "./config";
import type { City, Area } from "./cities";

/* ─── Organisation ──────────────────────────────────────────── */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.baseUrl}/images/logo.jpg`,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `+91-${siteConfig.phone}`,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday","Tuesday","Wednesday","Thursday",
            "Friday","Saturday","Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
    ],
    sameAs: [],
  };
}

/* ─── Website with SearchAction ─────────────────────────────── */
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    description: siteConfig.defaultDescription,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.baseUrl}/{search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/* ─── LocalBusiness for city ────────────────────────────────── */
export function localBusinessSchema(city: City) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.baseUrl}/${city.slug}`,
    name: `${siteConfig.name} — Call Girl Service in ${city.name}`,
    description: `Verified call girl service in ${city.name}${city.state ? `, ${city.state}` : ""}. 1000+ profiles. Available 24/7.`,
    url: `${siteConfig.baseUrl}/${city.slug}`,
    image: `${siteConfig.baseUrl}/images/logo.jpg`,
    telephone: `+91-${siteConfig.phone}`,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: city.state || "",
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday","Tuesday","Wednesday","Thursday",
        "Friday","Saturday","Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "₹₹ — ₹₹₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1247",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

/* ─── LocalBusiness for area ────────────────────────────────── */
export function areaLocalBusinessSchema(city: City, area: Area) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.baseUrl}/${city.slug}/${area.slug}`,
    name: `${siteConfig.name} — Call Girl in ${area.name}, ${city.name}`,
    description: `Verified call girls in ${area.name}, ${city.name}. Independent escorts available 24/7.`,
    url: `${siteConfig.baseUrl}/${city.slug}/${area.slug}`,
    image: `${siteConfig.baseUrl}/images/logo.jpg`,
    telephone: `+91-${siteConfig.phone}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: area.name,
      addressLocality: city.name,
      addressRegion: city.state || "",
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday","Tuesday","Wednesday","Thursday",
        "Friday","Saturday","Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "₹₹ — ₹₹₹₹",
    paymentAccepted: "Cash",
  };
}

/* ─── FAQPage ───────────────────────────────────────────────── */
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };
}

/* ─── BreadcrumbList ────────────────────────────────────────── */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/* ─── Service ───────────────────────────────────────────────── */
export function serviceSchema(cityName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Escort Service",
    name: `Call Girl Service in ${cityName}`,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.baseUrl,
    },
    areaServed: {
      "@type": "City",
      name: cityName,
    },
    description: `Professional escort & call girl service in ${cityName}. 1000+ verified profiles available 24/7.`,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "3999",
      highPrice: "24999",
      offerCount: "1000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Call Girl Services in ${cityName}`,
      itemListElement: [
        { "@type": "Offer", name: "College Call Girl", price: "3999", priceCurrency: "INR" },
        { "@type": "Offer", name: "Independent Escort", price: "5999", priceCurrency: "INR" },
        { "@type": "Offer", name: "Model Escort", price: "7999", priceCurrency: "INR" },
        { "@type": "Offer", name: "VIP High Profile", price: "9999", priceCurrency: "INR" },
        { "@type": "Offer", name: "Russian Call Girl", price: "14999", priceCurrency: "INR" },
      ],
    },
  };
}

/* ─── Review / Testimonials ─────────────────────────────────── */
export function reviewsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.baseUrl}/#reviews`,
    name: "Girlbests Escort Service",
    url: siteConfig.baseUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "3841",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Rahul S." },
        datePublished: "2025-11-15",
        reviewBody:
          "Excellent service. 100% genuine profile, arrived on time. Very professional.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Arjun M." },
        datePublished: "2025-12-02",
        reviewBody:
          "Best call girl service I have used. Completely discreet and trustworthy.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Vikram K." },
        datePublished: "2026-01-18",
        reviewBody:
          "Great experience. The profile matched exactly. Will use again.",
      },
    ],
  };
}

/* ─── FAQ helpers ───────────────────────────────────────────── */
export function getHomepageFaqs() {
  return [
    {
      q: "What is Girlbests?",
      a: "Girlbests is India's most trusted escort service platform with 1000+ verified profiles across 90+ cities. We connect clients with genuine, high-profile call girls for a safe, discreet and professional experience.",
    },
    {
      q: "How much does call girl service cost in India?",
      a: "Call girl service in India starts from ₹3,999 for a short-time (1-2 hours). Full night service starts from ₹6,999. VIP and Russian escorts start from ₹14,999. Exact rates depend on city and escort type.",
    },
    {
      q: "How do I book a call girl service?",
      a: "Simply call or WhatsApp us at +91-7061819139. Tell us your city, area, preferred escort type and budget. We will share verified profiles and confirm your booking within minutes.",
    },
    {
      q: "Are the call girl profiles on Girlbests verified?",
      a: "Yes. Every escort profile on Girlbests is personally verified by our team before listing. We guarantee genuine photos, accurate descriptions and authentic profiles.",
    },
    {
      q: "Is the escort service safe and discreet?",
      a: "Yes, our service is 100% safe and discreet. We never share client information with anyone. All transactions are cash-only ensuring complete privacy and zero digital trail.",
    },
    {
      q: "What payment methods are accepted?",
      a: "We accept cash payment only. No digital payments, UPI, or cards. Cash is paid directly to the escort upon arrival, ensuring complete privacy.",
    },
    {
      q: "Are call girls available 24 hours near me?",
      a: "Yes. Our call girl service is available 24 hours a day, 7 days a week across all 90+ cities in India including weekends and public holidays.",
    },
    {
      q: "How quickly can a call girl reach me?",
      a: "Our escorts can reach your location within 30 to 60 minutes of booking in most cities. Same-day and same-hour service is available.",
    },
    {
      q: "Do you offer outcall escort service?",
      a: "Yes. All our escorts offer outcall service — they will come directly to your hotel, residence or preferred location. Incall service is also available with select escorts.",
    },
    {
      q: "What types of escorts are available?",
      a: "We offer college call girls, independent escorts, Russian and foreign models, VIP high-profile escorts, housewife escorts, model escorts and air hostess companions across India.",
    },
    {
      q: "Can I see photos before booking?",
      a: "Yes. Once you call or WhatsApp us, we share verified photos and profile details of available escorts matching your preferences. All photos on our platform are genuine and recent.",
    },
    {
      q: "What is the cancellation policy?",
      a: "You can cancel your booking at any time before the escort arrives with no charges. We do not take advance payments or deposits. Payment is cash-only upon meeting.",
    },
    {
      q: "Do you provide escort service at hotels?",
      a: "Yes. Our escorts provide service at all major hotels, resorts, guest houses and private residences across India. Outcall to your location is our primary service model.",
    },
    {
      q: "How many cities does Girlbests operate in?",
      a: "Girlbests operates in 90+ cities across India including all metros like Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Jaipur and tier-2 cities.",
    },
    {
      q: "Is there a minimum booking duration?",
      a: "The minimum booking is 1 hour (short time). We also offer 2-hour, 4-hour and full night (8-10 hours) packages. Custom durations can be arranged on request.",
    },
    {
      q: "How do I know Girlbests is trustworthy?",
      a: "Girlbests has been operating since 2015 with over 1 lakh satisfied clients. We maintain a 4.8/5 rating, zero-complaints policy and 100% verified profiles. Our decade-long track record speaks for itself.",
    },
  ];
}

/* ─── HowTo Schema ──────────────────────────────────────────── */
export function howToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Book a Call Girl Service in India",
    description:
      "Booking escort service with Girlbests is quick, simple and completely discreet. Follow these 3 easy steps.",
    totalTime: "PT5M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Call or WhatsApp Us",
        text: `Contact us on +91-${siteConfig.phone}. Tell us your city, area, preferred escort type and budget. Available 24/7.`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Choose Your Escort",
        text: "We share verified profiles matching your preference. All photos are genuine. Select your companion.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "She Arrives at Your Location",
        text: "Escort reaches your hotel or location within 30–60 minutes. Pay cash on arrival. Enjoy your time.",
      },
    ],
  };
}

/* ─── Homepage Breadcrumb ───────────────────────────────────── */
export function homeBreadcrumbSchema() {
  return breadcrumbSchema([
    { name: "Home", url: siteConfig.baseUrl },
  ]);
}

export function getCityFaqs(city: City) {
  const phone = siteConfig.phone;
  return [
    {
      q: `How much does call girl service cost in ${city.name}?`,
      a: `Call girl rates in ${city.name} start from ₹3,999 (short time). Full night is from ₹6,999. VIP escorts from ₹14,999. Call +91-${phone} for exact pricing in ${city.name}.`,
    },
    {
      q: `How do I book a call girl in ${city.name}?`,
      a: `Call or WhatsApp +91-${phone}. Share your area in ${city.name}, preferred escort type and budget. We confirm your booking within minutes.`,
    },
    {
      q: `Are call girls available 24 hours in ${city.name}?`,
      a: `Yes. Our escort service in ${city.name} is available 24 hours a day, 7 days a week including all holidays and weekends.`,
    },
    {
      q: `What types of call girls are available in ${city.name}?`,
      a: `In ${city.name} we offer college girls, independent escorts, Russian models, VIP high-profile companions, housewife escorts and model escorts. All profiles are verified.`,
    },
    {
      q: `Is the call girl service in ${city.name} safe and discreet?`,
      a: `Yes. Our service in ${city.name} is 100% safe, confidential and discreet. We never share client information. Cash payment ensures complete privacy.`,
    },
    {
      q: `Do call girls come to hotels in ${city.name}?`,
      a: `Yes. Our escorts in ${city.name} provide outcall service to hotels, residences and any location of your choice. Room service is available at all major hotels in ${city.name}.`,
    },
    {
      q: `How quickly can a call girl reach me in ${city.name}?`,
      a: `Our escorts in ${city.name} typically arrive within 30 to 60 minutes of booking. Same-hour service is available in most areas of ${city.name}.`,
    },
    {
      q: `Are there Russian call girls available in ${city.name}?`,
      a: `Yes. We have Russian and foreign model escorts available in ${city.name}. Russian escort rates in ${city.name} start from ₹14,999. Call +91-${phone} for availability.`,
    },
    {
      q: `What is the cheapest call girl rate in ${city.name}?`,
      a: `The most affordable call girl service in ${city.name} starts from ₹3,999 for a short-time booking. College girl escorts are the most budget-friendly option in ${city.name}.`,
    },
    {
      q: `Can I book a call girl for a full night in ${city.name}?`,
      a: `Yes. Full night escort bookings in ${city.name} are available starting from ₹6,999. Full night means 8 to 10 hours of companionship. Call +91-${phone} for availability.`,
    },
    {
      q: `Do you provide independent escorts in ${city.name}?`,
      a: `Yes. We have a large number of independent call girls working in ${city.name}. Independent escorts manage their own schedules and are available for incall and outcall.`,
    },
    {
      q: `What is the best escort service in ${city.name}?`,
      a: `Girlbests is rated the best escort service in ${city.name} with 4.8/5 client satisfaction. We offer 1000+ verified profiles, 24/7 availability and 100% discreet cash payment.`,
    },
    {
      q: `Are college call girls available in ${city.name}?`,
      a: `Yes. College call girls in ${city.name} are among our most popular category. Starting from ₹3,999, they are young, educated and well-mannered companions. All are 18+ and verified.`,
    },
    {
      q: `Can I see photos before booking in ${city.name}?`,
      a: `Yes. When you call or WhatsApp +91-${phone}, we share genuine verified photos of available escorts in ${city.name}. All photos are recent and authentic — no fake pictures.`,
    },
    {
      q: `Is there any advance payment required in ${city.name}?`,
      a: `No. We never ask for advance payment or deposits. All payments are made in cash directly when you meet the escort in ${city.name}. This ensures zero risk for clients.`,
    },
    {
      q: `What areas in ${city.name} do you cover?`,
      a: `We cover all major areas and localities in ${city.name}. Our escorts can reach any hotel, residence or private location within ${city.name} city limits. Check our area listing for details.`,
    },
  ];
}

export function getAreaFaqs(city: City, area: Area) {
  const phone = siteConfig.phone;
  return [
    {
      q: `Are call girls available in ${area.name}, ${city.name}?`,
      a: `Yes. We have verified call girls available in ${area.name}, ${city.name} 24/7. Call +91-${phone} to check current availability.`,
    },
    {
      q: `How much does escort service cost in ${area.name}?`,
      a: `Escort service in ${area.name}, ${city.name} starts from ₹3,999 for short time. Full night from ₹6,999. Call +91-${phone} for exact rates.`,
    },
    {
      q: `How do I book a call girl in ${area.name}?`,
      a: `Call or WhatsApp +91-${phone} and mention ${area.name}, ${city.name} as your location. We will confirm your booking within minutes.`,
    },
    {
      q: `How quickly can an escort reach ${area.name}?`,
      a: `Our escorts can reach ${area.name} in ${city.name} within 30 to 60 minutes. Same-hour delivery is available in most cases.`,
    },
    {
      q: `What is the best escort service near ${area.name}?`,
      a: `Girlbests is the most trusted escort service near ${area.name}, ${city.name} with verified profiles, 24/7 availability and 100% discreet service starting from ₹3,999.`,
    },
    {
      q: `Is it safe to use escort service in ${area.name}?`,
      a: `Yes. Our service in ${area.name}, ${city.name} is completely safe, verified and discreet. We have served thousands of clients and maintain a zero-complaints policy.`,
    },
    {
      q: `Do escorts come to hotels near ${area.name}?`,
      a: `Yes. Our call girls provide outcall service to all hotels, guest houses and residences near ${area.name}, ${city.name}. Room service is available at any location.`,
    },
    {
      q: `What types of escorts are available near ${area.name}?`,
      a: `Near ${area.name}, ${city.name} we offer college girls, independent escorts, Russian models, VIP high-profile companions, housewife escorts and model escorts. All verified.`,
    },
    {
      q: `Are there independent call girls in ${area.name}?`,
      a: `Yes. Independent call girls are available near ${area.name}, ${city.name}. They manage their own schedule and offer both incall and outcall services. Call +91-${phone} for profiles.`,
    },
    {
      q: `Can I see photos of escorts near ${area.name}?`,
      a: `Yes. When you contact us for ${area.name}, ${city.name}, we share genuine verified photos of available escorts. All photos are real and recent — no fake images.`,
    },
    {
      q: `Is advance payment required for ${area.name} booking?`,
      a: `No. We never take advance payments or deposits for ${area.name}, ${city.name} bookings. Cash payment only, made directly when you meet the escort.`,
    },
    {
      q: `What is the cheapest escort service in ${area.name}?`,
      a: `The most affordable escort service in ${area.name}, ${city.name} starts from ₹3,999 for a short-time booking. College girl escorts are the budget-friendly choice.`,
    },
    {
      q: `Are college call girls available in ${area.name}?`,
      a: `Yes. College call girls near ${area.name}, ${city.name} are available starting from ₹3,999. Young, educated and well-mannered. All are 18+ verified.`,
    },
    {
      q: `Can I book a full night escort in ${area.name}?`,
      a: `Yes. Full night escort bookings near ${area.name}, ${city.name} are available from ₹6,999. A full night booking means 8 to 10 hours of companionship.`,
    },
    {
      q: `Are Russian escorts available near ${area.name}?`,
      a: `Yes. Russian and foreign model escorts are available near ${area.name}, ${city.name}. Premium Russian escorts start from ₹14,999. Call +91-${phone} for availability.`,
    },
    {
      q: `What is the cancellation policy for ${area.name} bookings?`,
      a: `You can cancel your ${area.name}, ${city.name} booking anytime before the escort arrives with no charges. We never take advance payment, so cancellation is completely risk-free.`,
    },
  ];
}
