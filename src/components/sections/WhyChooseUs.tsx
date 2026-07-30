"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Clock3,
  Leaf,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    title: "Trusted Professionals",
    description:
      "Our trained cleaning specialists deliver meticulous results with attention to every detail.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable & On-Time",
    description:
      "We respect your schedule, arriving prepared and completing every task efficiently.",
    icon: Clock3,
  },
  {
    title: "Eco-Friendly Cleaning",
    description:
      "Safe and effective cleaning solutions that protect your family, staff and environment.",
    icon: Leaf,
  },
  {
    title: "Satisfaction Guaranteed",
    description:
      "Your satisfaction is our priority. We aren't finished until you're happy with the results.",
    icon: BadgeCheck,
  },
];

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
    y: 35,
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

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden py-24"
    >
      {/* Background */}
      <div className="absolute -left-44 top-10 h-96 w-96 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-[140px] dark:bg-accent/10" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium text-primary"
          >
            <Sparkles size={15} />
            Why Choose GRACED
          </motion.div>

          <motion.h2
            variants={item}
            className="text-4xl font-bold sm:text-5xl"
          >
            Cleaning Beyond
            <span className="block text-primary">
              Expectations
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-5 text-lg leading-8 text-foreground/70"
          >
            We combine professional expertise, dependable service and exceptional
            care to deliver cleaning solutions you can always rely on.
          </motion.p>
        </motion.div>

        {/* Feature cards go here */}
      </div>
    </section>
  );
}

