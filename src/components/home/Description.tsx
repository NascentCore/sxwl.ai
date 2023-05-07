import Link from "next/link";
import React from "react";

const Index = () => {
  const linkStyples = { textDecoration: "underline", color: "#3370ff" };
  return (
    <>
      <div className="home_description">
        <div className="home_nav">
          <div className="home_nav_item">
            <Link href={"/blog"}>
              <span>博客</span>
            </Link>
          </div>
        </div>
        <div className="home_desc_typography_h1" style={{ marginBottom: 15 }}>
          <span>三千</span>
          平台：
          <span>千</span>
          卡、
          <span>千</span>
          亿参数、
          <span>千</span>
          小时稳定高效训练
        </div>
        <div className="home_desc_typography_h1">媲美 Google、OpenAI</div>
        <div className="home_desc_typography_text">
          诚邀深度学习领域专家
          <Link
            href="https://wenjuan.feishu.cn/m?t=sT0CPNNzNhLi-qegt"
            style={linkStyples}
          >
            加入我们
          </Link>
        </div>
        <div className="home_desc_typography_text">
          敬请
          <Link
            href="https://wenjuan.feishu.cn/m?t=sJHPnI4jPhLi-g0wr"
            style={linkStyples}
          >
            关注
          </Link>
        </div>
      </div>
    </>
  );
};

export default Index;
