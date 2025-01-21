"use client";
import { useLanguageStore } from "@/store/useLanguageStore";
import scss from "./productSection.module.scss";
import { useEffect, useState } from "react";

const ProductSection = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    console.log("Current language in Header:", language);
  }, [language]);

  const translations = {
    en: {
      product: "My Products",
      gide: "Guides",
      practic: "Practices",
    },
    ru: {
      product: "Мои продукты",
      gide: "Гайды",
      practic: "Практики",
    },
    ky: {
      product: "Менин товарларым",
      gide: "Жол көрсөтмөлөр",
      practic: "Практикалар",
    },
  };

  const translate = (key: keyof (typeof translations)["en"]) => {
    return (
      translations[language as keyof typeof translations]?.[key] ??
      translations.en[key]
    );
  };

  return (
    <div id="products" className={scss.product}>
      <div className="container">
        {showContent && ( // Show content after delay
          <div className={scss.content}>
            <h1>{translate("product")}</h1>
            <div className={scss.block}>
              <button>{translate("gide")}</button>
              <button>{translate("practic")}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSection;
