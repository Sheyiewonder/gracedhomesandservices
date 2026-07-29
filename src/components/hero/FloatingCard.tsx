"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import clsx from "clsx";

type FloatingCardProps = {
  title: string;
  subtitle: string;
  className?: string;
  direction?: "up" | "down";
};

export default function FloatingCard({
  title,
  subtitle,
  className,
  direction = "up",
}: FloatingCardProps) {
  return (
    <motion.div
      animate={{
        y: direction === "up" ? [0, -10, 0] : [0, 10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={clsx(
        `
          absolute
          z-20
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-border
          bg-card/90
          px-4
          py-3
          shadow-xl
          backdrop-blur-md
        `,
        className
      )}
    >
      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          bg-primary/10
          dark:border-accent/20
          text-white
          shadow-md
        "
      >
        <CheckCircle2 size={22} />
      </div>

      <div>
        <h4 className="text-base font-semibold text-foreground">
          {title}
        </h4>

        <p className="text-sm text-foreground/70">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
}