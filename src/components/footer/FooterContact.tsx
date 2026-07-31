"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  Mail,
  MapPin,
} from "lucide-react";

import {
    FaWhatsapp,
} from "react-icons/fa6";

import { contact } from "@/data/contact";

const items = [
  {
    label: contact.phone,
    href: contact.phoneHref,
    icon: PhoneCall,
  },
  {
    label: contact.email,
    href: contact.emailHref,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    href: contact.whatsapp,
    icon: FaWhatsapp,
  },
  {
    label: contact.location,
    href: contact.maps,
    icon: MapPin,
  },
];

export default function FooterContact() {
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
        delay: 0.2,
      }}
    >
      <h3 className="text-lg font-semibold">
        Contact
      </h3>

      <ul className="mt-6 space-y-5 break-all">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.label}>
              <motion.a
                href={item.href}
                target={
                  item.href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                whileHover={{
                  x: 6,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  group
                  flex
                  items-start
                  gap-3
                  text-foreground/70
                  transition-colors
                  duration-300
                  hover:text-primary
                  active:scale-[0.98]
                  active:text-primary
                "
              >
                <Icon
                  className="
                    mt-1
                    h-5
                    w-5
                    shrink-0
                    text-primary
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <span className="break-words">
                  {item.label}
                </span>
              </motion.a>
            </li>
          );
        })}
      </ul>

      <div
        className="
          mt-8
          rounded-2xl
          border
          border-border
          bg-background
          p-4
        "
      >
        <p
          className="
            text-sm
            font-medium
          "
        >
          Working Hours
        </p>

        <p
          className="
            mt-2
            text-xs
            text-foreground/70
          "
        >
          {contact.hours}
        </p>
      </div>
    </motion.div>
  );
}