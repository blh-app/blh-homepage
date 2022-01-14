import s from "./default-layout.module.scss";
import Header from "../base/header";
import Footer from "../base/footer";
import { FunctionComponent } from "react";
import dynamic from "next/dynamic";

type Props = {};

const Pixi = dynamic(() => import("../pixi/pixi"), { ssr: false });

export const DefaultLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className={s.layout}>
      <Header></Header>
      <div className={s.body}>{children}</div>
      <Footer></Footer>
      <Pixi></Pixi>
    </div>
  );
};
