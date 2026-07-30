"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  CheckCircle,
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import HeroStats from "./HeroStats";

const trustPoints = [
  "Trusted cleaning professionals",
  "Residential & commercial services",
  "100% Satisfaction Guarantee",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function HeroContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="relative z-10"
    >

      {/* Heading */}
      <motion.h1
        variants={itemVariants}
        className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl"
      >
        Your Space,
        <span className="block text-primary">
          Our Signature Shine.
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="mt-6 max-w-xl text-base leading-8 text-foreground/70 sm:text-lg"
      >
        Experience professional residential, commercial and specialised
        cleaning services designed to leave every space healthier, brighter
        and beautifully maintained.
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={itemVariants}
        className="mt-8 flex flex-col gap-4 sm:flex-row"
      >
       
        <Link
        href="#contact"
        className="
            group
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-full
            bg-primary
            px-8
            py-4
            font-semibold
            leading-none
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-secondary
            hover:text-[#07092E]
            active:scale-95
            active:bg-primary
            active:text-white

        "
        >
        <CalendarDays
            size={20}
            className="shrink-0"
        />

        <span className="flex items-center">
            Book Cleaning
        </span>
        </Link>

        <Link
            href="#services"
            className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-primary
                bg-transparent
                px-8
                py-4
                font-semibold
                leading-none
                text-primary
                transition-all
                duration-300
                hover:bg-primary
                hover:text-white
                active:scale-95
                active:bg-primary
                active:text-white

            "
            >
            <span className="flex items-center">
                Explore Services
            </span>

            <ArrowRight
                size={18}
                className="
                shrink-0
                transition-transform
                duration-300
                group-hover:translate-x-1
                "
            />
        </Link>
      </motion.div>

      {/* Trust Points */}
      <motion.div
        variants={itemVariants}
        className="mt-10 space-y-4"
      >
        {trustPoints.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 text-sm text-foreground sm:text-base"
          >
            <CheckCircle
              size={20}
              className="shrink-0 text-secondary"
            />

            <span>{item}</span>
          </div>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={itemVariants}
        className="mt-10"
      >
        <HeroStats />
      </motion.div>
    </motion.div>
  );
}