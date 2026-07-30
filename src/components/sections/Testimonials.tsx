"use client";

import { motion } from "framer-motion";
import { Sparkles, Star, Quote } from "lucide-react";

import TestimonialsCarousel from "../testimonials/TestimonialsCarousel";
import TestimonialCard from "../testimonials/TestimonialCard";
import { testimonials } from "@/data/testimonials";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
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

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24"
    >
      {/* Background */}

      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-[120px] dark:bg-accent/10" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px,currentColor 1px,transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6">

        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          {/* Badge */}

          <motion.div
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium text-primary"
          >
            <Sparkles size={15} />
            Testimonials
          </motion.div>

          {/* Heading */}

          <motion.h2
            variants={item}
            className="max-w-3xl text-4xl font-bold"
          >
            Trusted by

            <span className="block text-primary">
              Homes & Businesses
            </span>
          </motion.h2>

          {/* Description */}

          <motion.p
            variants={item}
            className="mt-5 max-w-2xl text-lg leading-8 text-foreground/70"
          >
            Discover why our clients continue to choose GRACED HOMES &
            SERVICES for reliable, professional and exceptional cleaning.
          </motion.p>

          {/* Rating */}

          <motion.div
            variants={item}
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-border
              bg-card/80
              px-6
              py-3
              backdrop-blur-xl
            "
          >
            <div className="flex gap-1">
              {Array.from({ length: 1}).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-secondary text-secondary"
                />
              ))}
            </div>

            <span className="font-semibold">
              4.9 Average Rating
            </span>
          </motion.div>

          {/* Carousel */}

          <motion.div
            variants={item}
            className="mt-16"
          >
            <TestimonialsCarousel />
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}
