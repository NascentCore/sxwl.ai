import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Cover from "@site/src/components/Cover";
import InvestorInstitution from "@site/src/components/InvestorInstitution";
import AppFooter from "@site/src/components/AppFooter";
import { translate } from "@docusaurus/Translate";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
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
          cursor: "pointer",
        }}
        onClick={() => {
          const url = translate({
            id: "headerBannerLink",
          });
          if (url) {
            window.open(url);
          }
        }}
      >
        {translate({
          id: "headerBanner",
        })}
      </div>
      <Layout
        title={`${siteConfig.title}`}
        description="Description will go into a meta tag in <head />"
      >
        <main>
          <Cover />
          <InvestorInstitution />
          <AppFooter />
        </main>
      </Layout>
    </>
  );
}
