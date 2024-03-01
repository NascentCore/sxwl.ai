import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import PriceCard from "@site/src/components/PriceCard";
import Layout from "@theme/Layout";
import styles from "./index.module.scss";
import AppFooter from "@site/src/components/AppFooter";
import { translate } from "@docusaurus/Translate";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const priceCardMap = {
    zh: [
      {
        title: "免费版",
        price: "$0",
        unit: "/小时",
        description: "适用于个人用户、试用了解算想云",
        btnText: "提交训练任务",
        link: "https://llm.sxwl.ai",
        tip: "完全免费",
        featureList: [
          "无限量运行 5 分钟限时训练任务",
          "无须充值、无须提供支付信息",
          "A100 SXM GPU",
        ],
      },
      {
        title: "标准版 A100/H100 (SXM+IB)",
        price: "¥ 12-30",
        unit: "/小时",
        description: "适用于微调、小规模预训练大模型场景",
        btnText: "联系我们",
        link: "https://tricorder.feishu.cn/share/base/form/shrcn3vjrbTBLi2GhXSYAixMXRf",
        tip: "价格为公有云 40%",
        featureList: [
          "所有免费版功能和服务",
          "按需使用、先用后付、预付月结、快速上手",
          "24 小时客服支持",
          "其他型号 GPU 请参考任务提交界面",
        ],
      },
      {
        title: "企业版",
        price: "面议",
        unit: "",
        description: "媲美 Google 的私有化部署云原生智算云服务",
        btnText: "联系我们",
        link: "https://tricorder.feishu.cn/share/base/form/shrcnE4KlgUhbrnNMfTvDWKIlfh",
        tip: "为顶尖大模型团队设计",
        featureList: [
          "所有标准版功能和服务",
          "私有化部署算想云平台",
          "定制化产品功能研发",
          "国产 GPU 适配、优化",
        ],
      },
    ],
    en: [
      {
        title: "Free",
        price: "$0",
        unit: "/hour",
        description: "Perfect for individuals and small teams to get started.",
        btnText: "GET STARTED",
        link: "https://llm.sxwl.ai/",
        tip: "Totally free",
        featureList: [
          "$10 / month free credits",
          "No subscription fee",
          "Concurrent jobs up to 16 CPUs + 1 GPU",
        ],
      },
      {
        title: "Standard",
        price: "$100",
        unit: "/hour",
        description:
          "Designed to meet the needs of collaborative teams and growing businesses.",
        btnText: "CONTACT US",
        link: "https://tricorder.feishu.cn/share/base/form/shrcn3vjrbTBLi2GhXSYAixMXRf",
        tip: "60% cheaper than public Clouds",
        featureList: [
          "$30 / month free credits included",
          "Multi-user support for collaboration",
          "Elevated quota for scaling",
          "Custom runtime environments",
          "Dedicated account manager",
        ],
      },
      {
        title: "Enterprise",
        price: "Custom",
        unit: "",
        description:
          "Built for organizations needing a high level of SLAs, performance, and compliance.",
        btnText: "CONTACT US",
        link: "https://tricorder.feishu.cn/share/base/form/shrcnE4KlgUhbrnNMfTvDWKIlfh",
        tip: "Designed for top LLM teams",
        featureList: [
          "Custom integration and support",
          "Self-hosted deployments",
          "Dedicated API support for control plane",
          "Audit log and RBAC (coming soon)",
          "Prioritize your requests on our roadmap",
        ],
      },
    ],
  };
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className={styles.priceBoxGroup}>
        {priceCardMap[
          translate({
            id: "locale",
          })
        ].map((item: any) => (
          <>
            <PriceCard priceItem={item} />
          </>
        ))}
      </div>
      <AppFooter />
    </Layout>
  );
}
