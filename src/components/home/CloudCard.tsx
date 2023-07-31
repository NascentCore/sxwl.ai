import { Image } from "antd";
import React from "react";
interface IProps {
  title: string;
  subTitle: string;
  button: string;
}

const Index = (props: IProps) => {
  const { title, subTitle, button } = props;
  return (
    <>
      <div className="public_cloud_item">
        <div className="public_cloud_item_icon">
          <Image preview={false} width={68} src={"/assets/github.svg"}></Image>
        </div>
        <div className="public_cloud_item_title">{title}</div>
        <div className="public_cloud_item_desc">{subTitle}</div>
        <div className="public_cloud_item_btn">{button}</div>
      </div>
    </>
  );
};

export default Index;
