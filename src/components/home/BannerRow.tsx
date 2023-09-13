import React from "react";
import { Col, Divider, Row } from "antd";
import { Typography } from "antd";
import CloudCard from "./CloudCard";
import { useTranslation } from "@/locales/useTranslation";
const { Title } = Typography;

const Index = () => {
  const t = useTranslation();
  return (
    <>
      <div className="home_banner_wrap">
        <Divider orientation="left" orientationMargin="0">
          <div>{t.separatorText}</div>
        </Divider>
        <Row>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "40px 0",
              width: "100%",
            }}
          >
            <Title level={1}>{t.publicCloud.title}</Title>
          </div>

          <Col xs={24} sm={12}>
            <CloudCard
              title={t.publicCloud.cardOne.title}
              subTitle={t.publicCloud.cardOne.subTitle}
              button={t.publicCloud.cardOne.buttonText}
            />
          </Col>
          <Col xs={24} sm={12}>
            <CloudCard
              title={t.publicCloud.cardTwo.title}
              subTitle={t.publicCloud.cardTwo.subTitle}
              button={t.publicCloud.cardTwo.buttonText}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Index;
