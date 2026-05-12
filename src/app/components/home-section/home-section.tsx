"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";

import styles from "./home-section.module.scss";

import { BoostyIcon } from "./icons/boosty";
import { BastyonIcon } from "./icons/bastyon";
import { GitHubIcon } from "./icons/github";
import { LinkedInIcon } from "./icons/linkedin";
import { TelegramIcon } from "./icons/telegram";
import { WhatsAppIcon } from "./icons/whatsapp";
import { MaxIcon } from "./icons/max";
import { ScrollerIcon } from "./icons/scroller";

const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_TIME = 1500;

const HomeSection = () => {
  const t = useTranslations("home-section");

  const positions = useMemo(
    () => [
      t("positions.frontend"),
      t("positions.backend"),
      t("positions.devops"),
      t("positions.uiux"),
      t("positions.sysadmin"),
      t("positions.sysarch"),
      t("positions.dbarch"),
    ],
    [t],
  );

  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = positions[currentIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.substring(0, text.length + 1));

          if (text === currentWord) {
            setTimeout(() => {
              setIsDeleting(true);
            }, PAUSE_TIME);
          }
        } else {
          setText(currentWord.substring(0, text.length - 1));

          if (text === "") {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % positions.length);
          }
        }
      },
      isDeleting ? DELETING_SPEED : TYPING_SPEED,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentIndex, positions]);

  return (
    <section className={styles["home-section-container"]}>
      <div className={styles["home-section-container-flex-wrapper"]}>
        <div className={styles["content-side"]}>
          <div className={styles["greetings-text"]}>{t("greetings-text")}</div>

          <div className={styles["title"]}>
            {t.rich("title", {
              span: (chunks) => (
                <span className={styles["highlight"]}>{chunks}</span>
              ),
            })}
          </div>

          <div className={styles["position-text"]}>
            {"{\u00A0"}

            <span className={styles["typing-text"]}>{text}</span>
            <span className={styles["cursor"]}>|</span>

            {"\u00A0}"}
          </div>

          <div className={styles["paragraph-text"]}>{t("paragraph-text")}</div>

          <div className={styles["social-button-container"]}>
            <button className={styles["about-button"]}>
              {t("button.text")}
            </button>

            <div className={styles["social-icons"]}>
              <MaxIcon />
              <WhatsAppIcon />
              <TelegramIcon />
              <LinkedInIcon />
              <BoostyIcon />
              <BastyonIcon />
              <GitHubIcon />
            </div>
          </div>
        </div>

        <div className={styles["hero-side"]}>
          <div className={styles["hero-background"]}>
            <img src={"/assets/images/hero-me-1.png"} alt="hero-image" />
          </div>
        </div>
      </div>

      <div className={styles["home-section-container-scroller-container"]}>
        <ScrollerIcon />
      </div>
    </section>
  );
};

export default HomeSection;
