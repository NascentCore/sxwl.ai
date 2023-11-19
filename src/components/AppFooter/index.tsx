import Link from "next/link";
import Logo from "../AppHeader/Logo";
import { Col, Divider, Row, Space, Typography, Image } from "antd";
import { useAppContext } from "@/hooks/useAppContext";
const { Title, Text } = Typography;

/**
 * 公共页面底部
 */
export default function AppFooter() {
  const { t } = useAppContext();
  const bossUrl =
    "https://www.zhipin.com/gongsi/cec67883c0aa01401XN-29S_EFU~.html";

  return (
    <>
      <Row style={{ padding: 40 }}>
        <Divider />
        <Col xs={24} sm={15}>
          <div style={{ marginBottom: 10 }}>
            <Space align={"center"}>
              <Image preview={false} width={30} src={"/favicon.ico"}></Image>
              <Title level={4} style={{ margin: 0 }}>
                {t.footer.companyName}
              </Title>
            </Space>
          </div>
          <div>
            <Text>{t.footer.operation}：</Text>
            <Link href={`https://github.com/NascentCore/sxwl.ai`}>
            编辑页面
            </Link>
          </div>
          <div>
            <Text>{t.footer.copyright}</Text>
          </div>
        </Col>
        <Col xs={24} sm={5}>
          <Title level={5}>{t.footer.bdEmail}</Title>
          <Text>
            <Link href={`mailto:${t.footer.bdEmailValue}`}>
              {t.footer.bdEmailValue}
            </Link>
          </Text>
          <Title level={5}>{t.footer.companyAddress}</Title>
          <Text>{t.footer.companyAddressValue}</Text>
        </Col>
        <Col xs={24} sm={4}>
          <Title level={5}>{t.footer.resumeSubmissionEmail}</Title>
          <Text>
            <Link href={`mailto:${t.footer.resumeSubmissionEmailValue}`}>
              {t.footer.resumeSubmissionEmailValue}
            </Link>
          </Text>
          <div>
            <Space size={"large"} style={{ marginTop: 20 }}>
              <Link href={bossUrl} target="__blank">
                <Image
                  preview={false}
                  src={"/assets/boss_zhipin.png"}
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
