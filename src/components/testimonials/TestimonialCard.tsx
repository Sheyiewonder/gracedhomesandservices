"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

type Props = {
  name: string;
  role: string;
  image: string;
  review: string;
  rating: number;
  currentIndex: number;
  total: number;
  onSelect: (index: number) => void;
};

export default function TestimonialCard({
  name,
  role,
  review,
  rating,
  image,
  currentIndex,
  total,
  onSelect,
}: Props) {
  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        relative
        w-full
        max-w-2xl
        mx-auto
        snap-start
        shrink-0
        overflow-hidden
        rounded-3xl
        border
        border-border
        bg-card/80
        p-8
        shadow-lg
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-primary/40
        hover:shadow-2xl
      "
    >
      {/* Quote */}

      <Quote
        className="
          absolute
          right-6
          top-6
          h-14
          w-14
          text-primary/10
          transition-colors
          group-hover:text-primary/20
        "
      />

      {/* Stars */}

      <div className="mb-6 flex items-center gap-1">
        {Array.from({ length: rating }).map((_, index) => (
          <Star
            key={index}
            className="h-4 w-4 fill-secondary text-secondary"
          />
        ))}
      </div>

      {/* Review */}

      <p
        className="
          mb-8
          text-lg
          leading-9
          text-foreground/80
        "
      >
        {review}
      </p>

      {/* User */}

      <div className="mt-8 flex items-center gap-4">
        <div
          className="
            relative
            h-16
            w-16
            overflow-hidden
            rounded-full
            ring-2
            ring-primary/20
          "
        >
          <Image
            src={image}
            alt={name}
            fill
            sizes="56px"
            className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-110
            "
          />
        </div>

        <div>
            <div className="mt-8 flex justify-center gap-3">
                {Array.from({ length: total }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => onSelect(i)}
                        className={`
                            h-2.5
                            rounded-full
                            transition-all
                            duration-300
                            ${
                                currentIndex === i
                                    ? "w-10 bg-primary"
                                    : "w-2.5 bg-primary/25 hover:bg-primary/50"
                            }
                        `}
                        aria-label={`Go to testimonial ${i + 1}`}
                    />
                ))}
            </div>
          <h4 className="font-semibold">
            {name}
          </h4>

          <p
            className="
              text-sm
              text-foreground/60
            "
          >
            {role}
          </p>
        </div>
      </div>
    </motion.article>
  );
}