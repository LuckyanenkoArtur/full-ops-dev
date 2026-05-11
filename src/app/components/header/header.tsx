import { useTranslations } from "next-intl";

import ThemeToggle from "@components/header/theme-toggle/theme-toggle";
import LanguageSelection from "@/app/components/header/language-selection/language-selection";
import Logo from "@components/header/logo/logo";
import Navigation from "./navigation/navigatation";

import styles from "./header.module.scss";

const Header = () => {
  const t = useTranslations("HomePage");
  return (
    <div className={styles["header-container"]}>
      <Logo />
      <Navigation />
      <div className={styles["cusomization-site-container"]}>
        <ThemeToggle />
        <LanguageSelection />
      </div>
    </div>
  );
};

export default Header;
