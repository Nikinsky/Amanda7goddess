"use client";
import { useGetFooterTextQuery } from "@/redux/api/data";
import scss from "./PolicyFooter.module.scss";

const PolicyFooter = () => {
  const { data } = useGetFooterTextQuery();
  console.log(data);

  return (
    <section className={scss.PolicyFooter}>
      <div className="container">
        <div className={scss.content}>
          {data?.map((el, item) => (
            <div key={item} className={scss.tex}>
              <h3>{el.title}</h3>
              <p>{el.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolicyFooter;
