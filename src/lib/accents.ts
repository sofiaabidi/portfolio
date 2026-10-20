// Accent color helpers used across the portfolio.
// Each accent maps to a brutal color token.

export type Accent = "orange" | "coral" | "yellow" | "mint" | "lilac";

export const accentBg: Record<Accent, string> = {
  orange: "bg-brutal-orange",
  coral: "bg-brutal-coral",
  yellow: "bg-brutal-yellow",
  mint: "bg-brutal-mint",
  lilac: "bg-brutal-lilac",
};

export const accentBgLight: Record<Accent, string> = {
  orange: "bg-brutal-yellow-light",
  coral: "bg-brutal-yellow-light",
  yellow: "bg-brutal-yellow-light",
  mint: "bg-brutal-mint",
  lilac: "bg-brutal-lilac",
};

export const accentBorderLeft: Record<Accent, string> = {
  orange: "border-l-brutal-orange",
  coral: "border-l-brutal-coral",
  yellow: "border-l-brutal-yellow",
  mint: "border-l-brutal-mint",
  lilac: "border-l-brutal-lilac",
};

export const accentText: Record<Accent, string> = {
  orange: "text-brutal-orange",
  coral: "text-brutal-coral",
  yellow: "text-brutal-yellow",
  mint: "text-emerald-700",
  lilac: "text-violet-700",
};

export const accentTag: Record<Accent, string> = {
  orange: "bg-brutal-orange text-brutal-black",
  coral: "bg-brutal-coral text-white",
  yellow: "bg-brutal-yellow text-brutal-black",
  mint: "bg-brutal-mint text-brutal-black",
  lilac: "bg-brutal-lilac text-brutal-black",
};
