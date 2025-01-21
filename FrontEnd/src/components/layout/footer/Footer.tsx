"use client";
import { FC, useEffect } from "react";
import scss from "./footer.module.scss";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoLogoWhatsapp } from "react-icons/io5";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useGetFooterTextQuery } from "@/redux/api/data";

const Footer: FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    console.log("Current language in Header:", language);
  }, [language]);

  const translations = {
    en: {
      email: "Email",
      public: "Public Offer",
      security: "Security",
      rules:
        "By using any materials from this site, a reference to the source is required! All rights reserved.",
    },
    ru: {
      email: "Почта",
      public: "Публичная оферта",
      security: "Безопасность",
      rules: `При использовании любых материалов с данного сайта, ссылка на источник обязательна! Все права защищены`,
    },
    ky: {
      email: "Электрондук почта",
      public: "Жалпы сунуш",
      security: "Коопсуздук",
      rules:
        "Бул сайттан материалдарды колдонууда, буга тиешелүү булакка шилтеме берүү талап кылынат! Бардык укуктар корголгон.",
    },
  };

  const translate = (key: keyof (typeof translations)["en"]) => {
    return (
      translations[language as keyof typeof translations]?.[key] ??
      translations.en[key]
    );
  };
  const { data } = useGetFooterTextQuery();
  return (
    <>
      {data ? (
        <>
          <footer className={scss.Footer}>
            <div className="container">
              <div className={scss.content}>
                <div
                  data-aos="fade-right"
                  data-aos-delay="300"
                  className={scss.text}
                >
                  <h2>{translate("email")}</h2>
                  <Link
                    className={scss.email}
                    href="mailto:freilesveta@gmail.com?subject=Вопрос по записи&body=Здравствуйте, хотел бы узнать..."
                  >
                    freileesveta@gmail.com
                  </Link>
                  <Link href="/footerpublic/publicfoo">
                    {translate("public")}
                  </Link>
                  <Link href="/footerpublic/policyfoo">
                    {translate("security")}
                  </Link>
                </div>

                <div
                  data-aos="fade-left"
                  data-aos-delay="300"
                  className={scss.icons}
                >
                  <div
                    data-aos="flip-up"
                    data-aos-delay="800"
                    className={scss.icon}
                  >
                    <Link
                      href="https://www.instagram.com/amanda.freile?igsh=a21wcnZtZTdicXJr"
                      target="_blank"
                    >
                      <IoLogoInstagram size={24} />
                    </Link>
                    <Link href="https://t.me/freilesveta" target="_blank">
                      <FaTelegramPlane />
                    </Link>
                    <Link
                      href="https://wa.me/996779779898?text=Здравствуйте, я хочу узнать  подробности "
                      target="_blank"
                    >
                      <IoLogoWhatsapp />
                    </Link>
                  </div>
                  <p>{translate("rules")}</p>
                </div>
              </div>
            </div>
          </footer>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Footer;
