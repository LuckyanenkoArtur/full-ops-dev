"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const languages = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
];

export default function LanguageToggle() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("en");

  const setLanguage = async (lang: string) => {
    await fetch("/api/locale", {
      method: "POST",
      body: JSON.stringify({ locale: lang }),
    });

    setCurrent(lang);
    setOpen(false);

    router.refresh();
  };

  const currentLabel =
    languages.find((l) => l.code === current)?.label ?? "Language";

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          padding: "8px 12px",
          border: "1px solid #ccc",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        🌐 {currentLabel} ▼
      </button>

      {/* Dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            marginTop: 6,
            border: "1px solid #ddd",
            borderRadius: 6,
            background: "white",
            minWidth: 160,
            zIndex: 1000,
          }}
        >
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              style={{
                padding: "8px 12px",
                cursor: "pointer",
                background: current === lang.code ? "#f0f0f0" : "transparent",
              }}
            >
              {lang.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
