"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/config";

interface Props {
  phone?: string;
  message?: string;
}

export default function FloatingButtons({
  phone = siteConfig.phone,
  message = "Hi GirlBests",
}: Props) {
  return (
    <>
      {/* Fixed phone button */}
      <a
        href={`tel:${phone}`}
        className="fixed bottom-16 left-3 z-[2147483644] w-14 h-14 rounded-full shadow-xl hover:scale-110 transition-transform"
        aria-label="Call us now for escort booking"
      >
        <Image
          src="/noisy-phone-call-icon-vector-33282617.avif"
          alt="Call Girlbests for escort booking"
          width={56}
          height={56}
          className="w-full h-full rounded-full object-cover"
          loading="lazy"
        />
      </a>

      {/* WhatsApp widget */}
      <a
        href={`https://wa.me/${siteConfig.whatsapp2}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="fixed bottom-3 right-3 z-[2147483644] bg-green-500 text-white px-4 py-2 rounded-full shadow-xl hover:scale-105 transition-transform text-sm font-semibold"
        aria-label="WhatsApp us for escort booking"
      >
        💬 WhatsApp
      </a>
    </>
  );
}
