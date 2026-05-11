"use client";

import { useState } from "react";
import styles from "./navigation.module.scss";
import { items, NavigationItem } from "./items";

const Navigation = () => {
  const [active, setActive] = useState<NavigationItem>("HOME");

  return (
    <ul className={styles["navigation-list"]}>
      {items.map((item) => (
        <li
          key={item}
          className={`${styles["navigation-item"]} ${
            active === item ? styles.active : ""
          }`}
          onClick={() => setActive(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
