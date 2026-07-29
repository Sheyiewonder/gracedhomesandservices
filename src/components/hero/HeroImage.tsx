"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FloatingCard from "./FloatingCard";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, x: 30 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="relative"
    >
      {/* Main Image */}
      <div
          className="
            relative
            h-[360px]
            overflow-hidden
            rounded-[2rem]
            border
            border-border
            bg-card
            shadow-[0_30px_60px_rgba(0,0,0,0.18)]
            sm:h-[450px]
            lg:h-[600px]
            xl:h-[680px]
        "
      >
        <Image
          src="/images/hero/28a34acc37b584d20cb67131b092427f.jpg"
          alt="Professional cleaning service"
          fill
          priority
          className="object-cover object-center scale-110 transition-transform duration-700 hover:scale-115"
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 55vw,
            650px
          "
        />

        {/* Optional dark overlay for better depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>

      
    </motion.div>
  );
}