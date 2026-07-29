import { ArrowRight } from "lucide-react";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
};

export default function Button({
  children,
  variant = "primary",
}: Props) {
  if (variant === "outline") {
    return (
      <button
        className="
          group
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-primary
          px-7
          py-3.5
          font-semibold
          text-primary
          transition-all
          hover:bg-primary
          hover:text-white
          dark:hover:bg-accent
          dark:hover:text-[#07092E]
        "
      >
        {children}

        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>
    );
  }

  return (
    <button
      className="
        group
        inline-flex
        items-center
        gap-2
        rounded-full
        bg-primary
        px-7
        py-3.5
        font-semibold
        text-white
        shadow-lg
        transition-all
        hover:scale-105
        hover:bg-secondary
        hover:text-[#07092E]
      "
    >
      {children}

      <ArrowRight
        size={18}
        className="transition-transform group-hover:translate-x-1"
      />
    </button>
  );
}