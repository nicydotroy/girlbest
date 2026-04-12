import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgeVerification from "@/components/AgeVerification";
import FloatingButtons from "@/components/FloatingButtons";
import { siteConfig } from "@/lib/config";
import { organizationSchema, webSiteSchema } from "@/lib/schema";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: "No.1 Call Girl Service in India | Escort Service ₹3999 | Girlbests",
    template: "%s | Girlbests",
  },
  description: siteConfig.defaultDescription,
  authors: [{ name: "Girlbests", url: siteConfig.baseUrl }],
  creator: "Girlbests",
  publisher: "Girlbests",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    siteName: "Girlbests",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Girlbests — No.1 Call Girl Service India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "No.1 Call Girl Service in India | Girlbests",
    description: siteConfig.defaultDescription,
    images: ["/images/logo.jpg"],
  },
  verification: {
    google: "MX8A9CR3qdNYnltT9p9K3ZRViMg4e5GSXKM_10BFplo",
  },
  alternates: {
    canonical: siteConfig.baseUrl,
    languages: {
      "en-IN": siteConfig.baseUrl,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = organizationSchema();
  const siteSchema = webSiteSchema();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="theme-color" content="#5e0707" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="ICBM" content="20.5937, 78.9629" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gtag}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${siteConfig.gtag}');`,
          }}
        />
        <noscript>
          <img
            src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.gtag}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            alt=""
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body className={`${geist.className} bg-black text-white min-h-screen`}>
        <AgeVerification />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
