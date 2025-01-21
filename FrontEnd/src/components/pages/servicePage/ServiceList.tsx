"use client";
import React, { useEffect } from "react";
import s from "./ServiceList.module.scss";
import Image from "next/image";
import img1 from "@/assets/img/Bolt.svg";
import img2 from "@/assets/img/serviceIcon22.svg";
import img3 from "@/assets/img/serviceIcon.svg";
import img4 from "@/assets/img/Vector.svg";
import { useGetAllServicesQuery } from "@/redux/api/data";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/store/useLanguageStore";
import AOS from "aos";
import "aos/dist/aos.css";

type Service = {
  name_services: string;
};

type DataItem = {
  title: string;
  services: Service[];
};

const ServiceList = () => {
  const router = useRouter();
  const icons = [img1, img2, img3, img4];
  const { data } = useGetAllServicesQuery();
  console.log("🚀 ~ ServiceList ~ data:", data)

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

  return (
    <section id="service">
      <div className={s.ServiceList}>
        <div className="container">
          <div className={s.content}>
            <div className={s.title}>
              <h1 data-aos="fade-up" data-aos-delay={`200`}>
                My services
              </h1>
            </div>
            <div className={s.block}>
              {data?.map((el, idx: number) => (
                <div
                  className={s.box}
                  key={idx}
                  onClick={() => handleServiceClick(idx+1,el.pattern)}
                  data-aos="zoom-in"
                  data-aos-delay={`${idx * 1000}`}
                >
                  <div className={s.background} />
                  <div className={s.text}>
                    <Image src={icons[idx % icons.length]} alt="icon" />
                    <p>{el.name_services}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
