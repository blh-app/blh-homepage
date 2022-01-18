import s from "./articles.module.scss";
import { FunctionComponent } from "react";

type Props = {
  blogPosts: any[];
};

export const ArticlessSection: FunctionComponent<Props> = ({ blogPosts }) => {
  console.log("blogPosts", blogPosts);

  return (
    <div className={s.articles} data-aos="fade-left">
      {blogPosts.map((p, pi) => {
        return (
          <div key={pi} className={s.article}>
            <div
              className={s.articleHeader}
              style={{
                backgroundImage: `url(${p?.fields?.previewImage?.fields?.file?.url})`,
              }}
            ></div>
            <div className={s.articleBody}>
              <h3>{p?.fields?.title}</h3>
              <p className={s.description}>{p?.fields?.description}</p>
              <p className={s.date}>
                {new Date(p?.fields?.created).toDateString()}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
