import { Image } from "antd";
import React from "react";
import styles from "./index.module.scss";
interface IProps {
  title: string;
  subTitle: string;
  button: string;
}

const Index = (props: IProps) => {
  const { title, subTitle, button } = props;
  return (
    <>
      <div className={styles.publicCloudItem}>
        <div className={styles.publicCloudItemIcon}>
          <Image preview={false} width={68} src={"/assets/github.svg"}></Image>
        </div>
        <div className={styles.publicCloudItemTitle}>{title}</div>
        <div className={styles.publicCloudItemDesc}>{subTitle}</div>
        <div className={styles.publicCloudItemBtn}>{button}</div>
      </div>
    </>
  );
};

export default Index;
