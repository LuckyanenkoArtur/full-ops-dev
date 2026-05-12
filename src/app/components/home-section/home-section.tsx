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

const HomeSection = () => {
  const t = useTranslations("home-section");

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

          <div className={styles["position-text"]}>{t("position-text")}</div>

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
