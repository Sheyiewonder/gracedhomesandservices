"use client";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterSocials from "./FooterSocials";

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        rounded-t-[3rem]
        border-t
        border-border
        bg-card
        py-20
      "
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Top */}

        <div
          className="
            grid
            gap-16

            md:grid-cols-2

            lg:grid-cols-4
          "
        >
          <FooterBrand />

          <FooterLinks />

          <FooterContact />

          <FooterSocials />
        </div>

        {/* Divider */}

        <div
          className="
            my-12
            border-t
            border-border
          "
        />

        {/* Bottom */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-6

            text-center
            text-sm
            text-foreground/60

            md:flex-row
          "
        >
          <p>
            © {new Date().getFullYear()} GRACED HOMES & SERVICES.
            All Rights Reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              font-medium
              transition-colors
              hover:text-primary
            "
          >
            Back to Top ↑
          </button>
        </div>

      </div>
    </footer>
  );
}