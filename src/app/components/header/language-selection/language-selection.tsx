"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { languages } from "./languages";
import styles from "./language-selection.module.scss";

//TODO: Refactoring:
//TODO: 1. Move to custom hook
//TODO: 2. Reread the code

export default function LanguageSelection() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("en");

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const setLanguage = async (lang: string) => {
    await fetch("/api/locale", {
      method: "POST",
      body: JSON.stringify({ locale: lang }),
    });

    setCurrent(lang);
    setOpen(false);

    router.refresh();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLabel =
    languages.find((l) => l.code === current)?.label ?? "Language";

  return (
    <div className={styles["language-selection-container"]} ref={dropdownRef}>
      <button
        className={styles["language-selection-button"]}
        onClick={() => setOpen((v) => !v)}
      >
        {currentLabel}
      </button>

      <div className={`${styles.dropdown} ${open ? styles.open : ""}`}>
        {languages.map((lang) => (
          <div
            key={lang.code}
            className={`${styles.item} ${
              current === lang.code ? styles.active : ""
            }`}
            onClick={() => setLanguage(lang.code)}
          >
            {lang.label}
          </div>
        ))}
      </div>
    </div>
  );
}
