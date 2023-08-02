import Link from "next/link";
import Logo from "../AppHeader/Logo";
import { Col, Divider, Row, Space, Typography, Image } from "antd";
const { Title, Text } = Typography;

/**
 * 公共页面底部
 */
export default function AppFooter() {
  // 商务合作邮箱
  const businessEmail = "bd@deeplang.ai";
  // 公司地址
  const companyAddress = "北京市海淀区 清华科技园 威盛大厦";
  // 简历投递邮箱
  const resumeEmail = "join@deeplang.ai";
  // boss招聘主页
  const bossUrl =
    "https://www.zhipin.com/gongsi/6d1e4b436619f4df1Xd43di-FFM~.html?ka=search_rcmd_company_name_6d1e4b436619f4df1Xd43di-FFM~_custompage";
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
                算想未来
              </Title>
            </Space>
          </div>
          <div>
            <Text>本网站由北京算想未来有限责任公司运营</Text>
          </div>
          <div>
            <Text>©️2023 nascentcore.ai 版权所有</Text>
          </div>
        </Col>
        <Col xs={24} sm={5}>
          <Text>加入我们</Text>
          <div style={{ height: 50 }}></div>
          <Title level={5}>商务合作邮箱</Title>
          <Text>{businessEmail}</Text>
          <Title level={5}>公司地址</Title>
          <Text>{companyAddress}</Text>
        </Col>
        <Col xs={24} sm={4}>
          <Text>加入我们</Text>
          <div style={{ height: 50 }}></div>
          <Title level={5}>简历投递邮箱</Title>
          <Text>{resumeEmail}</Text>
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
