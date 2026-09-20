type Props = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
}: Props) {
  const centered = align === "center";

  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="font-mono text-xs uppercase tracking-widest text-accent">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.5rem]">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed text-muted ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
