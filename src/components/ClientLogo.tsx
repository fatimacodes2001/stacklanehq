import type { ClientLogo as ClientLogoType } from "@/lib/content";

type Props = {
  client: ClientLogoType;
  size?: "sm" | "md" | "lg";
  showName?: boolean;
};

const heights = {
  sm: "h-7",
  md: "h-9",
  lg: "h-11",
};

const pillPadding = {
  sm: "px-2.5 py-1.5",
  md: "px-3 py-2",
  lg: "px-4 py-2.5",
};

export function ClientLogo({ client, size = "md", showName = false }: Props) {
  const imgClass = client.lightBg
    ? `${heights[size]} w-auto max-w-[220px] object-contain`
    : `${heights[size]} w-auto max-w-[220px] object-contain opacity-80 transition duration-300 hover:opacity-100`;

  return (
    <div className="flex shrink-0 items-center gap-3">
      {client.lightBg ? (
        <div
          className={`flex items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-white/20 ${pillPadding[size]}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={client.logo}
            alt={`${client.name} logo`}
            className={imgClass}
          />
        </div>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={client.logo}
          alt={`${client.name} logo`}
          className={imgClass}
        />
      )}
      {showName && (
        <span className="whitespace-nowrap text-sm font-medium text-muted/80">
          {client.name}
        </span>
      )}
    </div>
  );
}
