"use client";
import { FC, useEffect, useRef } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./feedback.module.scss";
import { useGetDatafeedBackQuery } from "@/redux/api/data";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
const FeedbackSection: FC = () => {
  const { data } = useGetDatafeedBackQuery();
  const feedbackContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-out",
      once: false,
    });
  }, []);

  const scrollFeedback = (direction: "left" | "right") => {
    if (feedbackContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      feedbackContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {data?.map((el, idx) => (
        <section key={idx} className={styles.FeedbackSection}>
          <div className="container">
            <div key={`feedback-${idx}`} className={styles.content}>
              <h1>{el.feedback}</h1>
              <div
                className={styles.feedbackContainer}
                ref={feedbackContainerRef}
              >
                {el.feedback_img?.map((item, index) => (
                  <div
                    key={`photo-${index}`}
                    data-aos="zoom-in"
                    data-aos-delay={`${index * 200}`}
                    className={styles.feedbackBlock}
                  >
                    <Image
                      width={422}
                      height={422}
                      src={item.img}
                      alt={`Фото отзыва клиента ${index + 1}`}
                      className={styles.feedbackImage}
                    />
                  </div>
                ))}
              </div>
              <button
                className={styles.scrollButton}
                onClick={() => scrollFeedback("left")}
              >
                <FaArrowLeft />
              </button>
              <button
                className={styles.scrollButton}
                onClick={() => scrollFeedback("right")}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default FeedbackSection;
