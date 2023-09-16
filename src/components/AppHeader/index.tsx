import React, { useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { Menu, Space, Image, Typography, Row, Col } from "antd";
import LanguageChange from "./LanguageChange";
import { useAppContext } from "@/hooks/useAppContext";
import styles from "./index.module.scss";
const { Title } = Typography;

const App: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    setShow(true);
  }, []);
  const { t } = useAppContext();
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
    {
      label: <LanguageChange />,
      className: styles.languangeColNav,
      key: 4,
    },
  ];
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    if (Number(e.key) === 1) {
      window.location.href = "http://cloud.nascentcore.ai";
    }
  };

  return (
    <div className={styles.appHeader} style={{ display: !show ? "none" : "" }}>
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
        <Row align={"middle"} style={{ padding: "0 20px" }}>
          <Col className={styles.iconCol}>
            <Image
              preview={false}
              width={30}
              src={t.locale === "zh" ? "/favicon.ico" : "/favicon-en.ico"}
            ></Image>
          </Col>
          <Col flex={1}>
            <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
            />
          </Col>
          <Col className={styles.languangeCol}>
            <LanguageChange />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default App;
