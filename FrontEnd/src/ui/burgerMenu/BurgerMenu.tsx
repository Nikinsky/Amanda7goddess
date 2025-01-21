"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import scss from "./burgerMenu.module.scss";
import { usePathname } from "next/navigation";
import burgerMenu from "@/assets/img/Frame 427319561.svg";
import cancelMenu from "@/assets/img/cancel.svg";
import Image from "next/image";
import Languages from "../languages/languages";
import { useLanguageStore } from "@/store/useLanguageStore";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [disableClicks, setDisableClicks] = useState(false);
  const pathname = usePathname();
  const language = useLanguageStore((state) => state.language);
  const menuRef = useRef<HTMLDivElement>(null); // Ссылка на меню

  useEffect(() => {
    console.log("Current language in Header:", language);
  }, [language]);

  const translations = {
    en: {
      main: "Home",
      about: "About me",
      service: "Services",
      product: "My products",
    },
    ru: {
      main: "Главная",
      about: "Обо мне",
      service: "Услуги",
      product: "Мои продукты",
    },
    ky: {
      main: "Башкы бет",
      about: "Мен жөнүндө",
      service: "Кызматтар",
      product: "Менин товарларым",
    },
  };

  const translate = (key: keyof (typeof translations)["en"]) => {
    return (
      translations[language as keyof typeof translations]?.[key] ??
      translations.en[key]
    );
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setDisableClicks(true);
    setTimeout(() => {
      setDisableClicks(false);
    }, 500);
  };

  // Закрытие меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={scss.burgerMenu} ref={menuRef}>
      <button className={scss.burgerIcon} onClick={toggleMenu}>
        {isOpen ? (
          <Image src={cancelMenu} alt="menu" width={50} height={50} />
        ) : (
          <Image src={burgerMenu} alt="menu" width={50} height={50} />
        )}
      </button>
      <div className={`${scss.menu} ${isOpen ? scss.open : ""}`}>
        <Link
          href="/"
          onClick={toggleMenu}
          className={pathname === "/" ? scss.active : ""}
          tabIndex={disableClicks ? -1 : 0}
        >
          {translate("main")}
        </Link>
        <Link
          href="#about"
          onClick={toggleMenu}
          className={pathname === "/accessory" ? scss.active : ""}
          tabIndex={disableClicks ? -1 : 0}
        >
          {translate("about")}
        </Link>
        <Link
          href="#services"
          onClick={toggleMenu}
          className={pathname === "/catalog" ? scss.active : ""}
          tabIndex={disableClicks ? -1 : 0}
        >
          {translate("service")}
        </Link>

        <Link
          href="#products"
          onClick={toggleMenu}
          className={pathname === "/contact" ? scss.active : ""}
          tabIndex={disableClicks ? -1 : 0}
        >
          {translate("product")}
        </Link>
        <Link href={""} className={scss.contact}>
          <Languages />
        </Link>
      </div>
    </div>
  );
};

export default BurgerMenu;
