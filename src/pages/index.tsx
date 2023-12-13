import Cover from "@/components/home/Cover";
import AppContainer from "@/components/AppContainer";
import InvestorInstitution from "@/components/home/InvestorInstitution";

export default function Home() {
  return (
    <>
      <AppContainer className="home_page_wrap">
        <div>
          <Cover />
          <InvestorInstitution />
        </div>
      </AppContainer>
    </>
  );
}
