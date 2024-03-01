import React from "react";
import styles from "./index.module.scss";
import Translate from "@docusaurus/Translate";

/**
 * 首页背景组件
 */
const Index = () => {
  return (
    <>
      <div className={styles.homeCoverBgWrap}>
        <h1>
          <Translate id="homepageCover.title"></Translate>
        </h1>
        <h2>
          <Translate id="homepageCover.subTitle"></Translate>
        </h2>
        <p>
          <Translate id="homepageCover.description"></Translate>
        </p>
        <div className={styles.homeRowBtnWrap}>
          <div
            className={styles.homeRowBtn}
            onClick={() => {
              window.location.href = "https://llm.sxwl.ai";
            }}
          >
            <Translate id="homepageCover.buttonText"></Translate>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
