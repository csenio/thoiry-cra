import { useState } from "react";

const useLang = () => {
  const standard = ["en", "fr"].includes(document.documentElement.lang)
    ? document.documentElement.lang
    : "fr";
  const [lang, changeLang] = useState(standard);
  const setLang = lang => {
    if (typeof lang === "string") {
      document.documentElement.lang = lang;
      changeLang(lang);
    }
  };
  return { lang, setLang };
};

export default useLang;
