"use client";
import scss from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import phone from "@/assets/img/phoneWhite.svg";
import BurgerMenu from "@/ui/burgerMenu/BurgerMenu";
import Languages from "@/ui/languages/languages";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useEffect } from "react";

const Header = () => {
  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    console.log("Current language in Header:", language);
  }, [language]);

  const translations = {
    en: {
      main: "Home",
      about: "About me",
      service: "Services",
    },
    ru: {
      main: "Главная",
      about: "Обо мне",
      service: "Услуги",
    },
    ky: {
      main: "Башкы бет",
      about: "Мен жөнүндө",
      service: "Кызматтар",
    },
  };

  const translate = (key: keyof (typeof translations)["en"]) => {
    return (
      translations[language as keyof typeof translations]?.[key] ??
      translations.en[key]
    );
  };

  return (
    <header id={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <Link href="/">
            <h1>AmandaSpace</h1>
          </Link>
          <nav>
            <Link href="/">{translate("main")}</Link>
            <Link href="/#about">{translate("about")}</Link>
            <Link href="/#services">{translate("service")}</Link>
            <Languages />
          </nav>
          <div className={scss.contact}>
            <Image width={100} height={100} src={phone} alt="phone" />
            <a href="https://wa.me/996779779898">+996 779 779 898</a>
          </div>
          <div className={scss.burgerMenu}>
            <BurgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
