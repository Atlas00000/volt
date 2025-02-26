"use client";

import Image from "next/image";
import Link from "next/link";

export default function OrderPage(): JSX.Element {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-center">
        <Image
          src="/order-hero.jpg"
          alt="Order Your Vehicle"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold">Reserve Your VoltX</h1>
          <p className="text-lg mt-2">Secure your electric vehicle today.</p>
        </div>
      </section>

      {/* Order Steps */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Start Your Order</h2>
        <p className="text-lg text-gray-400 mb-6">
          Select your model and configure your vehicle.
        </p>
        <Link href="/order/config">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg">
            Configure Your Car
          </button>
        </Link>
      </section>
    </div>
  );
}
