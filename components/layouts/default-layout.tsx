import s from "./default-layout.module.scss";
import Header from "../base/header";
import Footer from "../base/footer";
import { FunctionComponent } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

type Props = { heroAnimation?: boolean };
const Pixi = dynamic(() => import("../pixi/pixi"), { ssr: false });

export const DefaultLayout: FunctionComponent<Props> = ({
  children,
  heroAnimation = false,
}) => {
  return (
    <div className={s.layout}>
      <Head>
        <title>BLH </title>
        <meta charSet="utf-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Header></Header>
      <div className={s.body}>{children}</div>
      <Footer></Footer>
      <Pixi heroAnimation={heroAnimation}></Pixi>

      <noscript>
        <img src="https://shynet.blh.app/ingress/f1d54a94-4650-4998-b86f-180bf257727d/pixel.gif" />
      </noscript>
      <script
        defer
        src="https://shynet.blh.app/ingress/f1d54a94-4650-4998-b86f-180bf257727d/script.js"
      ></script>
    </div>
  );
};
