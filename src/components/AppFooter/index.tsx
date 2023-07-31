import Logo from "../AppHeader/Logo";
import { Col, Divider, Row, Space } from "antd";
import { Typography, Image } from "antd";
const { Title, Link } = Typography;

/**
 * 公共页面底部
 */
export default function AppFooter() {
  return (
    <>
      <div style={{ padding: "50px 30px" }}>
        <Row>
          <Col xs={24} sm={8}>
            <Space>
              <Image
                width={40}
                src={"/assets/github.svg"}
                preview={false}
              ></Image>
              <Title level={1} style={{ marginBottom: 0 }}>
                Lambda
              </Title>
            </Space>
          </Col>
          <Col xs={24} sm={4}>
            <Space direction="vertical">
              <Title level={5}>Resources</Title>

              <Link>GPU Benchmarks</Link>
              <Link>Blog</Link>
              <Link>Lambda Stack</Link>
              <Link>Documentation</Link>
              <Link>Forum</Link>
              <Link>Research </Link>
            </Space>
          </Col>
          <Col xs={24} sm={4}>
            <Space direction="vertical">
              <Title level={5}>Company</Title>
              <Link> About</Link>
              <Link>Careers</Link>
              <Link>Professional Services</Link>
              <Link>Partners</Link>
            </Space>
          </Col>
          <Col xs={24} sm={4}>
            <Space direction="vertical">
              <Title level={5}>Support</Title>
              <Link>Technical Support</Link>
              <Link>Partner Portal</Link>{" "}
            </Space>
          </Col>
          <Col xs={24} sm={4}>
            <Space direction="vertical">
              <Title level={5}>Contact</Title>
              <Link>Contact Us</Link>
              <Link>P. 1 (866) 711-2025 </Link>{" "}
            </Space>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col xs={24} sm={8}>
            © 2023 All rights reserved.
          </Col>
          <Col xs={24} sm={8}>
            <Space size={"large"}>
              <Link>Terms of Service </Link>
              <Link>Privacy Policy </Link>
            </Space>
          </Col>
          <Col xs={24} sm={8}>
            <Space>
              <Image
                width={40}
                src={"/assets/github.svg"}
                preview={false}
              ></Image>
              <Image
                width={40}
                src={"/assets/github.svg"}
                preview={false}
              ></Image>
              <Image
                width={40}
                src={"/assets/github.svg"}
                preview={false}
              ></Image>
              <Image
                width={40}
                src={"/assets/github.svg"}
                preview={false}
              ></Image>
            </Space>
          </Col>
        </Row>
      </div>
    </>
  );
}
