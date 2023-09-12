/**
 * 语言切换 导航栏
 */
import { useEffect, useState, useTransition } from "react";
import { Popover } from "antd";
import styles from "./index.module.scss";
import { useTranslation } from "@/locales/useTranslation";

const Index = () => {
  const t = useTranslation();
  const [open, set_open] = useState(false);
  const changeFn = (lang: string) => {
    console.log("lang");
    set_open(false);
    window.location.href = `/${lang}`;
  };
  useEffect(() => {
    console.log("styles", t);
  });
  const content = (
    <>
      <div className={styles.languageBtnPopup}>
        <div
          className={styles.languageBtnPopupItem}
          onClick={() => changeFn("zh")}
        >
          简体中文
        </div>
        <div
          className={styles.languageBtnPopupItem}
          onClick={() => changeFn("en")}
        >
          English
        </div>
      </div>
    </>
  );
  return (
    <>
      <Popover placement="bottomLeft" title={null} content={content}>
        <div className={styles.languageBtn}>
          <div className={styles.languageBtnText}>{t.localeText}</div>
        </div>
      </Popover>
    </>
  );
};

export default Index;
