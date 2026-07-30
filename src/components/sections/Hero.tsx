"use client";

import Container from "../ui/Container";
import HeroContent from "../hero/HeroContent";
import HeroImage from "../hero/HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-32">

      {/* Background Effects */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <Container>

        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.15fr]">

          <HeroContent />

          <HeroImage />

        </div>

      </Container>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block h-auto w-full"
        >
          <path
            fill="var(--background)"
            d="M0,64L80,69.3C160,75,320,85,480,90.7C640,96,800,96,960,80C1120,64,1280,32,1360,16L1440,0V120H0Z"
          />
        </svg>
      </div>

    </section>
  );
}