"use client";

import { motion } from "framer-motion";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1BovFDpYXs/?mibextid=wwXIfr",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/gracedhomesandservices?igsh=cHlwNDVoZXpidnFi",
    icon: FaInstagram,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@graced.homes.and?_r=1&_t=ZS-98UfZGpvtu0",
    icon: FaTiktok,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/c/2349069932400?text=Hello%20Graced%20Homes%20%26%20Services.%20I'd%20like%20to%20book%20a%20cleaning%20service.",
    icon: FaWhatsapp,
  },
];

export default function FooterSocials() {
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
        delay: 0.3,
      }}
    >
      <h3 className="text-lg font-semibold">
        Stay Connected
      </h3>

      <p
        className="
          mt-4
          leading-7
          text-foreground/70
        "
      >
        Follow us for cleaning tips,
        transformations and updates.
      </p>

      <div
        className="
          mt-8
          flex
          flex-wrap
          gap-4
        "
      >
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -5,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                duration: 0.2,
              }}
              aria-label={social.name}
              className="
                group
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-2xl
                border
                border-border
                bg-background
                transition-all
                duration-300
                hover:border-primary
                hover:bg-primary
                active:scale-[0.98]
                active:bg-primary
              "
            >
              <Icon
                className="
                  h-4
                  w-4
                  text-foreground/70
                  transition-colors
                  duration-300
                  group-hover:text-white
                "
              />
            </motion.a>
          );
        })}
      </div>

      <div
        className="
          mt-8
          rounded-2xl
          border
          border-border
          bg-primary/5
          p-5
        "
      >
        <h4 className="font-semibold">
          Need a Cleaning Service Today?
        </h4>

        <p
          className="
            mt-2
            text-sm
            leading-6
            text-foreground/70
          "
        >
          We're just one message away.
          Reach out and let's make your
          space spotless.
        </p>

        <motion.a
          href="https://wa.me/c/2349069932400?text=Hello%20Graced%20Homes%20%26%20Services.%20I'd%20like%20to%20book%20a%20cleaning%20service."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            group
            mt-5
            gap-3
            inline-flex
            items-center
            rounded-full
            bg-primary
            px-5
            py-3
            text-xs
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:bg-secondary
            hover:text-background
            active:scale-[0.98]
          "
        >
          Chat on WhatsApp
        </motion.a>
      </div>
    </motion.div>
  );
}