"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const models = [
  { name: "VoltX Sedan", description: "Speed meets sustainability.", image: "/voltx.jpg", link: "/models/voltx-sedan" },
  { name: "VoltR SUV", description: "Power and luxury in one ride.", image: "/voltr.jpg", link: "/models/voltr-suv" },
  { name: "VoltT Truck", description: "Built to go beyond.", image: "/voltt.jpg", link: "/models/voltt-truck" },
];

export default function ModelsPage(): JSX.Element {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div style={{ backgroundColor: "black", color: "white", minHeight: "100vh", padding: "40px 20px" }} ref={containerRef}>
      {/* Hero Section */}
      <motion.section
        style={{
          position: "relative",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/models-hero.jpg"
          alt="Our Electric Models"
          layout="fill"
          objectFit="cover"
          style={{ position: "absolute", inset: 0, zIndex: 0 }}
        />
        <div style={{ position: "relative", zIndex: 10, backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "20px", borderRadius: "10px" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Explore Our Models</h1>
          <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>Discover the perfect electric vehicle for you.</p>
        </div>
      </motion.section>

      {/* Models Section with Parallax Effect */}
      <section style={{ padding: "80px 0", display: "flex", flexDirection: "column", gap: "80px" }}>
        {models.map((model, index) => {
          const y = useTransform(scrollYProgress, [0, 1], [0, -200 * (index + 1)]); // ✅ Stronger Parallax Effect

          return (
            <motion.div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "30px",
                textAlign: "center",
                maxWidth: "100%",
                overflow: "hidden",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Image Wrapper */}
              <motion.div
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  height: "auto",
                  overflow: "hidden",
                  borderRadius: "10px",
                  boxShadow: "0 10px 20px rgba(255, 255, 255, 0.1)",
                }}
              >
                <Image
                  src={model.image}
                  alt={model.name}
                  width={800}
                  height={500}
                  style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "10px" }}
                />
              </motion.div>

              {/* Text & Link */}
              <div>
                <h3 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>{model.name}</h3>
                <p style={{ fontSize: "1.2rem", color: "gray", marginTop: "10px" }}>{model.description}</p>
                <Link
                  href={model.link}
                  style={{
                    display: "inline-block",
                    marginTop: "20px",
                    padding: "12px 24px",
                    backgroundColor: "#2563eb",
                    color: "white",
                    borderRadius: "8px",
                    fontSize: "1.2rem",
                    transition: "0.3s",
                  }}
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}
