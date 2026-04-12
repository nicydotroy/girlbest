import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Girlbests",
  description: "The page you are looking for does not exist. Return to Girlbests homepage for India's most trusted call girl service.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section
      className="py-20"
      style={{ background: "linear-gradient(135deg,#1a0000 0%,#0d0000 100%)" }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-8xl font-bold text-[#5e0707] mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="bg-[#5e0707] hover:bg-red-800 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            ← Back to Home
          </Link>
          <Link
            href="/contact"
            className="border border-[#5e0707] text-white hover:bg-[#5e0707] font-bold py-3 px-8 rounded-full transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
