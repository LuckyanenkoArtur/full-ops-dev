import { useTranslations } from "next-intl";
import styles from "./home-section.module.scss";

// TODO: add th image and add the stylign better

const HomeSection = () => {
  const t = useTranslations("home-section");

  return (
    <section className={styles["home-section-container"]}>
      {/* CONTENT */}
      <div>
        <div className={styles["greetings-text"]}>{t("greetings-text")}</div>

        <div className={styles["title"]}>
          {t.rich("title", {
            span: (chunks) => (
              <span className={styles["highlight"]}>{chunks}</span>
            ),
          })}
        </div>

        <div className={styles["position-text"]}>{t("position-text")}</div>

        <div className={styles["paragraph-text"]}>{t("paragraph-text")}</div>

        <button className={styles["about-button"]}>{t("button.text")}</button>
      </div>
      {/* IMAGE */}
      <div></div>
    </section>
  );
};

export default HomeSection;
