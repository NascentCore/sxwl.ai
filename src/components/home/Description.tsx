import Link from "next/link";
import React, { useEffect, useState, useContext } from "react";
import { Card, Avatar, Typography, Box } from "@mui/material";

const Index = () => {
  const h1Styles = {
    fontSize: "45px",
    marginBottom: "30px",
    fontWeight: "bold",
  };
  const textStyles = { fontSize: "36px", marginBottom: "30px" };
  const linkStyples = { textDecoration: "underline", color: "#3370ff" };
  return (
    <>
      <Box maxWidth={1200} padding={"0 20px"}>
        <Typography variant="h1" style={h1Styles}>
          媲美 Google、OpenAI 的大模型训练平台，支持千卡 nVidia A100 集群
        </Typography>
        <Typography variant="body1" style={textStyles}>
          诚邀深度学习领域专家
          <Link
            href="https://wenjuan.feishu.cn/m?t=sT0CPNNzNhLi-qegt"
            style={linkStyples}
          >
            加入我们
          </Link>
        </Typography>
        <Typography variant="body1" style={textStyles}>
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
