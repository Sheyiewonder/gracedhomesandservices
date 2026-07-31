"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, Plus } from "lucide-react";

const faqs = [
  {
    question: "Do you bring your own cleaning supplies?",
    answer:
      "Yes. Our team arrives fully equipped with professional cleaning products and equipment. If you have preferred products you'd like us to use, we're happy to accommodate your request.",
  },
  {
    question: "How do I book a cleaning service?",
    answer:
      "Simply contact us through our website, WhatsApp, or phone. We'll discuss your cleaning needs, schedule a convenient time, and provide a free quotation.",
  },
  {
    question: "Which locations do you serve?",
    answer:
      "We provide residential and commercial cleaning services in Akure and other south-western Nigerian states. Contact us to confirm service availability in your location.",
  },
  {
    question: "Do you offer one-time and recurring cleaning?",
    answer:
      "Absolutely! We provide one-time deep cleaning, weekly, bi-weekly and monthly cleaning plans tailored to your schedule.",
  },
  {
    question: "How long does a cleaning session take?",
    answer:
      "The duration depends on the size of your property and the service requested. Most residential cleanings take between 1 to 2 days.",
  },
  {
    question: "Are your cleaning professionals trained?",
    answer:
      "Yes. Every member of our team is professionally trained and committed to delivering exceptional cleaning standards with attention to detail.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const leftColumn = faqs.slice(0, 3);
  const rightColumn = faqs.slice(3);

  const renderFaqColumn = (
    items: typeof faqs,
    offset: number
  ) =>
    items.map((faq, index) => {
      const actualIndex = index + offset;
      const expanded = open === actualIndex;

      return (
        <motion.div
          key={faq.question}
          layout
          whileHover={{ y: -2 }}
          transition={{ duration: 0.25 }}
          className="
            overflow-hidden
            rounded-3xl
            border
            border-border
            bg-card
            shadow-lg
          "
        >
          <button
            onClick={() =>
              setOpen(expanded ? null : actualIndex)
            }
            className="
              flex
              w-full
              items-center
              gap-6
              px-8
              py-6
              text-left
            "
          >
            <span className="flex-1 text-lg font-semibold">
              {faq.question}
            </span>

            <motion.div
              animate={{
                rotate: expanded ? 45 : 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-primary/10
                text-primary
              "
            >
              <Plus size={18} />
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.35,
                }}
              >
                <div
                  className="
                    border-t
                    border-border
                    px-8
                    py-6
                  "
                >
                  <p
                    className="
                      leading-8
                      text-foreground/70
                    "
                  >
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      );
    });

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-24"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
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
            Frequently Asked Questions
          </div>

          <h2 className="text-4xl font-bold">
            Everything You Need to Know
            <span className="block text-primary">
              Before Booking
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
            Find answers to the most common questions about our
            professional cleaning services.
          </p>
        </div>

        {/* FAQ */}

        <div
          className="
            mx-auto
            mt-16
            grid
            max-w-6xl
            gap-6
            lg:grid-cols-2
            lg:items-start
          "
        >
          <div className="space-y-5">
            {renderFaqColumn(leftColumn, 0)}
          </div>

          <div className="space-y-5">
            {renderFaqColumn(rightColumn, leftColumn.length)}
          </div>
        </div>
      </div>
    </section>
  );
}