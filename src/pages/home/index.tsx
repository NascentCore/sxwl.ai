import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Cover from "@site/src/components/Cover";
import InvestorInstitution from "@site/src/components/InvestorInstitution";
import AppFooter from "@site/src/components/AppFooter";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
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
