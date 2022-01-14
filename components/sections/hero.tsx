import s from "./hero.module.scss";
import { FunctionComponent } from "react";

type Props = {};

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
