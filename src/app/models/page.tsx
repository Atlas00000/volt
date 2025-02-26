"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Model {
  name: string;
  description: string;
  image: string;
  link: string;
}

const models: Model[] = [
  {
    name: "VoltX Sedan",
    description: "Speed meets sustainability.",
    image: "/voltx-sedan.jpg",
    link: "/models/voltx-sedan",
  },
  {
    name: "VoltR SUV",
    description: "Power and luxury in one ride.",
    image: "/voltr-suv.jpg",
    link: "/models/voltr-suv",
  },
  {
    name: "VoltT Truck",
    description: "Built to go beyond.",
    image: "/voltt-truck.jpg",
    link: "/models/voltt-truck",
  },
];

export default function ModelsPage(): JSX.Element {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-center">
        <Image
          src="/models-hero.jpg"
          alt="Our Electric Models"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold">Explore Our Models</h1>
          <p className="text-lg mt-2">Discover the perfect electric vehicle for you.</p>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-16 grid md:grid-cols-3 gap-8 text-center">
        {models.map((model, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            <Image
              src={model.image}
              alt={model.name}
              width={400}
              height={250}
              className="rounded-lg"
            />
            <h3 className="text-2xl font-semibold mt-4">{model.name}</h3>
            <p className="text-gray-400 mt-2">{model.description}</p>
            <Link
              href={model.link}
              className="mt-4 inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg"
            >
              View Details
            </Link>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
