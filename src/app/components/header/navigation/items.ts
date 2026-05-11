export const items = [
  "HOME",
  "ABOUT",
  "SERVICES",
  "EXPERTISE",
  "CAREER",
  "CONTACT",
] as const;

export type NavigationItem = (typeof items)[number];
