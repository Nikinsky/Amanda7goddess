"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import scss from "./servisesSection.module.scss";
import img1 from "@/assets/img/Bolt.svg";
import img2 from "@/assets/img/serviceIcon22.svg";
import img3 from "@/assets/img/serviceIcon.svg";
import img4 from "@/assets/img/Vector.svg";
import photo from "@/assets/img/service.svg";
import { useGetServiceDataQuery } from "@/redux/api/data";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useLanguageStore } from "@/store/useLanguageStore";

const ServisesSection: React.FC = () => {
  const router = useRouter();
  const { data } = useGetServiceDataQuery();

  const icons = [img1, img2, img3, img4];

  const handleServiceClick = (id: number, pattern: number) => {
    if (pattern === 1) {
      router.push(`/services_detail/${id}/?pattern=${pattern}`);
    } else if (pattern === 2) {
      router.push(`/services_detail/${id}/?pattern=${pattern}`);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    console.log("Current language in Header:", language);
  }, [language]);

  const translations = {
    en: {
      watch: "See All",
    },
    ru: {
      watch: "Смотреть все",
    },
    ky: {
      watch: "Баарын көрүү",
    },
  };

  const translate = (key: keyof (typeof translations)["en"]) => {
    return (
      translations[language as keyof typeof translations]?.[key] ??
      translations.en[key]
    );
  };
  return (
    <section id="services">
      {data?.map((el, idx) => (
        <div key={idx} className={scss.services}>
          <div className="container">
            <div className={scss.content}>
              <div className={scss.title}>
                <h1 data-aos="fade-right" data-aos-delay="400">
                  {el.title}
                </h1>
                <Link
                  data-aos="fade-left"
                  data-aos-delay="400"
                  href="/serviceList"
                >
                  {" "}
                  {translate(`watch`)}
                </Link>
              </div>
              <div className={scss.info}>
                <div className={scss.block}>
                  {el.services.map((item, index) => (
                    <div
                      className={scss.box}
                      key={index}
                      onClick={() =>
                        handleServiceClick(index + 1, item.pattern)
                      }
                      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                      data-aos-delay={index * 1000}
                    >
                      <div className={scss.background} />
                      <div className={scss.text}>
                        <Image src={icons[index % icons.length]} alt="icon" />

                        <p>{item.name_services}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Image className={scss.mainBlockImg} src={photo} alt="photo" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServisesSection;
