"use client";

import CountUp from "react-countup";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    value: 98,
    suffix: "%",
    label: "Customer Satisfaction",
  },
  {
    value: 4.9,
    suffix: "★",
    label: "Average Rating",
    decimals: 1,
  },
];

export default function HeroStats() {
  return (
    <div
      className="
        grid
        grid-cols-3
        gap-4
        border-t
        border-border
        pt-8
        sm:gap-6
      "
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="text-left"
        >
          <h3
            className="
              text-2xl
              font-bold
              text-primary
              sm:text-3xl
            "
          >
            <CountUp
              end={stat.value}
              duration={2}
              decimals={stat.decimals ?? 0}
              enableScrollSpy
              scrollSpyOnce
            />

            {stat.suffix}
          </h3>

          <p
            className="
              mt-1
              text-xs
              leading-relaxed
              text-foreground/60
              sm:text-sm
            "
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}