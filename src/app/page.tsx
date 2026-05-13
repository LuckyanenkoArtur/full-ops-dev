import Header from "@components/header/header";
import HomeSection from "@components/home-section/home-section";

import styles from "./page.module.scss";
import AboutSection from "./components/about-section/about-section";

export default function Home() {
  return (
    <main>
      <Header />
      <HomeSection />
      <AboutSection />
    </main>
  );
}
