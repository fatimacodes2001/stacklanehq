type Props = {
  variant?: "mark" | "full";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

const sizes = {
  sm: { mark: 32, word: "text-base" },
  md: { mark: 36, word: "text-lg" },
  lg: { mark: 48, word: "text-xl" },
  xl: { mark: 72, word: "text-3xl" },
};

export function StacklaneLogo({
  variant = "full",
  size = "md",
  className = "",
}: Props) {
  const { mark, word } = sizes[size];
  const gradId = `stacklane-grad-${size}`;

  const markSvg = (
    <svg
      width={mark}
      height={mark}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="4" y1="4" x2="44" y2="44">
          <stop stopColor="#22d3ee" />
          <stop offset="1" stopColor="#0891b2" />
        </linearGradient>
      </defs>

      <rect
        x="1"
        y="1"
        width="46"
        height="46"
        rx="12"
        fill={`url(#${gradId})`}
        fillOpacity="0.12"
        stroke={`url(#${gradId})`}
        strokeWidth="1.5"
      />

      {/* Stack layers */}
      <path
        d="M10 30.5L24 24.5L38 30.5L24 36.5L10 30.5Z"
        fill={`url(#${gradId})`}
        fillOpacity="0.35"
      />
      <path
        d="M10 24.5L24 18.5L38 24.5L24 30.5L10 24.5Z"
        fill={`url(#${gradId})`}
        fillOpacity="0.65"
      />
      <path
        d="M10 18.5L24 12.5L38 18.5L24 24.5L10 18.5Z"
        fill={`url(#${gradId})`}
      />

      {/* Flow lane */}
      <path
        d="M13 34C18 28 22 20 35 14"
        stroke="#22d3ee"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
      <circle cx="35" cy="14" r="2.5" fill="#22d3ee" />
    </svg>
  );

  if (variant === "mark") {
    return <span className={`inline-flex shrink-0 ${className}`}>{markSvg}</span>;
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {markSvg}
      <span className={`${word} font-semibold tracking-tight`}>
        Stack<span className="text-accent">lane</span>
      </span>
    </span>
  );
}
