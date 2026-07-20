// Single source of truth for the Work / Portfolio page — category tabs,
// project tabs, featured card, grid, and individual project detail views.

export const CATEGORIES = [
  "Video Production",
  "Complete Event Management",
  "Social Media Management and Marketing",
  "AI Videos",
  "Real Estate",
  "Commercial",
  "Podcast",
  "Food",
];

export function badgeClass(cat) {
  return (
    { "Brand Films": "b-brand", "Real Estate": "b-realestate", "Social Media": "b-social", Corporate: "b-corporate" }[
      cat
    ] || "b-social"
  );
}

export function dotColor(cat) {
  return (
    { "Brand Films": "#7c3aed", "Real Estate": "#2563eb", "Social Media": "#f97316", Corporate: "#059669" }[cat] ||
    "#f97316"
  );
}

export function thumb(id) {
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
}
