export interface Language {
  code: "en" | "ru";
  label: string;
}

export const languages: Language[] = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];
