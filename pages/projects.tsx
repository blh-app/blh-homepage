import type { NextPage } from "next";
import styles from "./index.module.scss";
import { DefaultLayout } from "../components/layouts/default-layout";
import { ProjectsSection } from "../components/sections/projects";
import { HeroSection } from "../components/sections/hero";

export const Projects: NextPage = () => {
  return (
    <DefaultLayout>
      <h1 data-aos="fade-left">
        Pr<span>0</span>jects
      </h1>
    </DefaultLayout>
  );
};

export default Projects;
