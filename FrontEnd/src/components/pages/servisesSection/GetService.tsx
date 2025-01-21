"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import scss from "./GetService.module.scss";
import { useGetServiceIdQuery } from "@/redux/api/data";
import { FcMoneyTransfer } from "react-icons/fc";
import Image from "next/image";
import foto from "@/assets/img/Amanda Foto.svg";
import Loader from "@/ui/loader/Loader";
import ModalConsul from "@/ui/modalConsul/ModalConsul";
import { useLanguageStore } from "@/store/useLanguageStore";

const GetService: React.FC = () => {
  const route = useRouter();
  const { id } = useParams();
  const { data } = useGetServiceIdQuery(Number(id));

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
      <div className={scss.getService}>
        <div className="container">
          <div className={scss.content}>
            {data ? (
              <>
                <section id={scss.consul}>
                  <div className="container">
                    <div className={scss.consul}>
                      <div className={scss.consul_line}>
                        <div className={scss.text}>
                          <h1>{data.name_services}</h1>
                        </div>
                        <div className={scss.consul_text}>
                          <p>{data.text1}</p>

                          <div className={scss.textUl}>
                            {data.services_keys.map((item, idx) => (
                              <ul key={idx}>
                                <li key={idx}> {item.keys}</li>
                              </ul>
                            ))}
                          </div>

                          <p>{data.text2}</p>
                          <p>{data.text3}</p>

                          <p>{data.text4}</p>
                        </div>

                        {data.photo.map((foto, idx) => (
                          <div key={idx} className={scss.foto_with_info}>
                            <div className={scss.img}>
                              <Image
                                className={scss.aboutSvg}
                                src={foto.img}
                                alt="photo"
                                width={500}
                                height={500}
                              />
                            </div>
                            <div className={scss.info}>
                              <div className={scss.info_line}>
                                <p>{foto.services_text}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                        <div className={scss.consul_btn}>
                          <button className={scss.btn1}>
                            <FcMoneyTransfer />
                            {data.price}
                          </button>
                          <button
                            className={scss.btn2}
                            onClick={handleOpenModal}
                          >
                            {translate("record")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            ) : (
              <>
                <Loader />
              </>
            )}
          </div>
        </div>
      </div>
      {modalType && (
        <div className={`${scss.modalWrapper} ${isClosing ? scss.close : ""}`}>
          <ModalConsul type={modalType} onClose={handleCloseModal} />
        </div>
      )}
    </>
  );
};

export default GetService;
