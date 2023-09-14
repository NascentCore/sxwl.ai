import { useTranslation } from "@/locales/useTranslation";
import React from "react";
import styles from "./index.module.scss";

/**
 * 首页背景组件
 */
const Index = () => {
  const t = useTranslation();
  return (
    <>
      <div className={styles.homeCoverBgWrap}>
        <h1>{t.homepageCover.title}</h1>
        <h2>{t.homepageCover.subTitle}</h2>
        <p>{t.homepageCover.description}</p>
        <div className={styles.homeRowBtnWrap}>
          <div className={styles.homeRowBtn}>{t.homepageCover.buttonText}</div>
        </div>
      </div>
    </>
  );
};

export default Index;
