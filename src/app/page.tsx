import ThemeToggle from "./components/theme-toggle/theme-toggle";
import { useTranslations } from "next-intl";
import styles from "./page.module.scss";
import LanguageToggle from "./components/language-toggle/language-toggle";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main>
      <ThemeToggle />
      <LanguageToggle />
      <h1>{t("title")}</h1>;
    </main>
  );
}
