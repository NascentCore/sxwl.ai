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
  // boss招聘主页
  const bossUrl =
    "https://www.zhipin.com/gongsi/cec67883c0aa01401XN-29S_EFU~.html";
  // 飞书投递简历
  const feishuUrl = "https://wenjuan.feishu.cn/m/cfm?t=sT0CPNNzNhLi-qegt";

  return (
    <>
      <Row style={{ padding: 40 }}>
        <Divider />
        <Col xs={24} sm={15}>
          <div style={{ marginBottom: 90 }}>
            <Space align={"center"}>
              <Image preview={false} width={30} src={"/favicon.ico"}></Image>
              <Title level={4} style={{ margin: 0 }}>
                {t.footer.companyName}
              </Title>
            </Space>
          </div>
          <div>
            <Text>{t.footer.operation}</Text>
          </div>
          <div>
            <Text>{t.footer.copyright}</Text>
          </div>
        </Col>
        <Col xs={24} sm={5}>
          <Text>{t.footer.joinUs}</Text>
          <div style={{ height: 50 }}></div>
          <Title level={5}>{t.footer.businessCooperationEmail}</Title>
          <Text>{t.footer.businessCooperationEmailValue}</Text>
          <Title level={5}>{t.footer.companyAddress}</Title>
          <Text>{t.footer.companyAddress}</Text>
        </Col>
        <Col xs={24} sm={4}>
          <Text>{t.footer.joinUs}</Text>
          <div style={{ height: 50 }}></div>
          <Title level={5}>{t.footer.resumeSubmissionEmail}</Title>
          <Text>{t.footer.resumeSubmissionEmailValue}</Text>
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

              <Link href={feishuUrl} target="__blank">
                <Image
                  preview={false}
                  src={"/assets/feishu.png"}
                  alt={"快速投递简历"}
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
