import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu, Space, Image, Typography } from "antd";
const { Title } = Typography;

const items: MenuProps["items"] = [
  {
    label: (
      <>
        <Space>
          <Image preview={false} width={30} src={"/assets/github.svg"}></Image>
          <Title level={4} style={{ marginBottom: 0 }}>
            Lambda
          </Title>
        </Space>
      </>
    ),
    key: "0",
  },
  {
    label: "Cloud",
    key: "1",
  },
  {
    label: "Datacenter",
    key: "2",
  },
  {
    label: " Desktops",
    key: "3",
  },
  {
    label: "Company",
    key: "4",
  },
  {
    label: "Resources",
    key: "5",
  },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="app_header">
      <div
        style={{
          background: "linear-gradient(90deg, #8136e2, #3b2b9b)",
          color: "#fff",
          fontSize: "16px",
          lineHeight: "24px",
          padding: "8px 24px",
          textAlign: "center",
          fontFamily: "Camphor,sans-serif",
        }}
      >
        Get on-demand access to NVIDIA H100s in Lambda Cloud! Spin up an
        instance
      </div>
      <div>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>
    </div>
  );
};

export default App;
