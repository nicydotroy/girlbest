import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Photo Gallery | Call Girls Gallery | Girlbests",
  description:
    "Browse our photo gallery of beautiful, verified call girls available across India. 1000+ genuine profiles.",
};

const allImages = [
  ...Array.from({ length: 46 }, (_, i) => `/images/banner/${String(i + 1).padStart(2, "0")}.jpg`),
];

export default function GalleryPage() {
  return (
    <section
      className="py-10"
      style={{ background: "linear-gradient(135deg,#1a0000 0%,#0d0000 100%)" }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
          Photo Gallery
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Browse beautiful escorts available across India
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
          {allImages.map((src, i) => (
            <div key={i} className="img-box">
              <Image
                src={src}
                alt={`Call Girl Photo ${i + 1}`}
                width={240}
                height={200}
                className="w-full h-40 object-cover rounded-xl"
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
  );
}
