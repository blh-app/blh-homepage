import type { NextPage } from "next";
import styles from "./index.module.scss";
import { DefaultLayout } from "../components/layouts/default-layout";
import { ProjectsSection } from "../components/sections/projects";
import { HeroSection } from "../components/sections/hero";

export const Privacy: NextPage = () => {
  return (
    <DefaultLayout>
      <HeroSection>
        40<span>4</span>
      </HeroSection>
      <p style={{ textAlign: "center" }}>Sorry! Page not found.</p>
    </DefaultLayout>
  );
};

export default Privacy;
