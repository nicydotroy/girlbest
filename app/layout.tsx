import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgeVerification from "@/components/AgeVerification";
import FloatingButtons from "@/components/FloatingButtons";
import { siteConfig } from "@/lib/config";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: "Call Girl Service in Patna | Escort Service ₹3999 | Girlbests",
    template: "%s | Girlbests",
  },
  description: siteConfig.defaultDescription,
  keywords: ["call girl service", "escort service", "call girls", "independent escorts", "girlbests"],
  robots: { index: true, follow: true },
  openGraph: {
    siteName: "Girlbests",
    type: "website",
    images: ["/images/own/Call Girls Service in Hyderabad.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gtag}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${siteConfig.gtag}');`,
          }}
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
