import Link from "next/link";
import React from "react";
import { Typography, Box } from "@mui/material";

const Index = () => {
  const linkStyples = { textDecoration: "underline", color: "#3370ff" };
  return (
    <>
      <Box maxWidth={1200} padding={"0 20px"}>
        <Typography variant="h1" className="home_desc_typography_h1">
          媲美 Google、OpenAI 的大模型算力软件平台，支持千卡 nVidia A100 集群
        </Typography>
        <Typography variant="body1" className="home_desc_typography_text">
          诚邀深度学习领域专家
          <Link
            href="https://wenjuan.feishu.cn/m?t=sT0CPNNzNhLi-qegt"
            style={linkStyples}
          >
            加入我们
          </Link>
        </Typography>
        <Typography variant="body1" className="home_desc_typography_text">
          敬请
          <Link
            href="https://wenjuan.feishu.cn/m?t=sJHPnI4jPhLi-g0wr"
            style={linkStyples}
          >
            关注
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default Index;
