"use client";

import { useTranslations } from "next-intl";

import styles from "./about-section.module.scss";

const AboutSection = () => {
  const t = useTranslations("about-section");

  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <section className={styles["about-section"]}>
      <div className={styles["hero-side"]}>
        <div className={styles["hero-container"]}>
          <div className={styles["hero-container-background"]} />

          <img src="/assets/images/hero-me-2.png" alt="hero-image" />
        </div>

        <div className={styles["statistics-container"]}>
          <div className={styles["card"]}>
            <div className={styles["counter"]}>10+</div>
            <div className={styles["text"]}>Happy Clients</div>
          </div>

          <div className={styles["card"]}>
            <div className={styles["counter"]}>5+</div>
            <div className={styles["text"]}>Years of Expertise</div>
          </div>

          <div className={styles["card"]}>
            <div className={styles["counter"]}>10+</div>
            <div className={styles["text"]}>Project Completed</div>
          </div>
        </div>
      </div>

      <div className={styles["content-side"]}>
        <div className={styles["title"]}>{t("title")}</div>

        {paragraphs.map((text, index) => (
          <div className={styles["paragraph-text"]} key={index}>
            {text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
