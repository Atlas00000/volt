"use client";

import Image from "next/image";
import Link from "next/link";

export default function ConfigPage(): JSX.Element {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-center">
        <Image
          src="/config-hero.jpg"
          alt="Customize Your Vehicle"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold">Customize Your VoltX</h1>
          <p className="text-lg mt-2">Build the perfect electric vehicle for you.</p>
        </div>
      </section>

      {/* Configuration UI Mockup */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Vehicle Configuration</h2>
        <p className="text-lg text-gray-400 mb-6">
          Select colors, wheels, and smart features for your model.
        </p>
        <Link href="/order">
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-lg">
            Confirm Configuration
          </button>
        </Link>
      </section>
    </div>
  );
}
