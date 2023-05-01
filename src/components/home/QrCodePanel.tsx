import Image from "next/image";
import React from "react";
import { Box } from "@mui/material";

const Index = () => {
  return (
    <>
      <Box
        maxWidth={1200}
        padding={"0 20px"}
        display={"flex"}
        justifyContent={"center"}
        className={"nai_qrcode_wrap"}
      >
        <div className="nai_qrcode_item">
          <Image width={320} height={445} src="/assets/join_qr.png" alt="" />
        </div>
        <div className="nai_qrcode_item">
          <Image width={320} height={445} src="/assets/follow_qr.png" alt="" />
        </div>
        <div className="wechat_qrcode_item">
          <Image width={320} height={445} src="/assets/wechat_qr.jpg" alt="" />
        </div>
      </Box>
    </>
  );
};

export default Index;
