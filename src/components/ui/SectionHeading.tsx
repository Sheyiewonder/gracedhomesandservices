import { Sparkles } from "lucide-react";

type Props = {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  center?: boolean;
};

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
  center = true,
}: Props) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : ""}>
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm text-primary">
        <Sparkles size={16} />
        {badge}
      </div>

      <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
        {title}

        {highlight && (
          <span className="block text-primary">
            {highlight}
          </span>
        )}
      </h2>

      <p className="mt-5 text-foreground/70">
        {description}
      </p>
    </div>
  );
}