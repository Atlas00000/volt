"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage(): JSX.Element {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Add 0.5s delay before the video appears
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {/* Background Video */}
      {showVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="/homepageclip1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for better readability
          color: "white",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>The Future of Electric Performance</h1>
        <p style={{ fontSize: "1.5rem", marginTop: "10px" }}>Experience speed, efficiency, and sustainability.</p>
        <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
          <Link href="/models">
            <button
              style={{
                padding: "12px 24px",
                backgroundColor: "#2563eb",
                color: "white",
                borderRadius: "8px",
                fontSize: "1.2rem",
                transition: "0.3s",
                border: "none",
                cursor: "pointer",
              }}
            >
              Explore Models
            </button>
          </Link>
          <Link href="/order">
            <button
              style={{
                padding: "12px 24px",
                backgroundColor: "transparent",
                border: "2px solid white",
                color: "white",
                borderRadius: "8px",
                fontSize: "1.2rem",
                transition: "0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "white", e.currentTarget.style.color = "black")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent", e.currentTarget.style.color = "white")}
            >
              Order Now
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
