import { Col, Divider, Row, Space, Typography, Image } from "antd";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
const { Title, Text } = Typography;
import { translate } from "@docusaurus/Translate";
import boss_zhipin_png from "./assets/boss_zhipin.png";

/**
 * 公共页面底部
 */
export default function AppFooter() {
  const bossUrl =
    "https://www.zhipin.com/gongsi/cec67883c0aa01401XN-29S_EFU~.html";

  return (
    <>
      <Row style={{ padding: 40 }}>
        <Divider />
        <Col xs={24} sm={15}>
          <div style={{ marginBottom: 10 }}>
            <Space align={"center"}>
              <Image
                preview={false}
                width={30}
                src={"/img/favicon.ico"}
              ></Image>
              <Title level={4} style={{ margin: 0 }}>
                <Translate id="footer.companyName"></Translate>
              </Title>
            </Space>
          </div>
          <div>
            <Text>
              <Translate id="footer.operation"></Translate>:{" "}
            </Text>
            <Link href={`https://github.com/NascentCore/sxwl.ai`}>
              <Translate id="footer.operation.edit"></Translate>
            </Link>
          </div>
          <div>
            <Text>
              <Translate id="footer.copyright"></Translate>
            </Text>
          </div>
        </Col>
        <Col xs={24} sm={5}>
          <Title level={5}>
            <Translate id="footer.bdEmail"></Translate>
          </Title>
          <Text>
            <Link
              href={`mailto:${translate({
                id: "footer.bdEmailValue",
              })}`}
            >
              <Translate id="footer.bdEmailValue"></Translate>
            </Link>
          </Text>
          <Title level={5}>
            <Translate id="footer.companyAddress"></Translate>
          </Title>
          <Text>
            <Translate id="footer.companyAddressValue"></Translate>
          </Text>
        </Col>
        <Col xs={24} sm={4}>
          <Title level={5}>
            <Translate id="footer.resumeSubmissionEmail"></Translate>
          </Title>
          <Text>
            <Link
              href={`mailto:${translate({
                id: "footer.resumeSubmissionEmailValue",
              })}`}
            >
              <Translate id="footer.resumeSubmissionEmailValue"></Translate>
            </Link>
          </Text>
          <div>
            <Space size={"large"} style={{ marginTop: 20 }}>
              <Link href={bossUrl} target="__blank">
                <Image
                  preview={false}
                  src={boss_zhipin_png}
                  alt={"进入招聘主页"}
                  width={42}
                  height={42}
                ></Image>
              </Link>
            </Space>
          </div>
        </Col>
      </Row>
    </>
  );
}
