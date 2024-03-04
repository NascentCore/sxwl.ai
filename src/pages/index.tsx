import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomePage from "./home";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <HomePage />
    </>
  );
}
