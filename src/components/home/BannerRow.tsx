import React from "react";
import { Col, Divider, Row } from "antd";
import { Typography } from "antd";
import CloudCard from "./CloudCard";
const { Title } = Typography;

const Index = () => {
  return (
    <>
      <div className="home_banner_wrap">
        <Divider orientation="left" orientationMargin="0">
          <div>PUBLIC CLOUD</div>
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
            <Title level={1}>
              The only public cloud designed for training LLMs & Generative AI
            </Title>
          </div>

          <Col xs={24} sm={12}>
            <CloudCard
              title={"On-Demand Cloud"}
              subTitle={
                "Spin up on-demand GPUs billed by the hour. H100 instances starting at $1.99/hr."
              }
              button={"Launch an instance"}
            />
          </Col>
          <Col xs={24} sm={12}>
            <CloudCard
              title={"On-Demand Cloud"}
              subTitle={
                "Spin up on-demand GPUs billed by the hour. H100 instances starting at $1.99/hr."
              }
              button={"Launch an instance"}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Index;
