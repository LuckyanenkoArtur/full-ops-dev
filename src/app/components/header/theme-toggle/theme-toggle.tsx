"use client";

import { useEffect, useState } from "react";
import styles from "./theme-toggle.module.scss";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button className={styles.toggle} onClick={toggleTheme}>
      <img
        src="/assets/icons/sun.svg"
        className={`${styles.icon} ${styles.sun}`}
        alt="light theme"
      />

      <div
        className={`${styles.circle} ${
          theme === "dark" ? styles.dark : styles.light
        }`}
      />

      <img
        src="/assets/icons/moon.svg"
        className={`${styles.icon} ${styles.moon}`}
        alt="dark theme"
      />
    </button>
  );
}
