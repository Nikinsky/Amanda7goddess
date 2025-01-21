"use client";
import s from "./aboutSection.module.scss";
import { useGetAboutMeBackQuery } from "@/redux/api/data";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useRouter } from "next/navigation";

const AboutSection = () => {
  const { data } = useGetAboutMeBackQuery();
  const language = useLanguageStore((state) => state.language);
  const router = useRouter();

  const translations = {
    en: {
      record: "Book a consultation",
      little: "A little",
    },
    ru: {
      record: "Записаться на консультацию",
      little: "Немного",
    },
    ky: {
      record: "Консультацияга катталуу",
      little: "Бир аз",
    },
  };

  const translate = (key: keyof (typeof translations)["en"]) => {
    return (
      translations[language as keyof typeof translations]?.[key] ??
      translations.en[key]
    );
  };

  const firstItem = Array.isArray(data) && data.length > 0 ? data[0] : null;

  return (
    <>
      {firstItem ? (
        <section id={s.aboutMe}>
          <div id="about">
            <div className="container">
              <div className={s.aboutMe}>
                <h3 className={s.moblieTitle}>{firstItem?.profession}</h3>
                <h1 className={s.moblie}>
                  {translate("little")} {firstItem?.about_me}
                </h1>
                <div className={s.aboutMeImg}>
                  <img
                    className={s.img1}
                    src={firstItem?.photo}
                    alt="img"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  />
                  <img
                    className={s.img2}
                    src={firstItem?.back_round_img}
                    alt="img"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  />
                </div>
                <div className={s.aboutMeText}>
                  <h3 data-aos="fade-up" data-aos-delay="200">
                    {firstItem?.profession}
                  </h3>
                  <h1 data-aos="fade-right" data-aos-delay="400">
                    {firstItem?.about_me}
                  </h1>
                  <p data-aos="fade-in" data-aos-delay="600">
                    {firstItem?.bio}
                  </p>
                  <button
                    data-aos="flip-up"
                    data-aos-delay="800"
                    onClick={() => router.push("/consultation")}
                  >
                    {translate("record")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default AboutSection;
