import Header from "@components/header/header";
import HomeSection from "@components/home-section/home-section";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <Header />
      <HomeSection />
      <section
        className={styles["about-section"]}
        style={{
          height: "100vh",
          width: "100vw",
        }}
      ></section>
    </main>
  );
}
