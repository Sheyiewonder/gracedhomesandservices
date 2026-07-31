"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock3,
} from "lucide-react";

import {
    FaWhatsapp,
} from "react-icons/fa6";

import { contact } from "@/data/contact";

const contactItems = [
  {
    title: "Call Us",
    value: contact.phone,
    icon: PhoneCall,
    href: contact.phoneHref,
  },
  {
    title: "Email",
    value: contact.email,
    icon: Mail,
    href: contact.emailHref,
  },
  {
    title: "WhatsApp",
    value: contact.whatsappLabel,
    icon: FaWhatsapp,
    href: contact.whatsapp,
  },
  {
    title: "Location",
    value: contact.location,
    icon: MapPin,
    href: contact.maps,
  },
  {
    title: "Working Hours",
    value: contact.hours,
    icon: Clock3,
  },
];
export default function ContactCard() {
  return (
    <motion.aside
      initial={{
        opacity: 0,
        x: -40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      className="
        w-full
        min-w-0
        rounded-[2rem]
        border
        border-border
        bg-card
        p-6
        sm:p-8
        shadow-lg
      "
    >
      <h3 className="text-2xl font-bold">
        Contact Information
      </h3>

      <p
        className="
          mt-3
          leading-7
          text-foreground/70
        "
      >
        Reach out through any of the channels below.
        We'll be happy to be at your service.
      </p>

      <div className="mt-8 space-y-4">
        {contactItems.map((item) => {
          const Icon = item.icon;

          const Card = (
            <motion.div
              whileHover={{
                x: 6,
                scale: 1.02,
               }}
               whileTap={{
                scale: 0.98,
                }}
              className="
                flex
                items-start
                gap-4
                rounded-2xl
                border
                border-border
                p-3.5
                sm:p-4
                transition-all
                duration-300
                ease-out
                hover:border-primary/40
                hover:bg-primary/5
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  sm:h-12
                  sm:w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary
                  text-white
                "
              >
                <Icon className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
              </div>

              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-semibold sm:text-base">
                  {item.title}
                </h4>

                <p
                  className="
                    mt-1
                    overflow-hidden
                    break-words
                    text-xs
                    leading-5
                    text-foreground/70
                    sm:text-sm
                    sm:leading-6
                  "
                >
                  {item.value}
                </p>
              </div>
            </motion.div>
          );

          return item.href ? (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="
                block
                rounded-2xl
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary
              "
            >
              {Card}
            </a>
          ) : (
            <div key={item.title}>
              {Card}
            </div>
          );
        })}
      </div>
    </motion.aside>
  );
}