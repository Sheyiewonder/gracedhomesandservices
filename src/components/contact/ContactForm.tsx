"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  "Residential & Deep Cleaning",
  "Upholstery & Carpet Care",
  "Post-Construction Cleaning",
  "Events Before & After Cleaning",
  "Fumigation & Pest Control",
  "Commercial & Industrial Maintenance",
];

export default function ContactForm() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
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
        Send Us a Message
      </h3>

      <p
        className="
          mt-3
          leading-7
          text-foreground/70
        "
      >
        Tell us about your cleaning needs and we'll get back to
        you as soon as possible.
      </p>

      <form className="mt-10 space-y-6">

        {/* Name + Email */}

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              className="
                w-full
                rounded-xl
                border
                border-border
                bg-background
                px-4
                py-3
                outline-none
                transition
                focus:border-primary
                focus:ring-4
                focus:ring-primary/10
              "
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="john@email.com"
              className="
                w-full
                rounded-xl
                border
                border-border
                bg-background
                px-4
                py-3
                outline-none
                transition
                focus:border-primary
                focus:ring-4
                focus:ring-primary/10
              "
            />
          </div>

        </div>

        {/* Phone + Service */}

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block font-medium">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="+234..."
              className="
                w-full
                rounded-xl
                border
                border-border
                bg-background
                px-4
                py-3
                outline-none
                transition
                focus:border-primary
                focus:ring-4
                focus:ring-primary/10
              "
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Service Needed
            </label>

            <select
              className="
                w-full
                rounded-xl
                border
                border-border
                bg-background
                px-4
                py-3
                outline-none
                transition
                focus:border-primary
                focus:ring-4
                focus:ring-primary/10
              "
            >
              <option>Select a service</option>

              {services.map((service) => (
                <option
                  key={service}
                  value={service}
                >
                  {service}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Message */}

        <div>

          <label className="mb-2 block font-medium">
            Message
          </label>

          <textarea
            rows={6}
            placeholder="Tell us about your cleaning requirements..."
            className="
              w-full
              resize-none
              rounded-xl
              border
              border-border
              bg-background
              px-4
              py-3
              outline-none
              transition
              focus:border-primary
              focus:ring-4
              focus:ring-primary/10
            "
          />

        </div>

        {/* Button */}

        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            group
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-primary
            px-8
            py-4
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
          Send Message

          <ArrowRight
            size={18}
            className="
                transition-transform
                duration-300
                group-hover:translate-x-1
            "
          />
        </motion.button>

      </form>
    </motion.div>
  );
}