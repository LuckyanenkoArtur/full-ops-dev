"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./navigation.module.scss";
import { items, NavigationItem } from "./items";

// TODO: We need here refactoring
// 1. Move logic into sepearat custom hook
// 2. Reread code and make code cleare

const Navigation = () => {
  const [active, setActive] = useState<NavigationItem>("HOME");
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const refs = useRef<Record<string, HTMLLIElement | null>>({});

  const setItemRef = (item: NavigationItem) => (el: HTMLLIElement | null) => {
    refs.current[item] = el;
  };

  const updateIndicator = (item: NavigationItem) => {
    const el = refs.current[item];
    if (!el) return;

    setIndicator({
      left: el.offsetLeft,
      width: el.offsetWidth,
    });
  };

  const handleClick = (item: NavigationItem) => {
    setActive(item);
    updateIndicator(item);
  };

  useEffect(() => {
    updateIndicator(active);
  }, []);

  return (
    <ul className={styles["navigation-list"]}>
      {items.map((item) => (
        <li
          key={item}
          ref={setItemRef(item)}
          className={`${styles["navigation-item"]} ${
            active === item ? styles.active : ""
          }`}
          onClick={() => handleClick(item)}
        >
          {item}
        </li>
      ))}

      <span
        className={styles.indicator}
        style={{
          transform: `translateX(${indicator.left}px)`,
          width: indicator.width,
        }}
      />
    </ul>
  );
};

export default Navigation;
