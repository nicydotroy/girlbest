import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy | Girlbests",
  description: "Privacy policy for Girlbests escort service platform.",
};

export default function PrivacyPage() {
  return (
    <section
      className="py-10"
      style={{ background: "linear-gradient(135deg,#1a0000 0%,#0d0000 100%)" }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Privacy Policy
        </h1>
        <p className="text-gray-500 text-center text-sm mb-10">
          Last updated: {new Date().getFullYear()}
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
  );
}
