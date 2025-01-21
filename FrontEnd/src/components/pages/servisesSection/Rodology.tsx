"use client";
import Image from "next/image";
import scss from "./Rodology.module.scss";
import RodImg from "@/assets/img/rodology.png";
import RodImg2 from "@/assets/img/rodology2.svg";
import { FcMoneyTransfer } from "react-icons/fc";
import { useGetServiceIdQuery } from "@/redux/api/data";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "@/ui/loader/Loader";
import ModalConsul from "@/ui/modalConsul/ModalConsul";
import { useLanguageStore } from "@/store/useLanguageStore";

const Rodology = () => {
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
      <div className={scss.Rodology}>
        <section id={scss.Rodology}>
          <div className="container">
            {data ? (
              <>
                <div className={scss.consul}>
                  <div className={scss.consul_line}>
                    <div className={scss.text}>
                      <h1>{data?.name_services}</h1>
                      {data?.photo.map((el, index) => (
                        <div key={index}>
                          <div className={scss.main}>
                            <Image
                              width={595}
                              height={405}
                              src={data.main_img}
                              alt=""
                            />
                            <div className={scss.description}>
                              <p>{data?.text1}</p>
                              <p>{data?.text2}</p>
                            </div>
                          </div>
                          <p
                            style={{ padding: "50px 0" }}
                            className={scss.desc}
                          >
                            {data?.text3}
                          </p>
                          <div className={scss.main}>
                            <Image
                              width={472}
                              height={629}
                              src={el.img}
                              alt=""
                            />
                            <div className={scss.description}>
                              <p>{el.services_text}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className={scss.consul_btn}>
                      <button className={scss.btn1}>
                        <FcMoneyTransfer />
                        {data?.price}
                      </button>
                      <button className={scss.btn2} onClick={handleOpenModal}>
                        {translate("record")}
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Loader />
              </>
            )}
          </div>
        </section>
      </div>

      {modalType && (
        <div className={`${scss.modalWrapper} ${isClosing ? scss.close : ""}`}>
          <ModalConsul type={modalType} onClose={handleCloseModal} />
        </div>
      )}
    </>
  );
};

export default Rodology;
