/* eslint-disable */
"use client";

import { useEffect, useState } from "react";

export default function AgeVerification() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const verified = localStorage.getItem("ageVerified") === "true";
    setShow(!verified);
  }, []);

  function accept() {
    localStorage.setItem("ageVerified", "true");
    setShow(false);
  }

  function reject() {
    window.location.href = "https://www.google.com";
  }

  if (!mounted || !show) return null;

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[99999]">
      <div className="bg-[#111] text-white p-8 max-w-sm w-full text-center rounded-xl mx-4">
        <h2 className="text-[#ff9900] text-2xl font-bold mb-4">WARNING</h2>
        <p className="text-white mb-4">
          This website contains explicit adult material.
          <br />
          You may only enter this website if you are at least{" "}
          <strong>18 years old</strong> (or the age of majority in your
          country).
        </p>
        <div className="flex gap-3 justify-center mt-5">
          <button
            onClick={accept}
            className="bg-[#ff9900] text-black px-5 py-2 rounded-lg font-semibold hover:opacity-90"
          >
            YES – Enter
          </button>
          <button
            onClick={reject}
            className="bg-[#555] text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90"
          >
            NO – Leave
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-4">
          By entering, you confirm that you comply with local laws.
        </p>
      </div>
    </div>
  );
}
