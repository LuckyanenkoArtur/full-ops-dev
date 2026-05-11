"use client";

import { useEffect, useState } from "react";
import styles from "./theme-toggle.module.scss";
import { SunIcon } from "./sun-icon";
import { MoonIcon } from "./moon-icon";

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
      <div className={styles.sun}>
        <SunIcon />
      </div>

      <div
        className={`${styles.circle} ${
          theme === "dark" ? styles.dark : styles.light
        }`}
      />

      <div className={styles.moon}>
        <MoonIcon />
      </div>
    </button>
  );
}
