import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy | Girlbests",
  description:
    "Read the privacy policy of Girlbests escort service platform. We are committed to protecting your privacy and maintaining complete confidentiality.",
  alternates: { canonical: `${siteConfig.baseUrl}/privacy` },
  openGraph: {
    title: "Privacy Policy | Girlbests",
    description: "Complete privacy policy for Girlbests escort service. Your privacy is our priority.",
    url: `${siteConfig.baseUrl}/privacy`,
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Girlbests",
    description: "Complete privacy policy for Girlbests escort service. Your privacy is our priority.",
  },
};

export default function PrivacyPage() {
  const privacyFaqs = [
    {
      q: "Does Girlbests collect personal information?",
      a: "We collect minimal information — only your phone number or WhatsApp contact when you reach out. No personal documents, addresses or financial details are collected.",
    },
    {
      q: "Is my phone number shared with anyone?",
      a: "No. Your phone number is used solely for booking coordination. It is never shared, sold or transferred to any third party.",
    },
    {
      q: "Does Girlbests store my chat conversations?",
      a: "No. We do not store or archive client conversations. All WhatsApp and phone communications are kept private and are not saved on our systems.",
    },
    {
      q: "How does cash-only payment protect my privacy?",
      a: "Cash payment leaves no digital trail — no bank statements, no UPI records, no credit card bills. This ensures complete financial privacy for every client.",
    },
    {
      q: "Does Girlbests use cookies on its website?",
      a: "Our website uses basic cookies for browsing experience only. These cookies do not store personally identifiable information. You can disable them in browser settings.",
    },
    {
      q: "Can my booking history be traced?",
      a: "No. Since we accept cash only and do not maintain digital records of client bookings, there is no traceable history of your interactions with us.",
    },
    {
      q: "What is the zero-disclosure policy?",
      a: "Our zero-disclosure policy means we never reveal client identities, booking details or service information to anyone — including law enforcement unless legally required.",
    },
    {
      q: "Is the Girlbests website secure?",
      a: "Yes. Our website uses HTTPS encryption. All data transmitted between your browser and our servers is encrypted and secure.",
    },
    {
      q: "What happens to my data if I stop using Girlbests?",
      a: "Since we collect minimal data and do not maintain client databases, there is nothing to delete. We do not retain information after service completion.",
    },
    {
      q: "Does Girlbests track my location?",
      a: "No. We do not track or store your location data. Location is only used during booking to coordinate the escort's arrival — it is not stored.",
    },
    {
      q: "Can escorts see my personal details?",
      a: "Escorts only receive the information needed for the booking — your first name and location. No other personal details are shared with the escort.",
    },
    {
      q: "Does Girlbests use Google Analytics?",
      a: "We use basic analytics to understand website traffic. Analytics data is anonymous and aggregated — no individual user can be identified from this data.",
    },
    {
      q: "What is the age requirement for using Girlbests?",
      a: "You must be 18 years or older. By accessing our website, you confirm you are a legal adult. We have age verification measures in place.",
    },
    {
      q: "Can I request deletion of my data?",
      a: "Yes. Contact us at +91-7061819139 and we will ensure any data associated with your contact is removed from our systems immediately.",
    },
    {
      q: "Are third-party links on Girlbests safe?",
      a: "We link to established platforms like WhatsApp. However, we are not responsible for the privacy practices of external websites. Use them at your own discretion.",
    },
    {
      q: "How can I report a privacy concern?",
      a: "Contact us immediately at +91-7061819139 or email contact@girlbests.in. We take all privacy concerns seriously and respond within 24 hours.",
    },
  ];

  const jsonLdBreadcrumb = breadcrumbSchema([
    { name: "Home", url: siteConfig.baseUrl },
    { name: "Privacy Policy", url: `${siteConfig.baseUrl}/privacy` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Breadcrumb Nav */}
      <nav aria-label="Breadcrumb" className="bg-outer py-2 px-4">
        <div className="container mx-auto">
          <ol className="flex items-center gap-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-[#ff9900] transition-colors">Home</Link></li>
            <li className="text-gray-600">›</li>
            <li className="text-[#ff9900] font-medium">Privacy Policy</li>
          </ol>
        </div>
      </nav>

      <section
        className="py-10"
        style={{ background: "linear-gradient(135deg,#1a0000 0%,#0d0000 100%)" }}
      >
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Privacy Policy
        </h1>
        <p className="text-gray-500 text-center text-sm mb-10">
          Last updated: April 2026
        </p>

        <div className="bg-outer rounded-xl p-6 md:p-8 space-y-6">
          {[
            {
              title: "1. Information We Collect",
              body: "We collect minimal information necessary to provide our services. This may include your phone number or WhatsApp contact when you reach out to us. We do not collect personal identification documents or financial information through our website.",
            },
            {
              title: "2. How We Use Your Information",
              body: "Any contact information you share is used solely to facilitate your booking request. We do not use your information for marketing purposes without your consent. We do not sell, trade or transfer your information to third parties.",
            },
            {
              title: "3. Confidentiality",
              body: "We take your privacy very seriously. All communications between you and our service are kept strictly confidential. We maintain a strict no-disclosure policy regarding client identities and service details.",
            },
            {
              title: "4. Cookies",
              body: "Our website may use basic cookies to improve your browsing experience. These cookies do not store personally identifiable information. You can disable cookies in your browser settings.",
            },
            {
              title: "5. Third-Party Links",
              body: "Our website may contain links to social media platforms (WhatsApp, Facebook, Instagram). We are not responsible for the privacy practices of these external sites.",
            },
            {
              title: "6. Age Restriction",
              body: "This website is strictly for adults aged 18 years and above. By accessing this site, you confirm that you are 18 or older and legally permitted to access adult content in your jurisdiction.",
            },
            {
              title: "7. Disclaimer",
              body: "Girlbests is an adult companion service directory. All escorts listed on this platform are adults aged 18+. This website does not promote or facilitate any illegal activities. All services advertised are consensual adult services.",
            },
            {
              title: "8. Contact",
              body: `For any privacy-related queries, contact us at ${siteConfig.email} or call +91-${siteConfig.phone}.`,
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="text-[#ff9900] font-bold text-lg mb-2">{section.title}</h2>
              <p className="text-gray-300 text-sm leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* FAQ Section */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(privacyFaqs)) }}
      />
      <section aria-label="Privacy FAQ" className="bg-main py-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            Privacy Policy — Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Common questions about your privacy and data protection
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {privacyFaqs.map(({ q, a }) => (
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
