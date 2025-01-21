"use client";
import {
  useGetFooterTextQuery,
  useGetMyContactQuery,
  useGetPublicOfferQuery,
  useGetPublicTextFootQuery,
} from "@/redux/api/data";
import scss from "./PublicFooter.module.scss"
const PublicFooter = () => {
  const { data } = useGetPublicOfferQuery();
  console.log(data);
  
  const { data: contact } = useGetMyContactQuery();
  console.log(contact);
  const {data:title} =   useGetPublicTextFootQuery()

  return (
    <section className={scss.PublicFooter}>
      <div className="container">
        <div className={scss.content}>
          {title?.map((text,idx)=>(

          <h1 key={idx}  >{text.main}</h1>
          ))}
          <div className={scss.text}>
            {data?.map((el, item) => (
              <div key={item} className={scss.tex}>
                <h3>{el.title}</h3>
                <p>{el.text}</p>
              </div>
            ))}
          </div>

          <div className={scss.data}>
            {contact?.map((el, item) => (
              <div key={item} className={scss.title}>
                <h4>{el.title}</h4>
                <h4>{el.name}</h4>
                <h4>{el.email}</h4>
                <h4>{el.my_phone}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicFooter;
