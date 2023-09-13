import { useTranslation } from "@/locales/useTranslation";
import React from "react";

/**
 * 首页背景组件
 */
const Index = () => {
  const t = useTranslation();
  return (
    <>
      <div className="home_cover_bg_wrap home_banner_wrap">
        <h1>{t.homepageCover.title}</h1>
        <h2>{t.homepageCover.subTitle}</h2>
        <p>{t.homepageCover.description}</p>
        <div className="home_row_btn_wrap">
          <div className="home_row_btn">{t.homepageCover.buttonText}</div>
        </div>
      </div>
    </>
  );
};

export default Index;
