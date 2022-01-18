import s from "./hero.module.scss";
import { FunctionComponent, useEffect } from "react";
import { FixedTop } from "../pixi/fixed-top";
import dynamic from "next/dynamic";

type Props = {};
const Pixi = dynamic(() => import("../pixi/pixi"), { ssr: false });

export const HeroSection: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className={s.hero}>
      <h1
        data-aos="flip-down"
        data-aos-easing="ease-in-out"
        data-aos-duration="500"
      >
        {children}
      </h1>
    </div>
  );
};
