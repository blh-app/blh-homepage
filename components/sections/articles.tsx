import s from "./articles.module.scss";
import { FunctionComponent } from "react";

type Props = {};

export const ArticlessSection: FunctionComponent<Props> = ({ children }) => {
  return <div className={s.articles}></div>;
};
