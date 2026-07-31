"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  CalendarDays,
  ClipboardCheck,
  BrushCleaning,
  PartyPopper,
  Link,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Book Your Service",
    description:
      "Reach out through our contact channels and choose the cleaning service you need.",
    icon: CalendarDays,
  },
  {
    number: "02",
    title: "Schedule a Visit",
    description:
      "We confirm a convenient date and time that fits perfectly into your schedule.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Professional Cleaning",
    description:
      "Our experienced team arrives fully equipped and delivers exceptional cleaning results.",
    icon: BrushCleaning,
  },
  {
    number: "04",
    title: "Enjoy Your Space",
    description:
      "Relax in a cleaner, healthier and more beautiful environment with complete peace of mind.",
    icon: PartyPopper,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
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

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden py-24"
    >
      {/* Background */}

      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-[120px] dark:bg-accent/10" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px,currentColor 1px,transparent 0)",
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
            How It Works
          </motion.div>

          <motion.h2
            variants={item}
            className="text-4xl font-bold sm:text-5xl"
          >
            Simple Process.

            <span className="block text-primary">
              Exceptional Results.
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 text-lg leading-8 text-foreground/70"
          >
            Getting professional cleaning has never been easier.
            Here's how we make every experience seamless.
          </motion.p>
        </motion.div>

        {/* Timeline */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative mt-20"
        >
          {/* Desktop connector */}

          <div className="absolute left-0 right-0 top-10 hidden h-1 bg-border lg:block" />

          <div
            className="
              grid
              grid-cols-2
              gap-5

              lg:grid-cols-4
              lg:gap-10
            "
          >
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  variants={item}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative text-center"
                >
                  {/* Circle */}

                  <div
                    className="
                      relative
                      z-10
                      mx-auto

                      flex
                      h-14
                      w-14
                      items-center
                      justify-center

                      rounded-full
                      bg-primary
                      text-white
                      shadow-xl

                      transition-all
                      duration-300

                      group-hover:bg-secondary

                      lg:h-20
                      lg:w-20

                      dark:group-hover:bg-accent
                      dark:group-hover:text-[#07092E]
                    "
                  >
                    <Icon
                      className="
                        h-6
                        w-6

                        lg:h-9
                        lg:w-9
                      "
                      strokeWidth={2.2}
                    />
                  </div>

                  {/* Number */}

                  <div
                    className="
                      mt-3
                      text-xs
                      font-bold
                      tracking-[0.2em]
                      text-primary

                      lg:mt-5
                      lg:text-sm
                      lg:tracking-[0.25em]
                    "
                  >
                    {step.number}
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mt-2
                      text-base
                      font-semibold
                      leading-snug

                      lg:mt-3
                      lg:text-xl
                    "
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-foreground/70
                      mb-4

                      lg:mt-4
                      lg:text-base
                      lg:leading-7
                    "
                  >
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}