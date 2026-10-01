import type { ReactNode } from "react";

export function SlideLayout({
  children,
  index,
  total,
  label,
  tone = "paper",
}: {
  children: ReactNode;
  index?: number;
  total?: number;
  label?: string;
  tone?: "paper" | "blue" | "deep" | "soft" | "green" | "forest";
}) {
  const bg =
    tone === "deep" || tone === "forest"
      ? "bg-[#08331D]"
      : tone === "blue" || tone === "green"
      ? "bg-[#0D5C3A]"
      : tone === "soft"
      ? "bg-[#EAF7ED]"
      : "bg-[#FAF7EE]";

  const fg =
    tone === "deep" || tone === "blue" || tone === "green" || tone === "forest"
      ? "text-white"
      : "text-[#0A1128]";

  return (
    <div className={`slide-content ${bg} ${fg}`}>
      <div
        className={`absolute inset-0 ${
          tone === "deep" || tone === "forest"
            ? "cowry-circles-green opacity-20"
            : tone === "blue" || tone === "green"
            ? "cowry-circles-green opacity-15"
            : "grid-paper"
        }`}
      />
      <div className="relative flex h-full flex-col justify-between px-[80px] pt-[36px] pb-[30px]">
        {/* Header */}
        <header className="flex shrink-0 items-center justify-between pb-2">
          <div className="flex items-center gap-4">
            <span
              className={`slide-kicker font-bold tracking-wider brut-flat border-[3.5px] px-5 py-1.5 ${
                tone === "deep" || tone === "blue" || tone === "green" || tone === "forest"
                  ? "bg-white text-[#0A1128] border-white shadow-[4px_4px_0_0_#000]"
                  : "bg-[#0D5C3A] text-white border-[#0A1128] shadow-[4px_4px_0_0_#0A1128]"
              }`}
            >
              {label ?? "Nigeria Independence Keynote"}
            </span>
          </div>
          {typeof index === "number" && typeof total === "number" ? (
            <span
              className={`slide-page brut-flat border-[3.5px] px-5 py-1.5 font-bold ${
                tone === "deep" || tone === "blue" || tone === "green" || tone === "forest"
                  ? "bg-white text-[#0A1128] border-white shadow-[4px_4px_0_0_#000]"
                  : "bg-white text-[#0A1128] border-[#0A1128] shadow-[4px_4px_0_0_#0A1128]"
              }`}
            >
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          ) : null}
        </header>

        {/* Content Body */}
        <main className="flex min-h-0 flex-1 flex-col justify-between py-2 overflow-hidden">
          {children}
        </main>

        {/* Footer */}
        <footer className="flex shrink-0 items-center justify-between border-t-[3px] border-[#0A1128]/20 pt-3">
          <span
            className="slide-footer tracking-widest uppercase opacity-80 font-bold"
            style={{ fontSize: 16 }}
          >
            Sheriffdeen Saula · The Long Game
          </span>
          <span
            className="slide-footer tracking-widest uppercase opacity-80 font-bold"
            style={{ fontSize: 16 }}
          >
            Nigeria Independence Special · Youth Leadership Keynote
          </span>
        </footer>
      </div>
    </div>
  );
}

export function Card({
  children,
  className = "",
  tone = "card",
}: {
  children: ReactNode;
  className?: string;
  tone?: "card" | "blue" | "deep" | "soft" | "paper" | "green" | "mint" | "forest";
}) {
  const tones = {
    card: "bg-white text-[#0A1128]",
    paper: "bg-[#FAF7EE] text-[#0A1128]",
    soft: "bg-[#EAF7ED] text-[#0A1128]",
    mint: "bg-[#82C987] text-[#0A1128]",
    blue: "bg-[#0D5C3A] text-white",
    green: "bg-[#0D5C3A] text-white",
    forest: "bg-[#0D5C3A] text-white",
    deep: "bg-[#08331D] text-white",
  } as const;
  return <div className={`brut ${tones[tone]} ${className}`}>{children}</div>;
}

export function Kicker({
  children,
  tone = "green",
}: {
  children: ReactNode;
  tone?: "blue" | "green" | "white" | "paper" | "mint";
}) {
  const bg =
    tone === "white"
      ? "bg-white text-[#0A1128] border-[#0A1128]"
      : tone === "paper"
      ? "bg-[#FAF7EE] text-[#0A1128] border-[#0A1128]"
      : tone === "mint"
      ? "bg-[#82C987] text-[#0A1128] border-[#0A1128]"
      : "bg-[#0D5C3A] text-white border-[#0A1128]";

  return (
    <div className="flex">
      <span className={`slide-kicker brut-flat border-[3px] px-4 py-1.5 ${bg}`}>
        {children}
      </span>
    </div>
  );
}

export function Bullet({
  children,
  tone = "green",
}: {
  children: ReactNode;
  tone?: "blue" | "green" | "white" | "dark" | "mint";
}) {
  const dotColor =
    tone === "white"
      ? "bg-white border-white"
      : tone === "dark"
      ? "bg-[#0A1128] border-[#0A1128]"
      : tone === "mint"
      ? "bg-[#82C987] border-[#0A1128]"
      : "bg-[#0D5C3A] border-[#0A1128]";

  return (
    <li className="flex items-start gap-4">
      <span className={`mt-[8px] block h-[16px] w-[16px] shrink-0 border-[3px] ${dotColor}`} />
      <span className="slide-body font-medium leading-snug">{children}</span>
    </li>
  );
}

export function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`slide-badge brut-flat border-[3px] border-[#0A1128] bg-[#EAF7ED] text-[#0D5C3A] px-4 py-1.5 uppercase font-bold text-xs ${className}`}
    >
      {children}
    </span>
  );
}
