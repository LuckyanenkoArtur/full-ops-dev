import { useTranslations } from "next-intl";

import ThemeToggle from "@components/theme-toggle/theme-toggle";
import LanguageToggle from "@components/language-toggle/language-toggle";

import styles from "./page.module.scss";

const Header = () => {
  const t = useTranslations("HomePage");
  return (
    <div>
      <ThemeToggle />
      <LanguageToggle />
    </div>
  );
};

export default Header;
