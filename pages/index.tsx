import type { NextPage } from "next";
import styles from "./index.module.scss";
import { DefaultLayout } from "../components/layouts/default-layout";
import { ProjectsSection } from "../components/sections/projects";
import { HeroSection } from "../components/sections/hero";
import { getBlogPosts } from "./api/blog";
import { getProjects } from "./api/project";
import { ArticlessSection } from "../components/sections/articles";

type Props = {
  blogPosts: any[];
  projects: any[];
};

const Home: NextPage<Props> = ({ projects, blogPosts }) => {
  return (
    <DefaultLayout>
      <HeroSection>
        W<span>3</span>lcome
      </HeroSection>
      <h2 data-aos="fade-left">
        Pr<span>0</span>jects
      </h2>
      <ProjectsSection projects={projects}></ProjectsSection>
      <h2 data-aos="fade-left">
        Art<span>1</span>cles
      </h2>
      <ArticlessSection blogPosts={blogPosts}></ArticlessSection>
    </DefaultLayout>
  );
};

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const blogPosts = await getBlogPosts({ limit: 5 });
  // By returning { props: { posts } }, the Blog component
  const projects = await getProjects({ limit: 5 });
  // will receive `posts` as a prop at build time
  return {
    props: {
      blogPosts,
      projects,
    },
  };
}

export default Home;
