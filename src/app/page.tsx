import { useTranslations } from "next-intl";

import Header from "@components/header/header";

import styles from "./page.module.scss";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main>
      <Header />
      <section
        style={{
          width: "100vw",
          height: "100vh",
          background: "lightblue",
        }}
      >
        <h1>{t("title")}</h1>;
      </section>

      <section
        style={{
          width: "100vw",
          height: "100vh",
          background: "lightgreen",
        }}
      >
        <h1>{t("title")}</h1>;
      </section>
    </main>
  );
}
