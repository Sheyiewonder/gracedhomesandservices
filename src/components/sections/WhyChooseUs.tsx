"use client";

import Image from "next/image";
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

const stats = [
  { value: "150+", label: "Spaces Cleaned" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "5+", label: "Professional Services" },
  { value: "100%", label: "Quality Guaranteed" },
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

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden py-24"
    >
      {/* Background */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-[120px] dark:bg-accent/10" />

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
            Why Choose us?
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
            className="mt-6 text-lg leading-8 text-foreground/70"
          >
            We combine professional expertise, dependable service
            & exceptional care to deliver cleaning solutions you
            can always rely on.
          </motion.p>
        </motion.div>

        {/* Main Content */}

        <div className="mt-20 grid items-center gap-14 lg:grid-cols-2">

          {/* Image */}

          <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[560px] overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl">

              <Image
                src="/images/Testimonials/why-choose-us9.jpg"
                alt="Professional cleaning team"
                fill
                className="object-cover transition duration-700 hover:scale-105"
                sizes="(max-width:1024px)100vw,50vw"
              />

            </div>
          </motion.div>

          {/* Features */}

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  variants={item}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    group
                    rounded-3xl
                    border
                    border-border
                    bg-card/80
                    p-6
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:shadow-2xl
                  "
                >
                  <div className="space-y-5">

                    <div className="flex items-center gap-4">

                        {/* Icon */}

                        <div
                        className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl

                            bg-primary
                            text-white
                            shadow-lg

                            transition-all
                            duration-300

                            group-hover:scale-110
                            group-hover:rotate-2
                            group-hover:bg-secondary

                            dark:group-hover:bg-accent
                            dark:group-hover:text-[#07092E]

                            sm:h-12
                            sm:w-12

                            lg:h-16
                            lg:w-16
                            lg:rounded-2xl
                        "
                        >
                        <Icon
                            className="
                            h-5
                            w-5

                            sm:h-6
                            sm:w-6

                            lg:h-8
                            lg:w-8
                            "
                            size={34}
                            strokeWidth={2.2}
                        />
                        </div>

                        {/* Title */}

                        <h3
                        className="
                            text-lg
                            font-semibold
                            transition-colors
                            group-hover:text-primary

                            lg:text-xl
                        "
                        >
                        {feature.title}
                        </h3>

                    </div>

                    {/* Description */}

                    <p
                        className="
                        leading-7
                        text-foreground/70
                        "
                    >
                        {feature.description}
                    </p>

                    </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

        {/* Statistics */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            mt-20
            grid
            grid-cols-2
            gap-4

            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="
                rounded-3xl
                border
                border-border
                bg-card/80
                p-5
                text-center
                backdrop-blur-xl

                lg:p-8
              "
            >
              <h3 className="text-4xl font-bold text-primary">
                {stat.value}
              </h3>

              <p className="mt-3 text-foreground/70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}