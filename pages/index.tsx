import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/index.module.scss";
import swiper from "swiper";
import Header from "../components/sections/header";
import Footer from "../components/sections/footer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />

      <Footer></Footer>
    </div>
  );
};

export default Home;
