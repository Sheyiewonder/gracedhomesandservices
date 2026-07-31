"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { MoonStar, SunMedium } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
        <motion.div
            whileHover={{
                scale: 1.08,
                rotate: 8,
            }}
            whileTap={{
                scale: 0.95,
            }}
            initial={{
                opacity: 0,
                scale: 0.9,
            }}
            animate={{
                opacity: 1,
                scale: 1,
                y: [0, -6, 0],
                boxShadow: [
                "0 10px 20px rgba(0,0,0,.10)",
                "0 18px 35px rgba(0,0,0,.18)",
                "0 10px 20px rgba(0,0,0,.10)",
                ],
            }}
            transition={{
                opacity: {
                duration: 0.4,
                },
                scale: {
                duration: 0.4,
                },
                y: {
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                },
            }}
            className="
                fixed
                bottom-16
                right-6
                z-[100]
            "
            >
            <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.3,
                delay: 0.8,
            }}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            className="
                pointer-events-auto

                flex
                h-8
                w-8
                items-center
                justify-center

                rounded-full

                border
                border-primary/10

                bg-white/80
                text-primary

                shadow-md
                backdrop-blur-xl

                transition-all
                duration-300

                hover:scale-110
                hover:shadow-xl

                dark:border-white/10
                dark:bg-slate-900/80
                dark:text-accent
            "
            >
            <motion.div
                key={resolvedTheme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
            >
                {isDark ? (
                <MoonStar size={14} strokeWidth={2.4} />
                ) : (
                <SunMedium size={14} strokeWidth={2.4} />
                )}
            </motion.div>
            </motion.button>
        </motion.div>
    );
}