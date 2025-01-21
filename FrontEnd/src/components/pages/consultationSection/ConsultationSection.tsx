"use client";
import React, { useEffect, useState } from "react";
import scss from "./consultationSection.module.scss";
import ModalConsul from "@/ui/modalConsul/ModalConsul";
import { FcMoneyTransfer } from "react-icons/fc";
import { useGetConsultationDataQuery } from "@/redux/api/data";
import { useLanguageStore } from "@/store/useLanguageStore";

const ConsultationSection = () => {
  const { data } = useGetConsultationDataQuery();
  console.log("🚀 ~ ConsultationSection ~ data:", data);
  
  const [isClosing, setIsClosing] = useState(false);
  const [modalType, setModalType] = useState<"form" | "success" | null>(null);
  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    console.log("Current language in Header:", language);
  }, [language]);

  const translations = {
    en: {
      record: "Book a consultation",
    },
    ru: {
      record: "Записаться на консультацию",
    },
    ky: {
      record: "Консультацияга катталуу",
    },
  };

  const translate = (key: keyof (typeof translations)["en"]) => {
    return (
      translations[language as keyof typeof translations]?.[key] ??
      translations.en[key]
    );
  };

  const handleOpenModal = () => {
    setModalType("form");
  };

  const handleCloseModal = (type?: "success" | null) => {
    setIsClosing(true);
    setTimeout(() => {
      setModalType(type || null);
      setIsClosing(false);
    }, 300);
  };

  return (
    <>
      <section id={scss.consul}>
        <div className="container">
          {data?.map((el, idx) => (
            <div key={idx} className={scss.consul}>
              <div className={scss.consul_line}>
                <div className={scss.text}>
                  <h1>{el.title}</h1>
                </div>
                <div className={scss.consul_text}>
                  <p>{el.description}</p>
                  {el.con_keys.map((title, idx) => (
                    <div key={idx}>
                      <ul>
                        <li>{title.keys}</li>
                      </ul>
                    </div>
                  ))}

                  <div className={scss.textBottom}>
                    <h4>{el.duration}</h4>
                    <h4>{el.format}</h4>
                    <h4>{el.feedback}</h4>
                  </div>

                  <div className={scss.consul_btn}>
                    <button className={scss.btn1}>
                      <FcMoneyTransfer />
                      {el.price}
                    </button>
                    <button className={scss.btn2} onClick={handleOpenModal}>
                      {translate("record")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {modalType && (
        <div className={`${scss.modalWrapper} ${isClosing ? scss.close : ""}`}>
          <ModalConsul type={modalType} onClose={handleCloseModal} />
        </div>
      )}
    </>
  );
};

export default ConsultationSection;
