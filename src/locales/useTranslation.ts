import { useRouter } from "next/router";
import en from "./en";
import zh from "./zh";

export const useTranslation = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  return getTranslationInstant(locale);
};

export const getTranslationInstant = (locale: any) => {
  if (locale === "en") {
    return en;
  } else if (locale === "zh") {
    return zh;
  } else {
    return zh;
  }
};
