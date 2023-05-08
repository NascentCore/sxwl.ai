import Image from "next/image";
import React from "react";

/**
 * 首页 二维码 容器
 */
const Index = () => {
  return (
    <>
      <div className={"nai_qrcode_wrap"}>
        <div className="nai_qrcode_item">
          <Image width={320} height={445} src="/assets/join_qr.png" alt="" />
        </div>
        <div className="nai_qrcode_item">
          <Image width={320} height={445} src="/assets/follow_qr.png" alt="" />
        </div>
        <div className="nai_qrcode_item wechat_qrcode_item">
          <Image width={320} height={445} src="/assets/wechat_qr.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Index;
