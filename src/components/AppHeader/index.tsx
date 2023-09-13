import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu, Space, Image, Typography, Row, Col } from "antd";
import LanguageChange from "./LanguageChange";
import { useTranslation } from "@/locales/useTranslation";
const { Title } = Typography;

const App: React.FC = () => {
  const t = useTranslation();
  const items: MenuProps["items"] = [
    {
      label: t.navigationBar.cloud,
      key: 1,
    },
    {
      label: t.navigationBar.datacenter,
      key: 2,
    },
    {
      label: t.navigationBar.company,
      key: 3,
    },
  ];
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="app_header">
      <div
        style={{
          background:
            "linear-gradient(90deg, rgb(21, 45, 131), rgb(84, 100, 155))",
          color: "#fff",
          fontSize: "16px",
          lineHeight: "24px",
          padding: "8px 24px",
          textAlign: "center",
          fontFamily: "Camphor,sans-serif",
          minHeight: 40,
        }}
      >
        {t.headerBanner}
      </div>
      <div>
        <Row align={"middle"} style={{ padding: "0 40px" }}>
          <Col>
            <Image preview={false} width={30} src={"/favicon.ico"}></Image>
          </Col>
          <Col flex={1}>
            <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
            />
          </Col>
          <Col>
            <LanguageChange />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default App;
