import s from "./articles.module.scss";
import { FunctionComponent } from "react";

type Props = {};

export const ArticleCard: FunctionComponent<Props> = ({ children }) => {
  return <div className={s.article}></div>;
};
