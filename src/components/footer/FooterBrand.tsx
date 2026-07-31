"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FooterBrand() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
    >
      {/* Logo */}

      <div className="flex items-center gap-4">
        <div
          className="
            relative
            flex
            h-14
            w-14
            items-center
            justify-center
            overflow-hidden
            rounded-2xl
            bg-white
            shadow-lg
          "
        >
          <Image
            src="/logo/IMG_5711.png"
            alt="Graced Homes & Services"
            fill
            sizes="56px"
            className="object-contain scale-175"
          />
        </div>

        <div>
          <h3 className="text-xl font-bold tracking-tight">
            GRACED HOMES
          </h3>

          <p className="text-sm text-primary font-medium">
            & SERVICES
          </p>
        </div>
      </div>

      {/* Description */}

      <p
        className="
          mt-6
          max-w-sm
          leading-8
          text-foreground/70
        "
      >
        Professional cleaning solutions for homes,
        offices and commercial spaces. We help you
        enjoy cleaner, healthier and more comfortable
        environments with reliable, detail-oriented
        service.
      </p>

    </motion.div>
  );
}