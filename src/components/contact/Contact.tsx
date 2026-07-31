"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24"
    >
      {/* Background */}

      <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-secondary/10 blur-[120px]" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px,currentColor 1px,transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-muted
              px-4
              py-2
              text-sm
              font-medium
              text-primary
            "
          >
            <Sparkles size={15} />

            Get In Touch
          </div>

          <h2 className="text-4xl font-bold">
            We'd Love
            <span className="block text-primary">
              To Hear From You
            </span>
          </h2>

          <p
            className="
              mt-5
              text-lg
              leading-8
              text-foreground/70
            "
          >
            Whether you're ready to book or simply have a question,
            our team is here to help.
          </p>
        </motion.div>

        {/* Content */}

        <div
            className="
                mx-auto
                mt-16
                grid
                w-full
                max-w-6xl
                gap-8
                lg:grid-cols-[380px_minmax(0,1fr)]
                lg:items-start
            "
        >
          <ContactCard />

          <ContactForm />
        </div>
      </div>
    </section>
  );
}