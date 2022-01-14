import s from "./projects.module.scss";
import { FunctionComponent } from "react";

type Props = {};

export const ProjectsSection: FunctionComponent<Props> = ({ children }) => {
  return <div className={s.projects}></div>;
};
