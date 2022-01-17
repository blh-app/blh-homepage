import s from "./projects.module.scss";
import { FunctionComponent } from "react";

type Props = {
  projects: any[];
};

export const ProjectsSection: FunctionComponent<Props> = ({ projects }) => {
  console.log("projects", projects);
  return (
    <div className={s.projects}>
      {projects.map((p, pi) => {
        return (
          <div key={pi} className={s.project}>
            <div
              className={s.projectHeader}
              style={{
                backgroundImage: `url(${p?.fields?.previewImage?.fields?.file?.url})`,
              }}
            ></div>
            <div className={s.projectBody}>
              <h3>{p?.fields?.name}</h3>
              <p className={s.description}>{p?.fields?.description}</p>
              <p className={s.date}>
                {new Date(p?.fields?.created).toDateString()}
              </p>
              <div className={s.tags}>
                {p?.fields?.tags?.map((t: any, ti: number) => {
                  return <span key={ti}>{t}</span>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
