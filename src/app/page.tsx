"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomePage(): JSX.Element {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <Image
          src="/hero-image.jpg"
          alt="VoltX Electric Car"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10">
          {hydrated && (
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              The Future of Electric Performance Starts Here
            </motion.h1>
          )}
          <p className="text-lg md:text-xl mb-6">
            Experience the next generation of electric mobility—sleek, smart, and built for the future.
          </p>
          <div className="flex gap-4">
            <Link
              href="/models"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg"
            >
              Explore Models
            </Link>
            <Link
              href="/order"
              className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-lg text-lg"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
