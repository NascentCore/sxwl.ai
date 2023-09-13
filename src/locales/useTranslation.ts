import { useRouter } from "next/router";
import en from "./en";
import zh from "./zh";
import { IWebsiteConfig } from "./types";

export const useTranslation = (): IWebsiteConfig => {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  return getTranslationInstant(locale);
};

export const getTranslationInstant = (locale?: string): IWebsiteConfig => {
  if (locale === "en") {
    return en;
  } else if (locale === "zh") {
    return zh;
  } else {
    return zh;
  }
};
