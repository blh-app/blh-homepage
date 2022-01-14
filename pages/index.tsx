import type { NextPage } from "next";
import styles from "./index.module.scss";
import { DefaultLayout } from "../components/layouts/default-layout";
import { ProjectsSection } from "../components/sections/projects";
import { HeroSection } from "../components/sections/hero";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <HeroSection>
        W<span>3</span>lcome
      </HeroSection>
      <h2 data-aos="fade-left">
        Pr<span>0</span>jects
      </h2>
      <ProjectsSection></ProjectsSection>
      <h2 data-aos="fade-left">
        Art<span>1</span>cles
      </h2>
    </DefaultLayout>
  );
};

export default Home;
