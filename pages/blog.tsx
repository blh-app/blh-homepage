import type { NextPage } from "next";
import styles from "./index.module.scss";
import { DefaultLayout } from "../components/layouts/default-layout";
import { ProjectsSection } from "../components/sections/projects";
import { HeroSection } from "../components/sections/hero";
import { useEffect } from "react";
import { getPageFiles } from "next/dist/server/get-page-files";
import { getBlogPosts } from "./api/blog";
import { Entry } from "contentful";

type Article = {
  title: string;
  description: string;
};

type props = {
  blogPosts: Entry<Article>[];
};

export const Blog: NextPage<props> = ({ blogPosts }) => {
  return (
    <DefaultLayout>
      <h1 data-aos="fade-left">
        Art<span>1</span>cles
      </h1>

      <ul>
        {blogPosts.map((post, index) => (
          <li key={index}>{post.fields.title}</li>
        ))}
      </ul>
    </DefaultLayout>
  );
};

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const blogPosts = await getBlogPosts();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      blogPosts,
    },
  };
}

export default Blog;
