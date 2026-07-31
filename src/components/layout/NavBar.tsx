"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "How it Works", href: "#process" },
  { name: "Why Choose Us", href: "#why-us" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 15);

      if (current > lastScroll && current > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{
          y: hidden ? "-100%" : 0,
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "border-b border-primary/10 bg-background/75 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            : "bg-transparent"
        }`}
                >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 lg:px-8">

          {/* Logo */}

          <Link
            href="/"
            className="group flex items-center gap-2 sm:gap-4"
            >
            <div
                className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    border
                    border-primary/15
                    bg-white
                    shadow-lg
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:shadow-2xl
                    dark:bg-card
                    dark:border-white/10
                "
                >
                <Image
                    src="/logo/IMG_5711.png"
                    alt="Graced Homes & Services"
                    width={72}
                    height={72}
                    priority
                    className="
                    h-[72px]
                    w-[72px]
                    scale-[2.0]
                    object-cover
                    transition-transform
                    duration-300
                    group-hover:scale-[1.95]
                    "
                />
            </div>

            <div className="leading-tight">
                <h2 className="text-base font-bold text-foreground sm:text-lg">
                    GRACED
                </h2>

                <p className="text-xs text-foreground/70 sm:text-sm">
                    Homes & Services
                </p>
            </div>
            </Link>
          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`
                relative
                text-sm
                font-semibold
                transition-colors
                duration-300
                text-foreground
                hover:text-primary
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-primary
                after:transition-all
                hover:after:w-full
                `}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}

          <div className="hidden items-center gap-4 lg:flex">
            <ThemeToggle />
            <button
              className="
                rounded-full
                bg-primary
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-secondary
                hover:text-[#07092E]
                hover:shadow-lg
              "
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
            rounded-xl
            p-2
            text-foreground
            transition
            hover:bg-primary/10
            hover:text-primary
            lg:hidden
            "
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -12,
                scale: 0.98,
                }}

                animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                }}

                exit={{
                opacity: 0,
                y: -12,
                scale: 0.98,
                }}

                transition={{
                duration: 0.28,
                ease: "easeOut",
                }}
                            className="
                lg:hidden
                overflow-hidden

                border-t
                border-primary/10

                bg-background/60
                text-foreground

                backdrop-blur-3xl
                backdrop-saturate-150

                px-6
                py-6

                rounded-b-3xl

                shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                "
            >
              <div className="flex flex-col gap-5">

                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    whileHover={{
                        x: 8,
                        color: "#0B4ED7",
                    }}
                    whileTap={{
                        scale: 0.96,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                    }}
                    onClick={() => setMenuOpen(false)}
                    className="
                        group
                        flex
                        items-center
                        justify-between

                        rounded-xl

                        px-4
                        py-3

                        text-lg
                        font-semibold
                        text-foreground

                        transition-colors
                        duration-300

                        hover:bg-primary/10
                    "
                    >
                    {link.name}

                    <motion.span
                        initial={{ opacity: 0, x: -8 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="text-primary"
                    >
                        →
                    </motion.span>
                    </motion.a>
                ))}

                <div className="flex justify-center py-2">
                    <ThemeToggle />
                </div>

                <button
                  className="
                    mt-2
                    rounded-full
                    bg-primary
                    py-4
                    font-semibold
                    text-white
                  "
                >
                  Get Free Quote
                </button>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}