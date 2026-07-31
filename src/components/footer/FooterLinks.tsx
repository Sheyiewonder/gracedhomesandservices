"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const links = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Why Choose Us",
    href: "#why-choose-us",
  },
  {
    label: "Our Process",
    href: "#process",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function FooterLinks() {
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
        delay: 0.1,
      }}
    >
      <h3
        className="
          text-lg
          font-semibold
        "
      >
        Quick Links
      </h3>

      <nav className="mt-6">
        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link.href}>
              <motion.a
                href={link.href}
                whileHover={{
                  x: 6,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  text-foreground/70
                  transition-colors
                  duration-300
                  hover:text-primary
                  transition-all
                  active:scale-[0.98]
                  active:text-primary
                "
              >
                <ChevronRight
                  className="
                    h-4
                    w-4
                    text-primary
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

                <span>{link.label}</span>
              </motion.a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
}