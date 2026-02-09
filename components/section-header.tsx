import { Badge } from "@/components/ui/badge";

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl">{title}</h2>
      <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">{description}</p>
    </div>
  );
}
