import { useTranslations } from "next-intl";

import Header from "@components/header/header";

import styles from "./page.module.scss";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main>
      <Header />
      <h1>{t("title")}</h1>;
    </main>
  );
}
