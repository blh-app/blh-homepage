import s from "./articles.module.scss";
import { FunctionComponent } from "react";

type Props = {};

export const ProjectCard: FunctionComponent<Props> = ({ children }) => {
  return <div className={s.project}></div>;
};
