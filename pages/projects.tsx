import type { NextPage } from "next";
import styles from "./index.module.scss";
import { DefaultLayout } from "../components/layouts/default-layout";
import { ProjectsSection } from "../components/sections/projects";
import { HeroSection } from "../components/sections/hero";
import { getHandsOnProjects, getProjects } from "./api/project";

export const Projects: NextPage = () => {
  return (
    <DefaultLayout>
      <h1 data-aos="fade-left">
        Pr<span>0</span>jects
      </h1>

      <h2 data-aos="fade-left" style={{ paddingBottom: "0px" }}>
        H<span>4</span>nds on pr<span>0</span>jects
      </h2>
      <p>
        These are some projects where I was part of the team or builded a
        particularly module for it. <br></br> I do not take all the credits, but
        in the end you can (still) find some code written by me in it.
      </p>
    </DefaultLayout>
  );
};

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const projects = await getProjects();
  const handsOnProjects = await getHandsOnProjects();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      projects,
      handsOnProjects,
    },
  };
}

export default Projects;
