import { FC, ReactNode, useEffect, useState } from "react";
import { useLanguageStore } from "@/store/useLanguageStore"; // Import your language store
import Footer from "./footer/Footer";
import Header from "./header/Header";
import scss from "./layoutSite.module.scss";
import { api } from "@/redux/api";
import Loader from "@/ui/loader/Loader";

interface LayoutSiteProps {
  children: ReactNode;
}

const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {
  const [isLoader, setIsLoader] = useState(true);
  const language = useLanguageStore((state) => state.language);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log("Language changed, triggering language change effect...");
    api.util.invalidateTags(["data"]);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      {isLoader ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className={scss.LayoutSite}>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default LayoutSite;
