"use client";
import Image from "next/image";
import scss from "./heroSection.module.scss";
import foto from "@/assets/img/heroMainImg.png";
import { useRouter } from "next/navigation";
import { useGetHeroDataQuery } from "@/redux/api/data";
import { motion } from "framer-motion";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useEffect } from "react";

const HeroSection = () => {
  const route = useRouter();
  const { data } = useGetHeroDataQuery();

  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    console.log("Current language in Header:", language);
  }, [language]);
  const translations = {
    en: {
      record: "Book a consultation",
      exp: "experience",
      customer: "customers",
      followers: "followers",
      year: "year",
    },
    ru: {
      record: "Записаться на консультацию",
      exp: "опыта",
      customer: "клиентов",
      followers: "подписчиков",
      year: "лет",
    },
    ky: {
      record: "Консультацияга катталуу",
      exp: "тажрыйба",
      customer: "кардарлар",
      followers: "жазылуучулар",
      year: "жыл",
    },
  };

  const translate = (key: keyof (typeof translations)["en"]) => {
    return (
      translations[language as keyof typeof translations]?.[key] ??
      translations.en[key]
    );
  };
  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <section id={scss.hero}>
      <div className="container">
        {data?.map((el, idx) => (
          <div key={idx} className={scss.content}>
            <motion.div
              className={scss.title}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1>Amanda</h1>
              <div className={scss.text}>
                <h2>{el.profession}</h2>
                <p>{splitText(el.main_text)}</p>
              </div>

              <motion.div
                className={scss.btn}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <button onClick={() => route.push("/consultation")}>
                  {translate("record")}
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              className={scss.right_block}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Image
                src={el.main_photo}
                alt="foto"
                width={7000}
                height={7000}
              />
              <div className={scss.counter}>
                <div className={scss.count}>
                  <span>{`${el.publication} ${translate("year")}`}</span>
                  <h6>{translate("exp")}</h6>
                </div>
                <div className={scss.count}>
                  <span>{el.subscription}+</span>
                  <h6>{translate("customer")}</h6>
                </div>
                <div className={scss.count}>
                  <span>{`${el.follower}`}</span>

                  <h6>{translate("followers")}</h6>
                </div>
              </div>
              <motion.div
                className={scss.btnn}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <button onClick={() => route.push("/consultation")}>
                  {translate("record")}
                </button>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default HeroSection;
