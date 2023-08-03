import Cover from "@/components/home/Cover";
import AppContainer from "@/components/AppContainer";
import BannerRow from "@/components/home/BannerRow";

export default function Home() {
  return (
    <>
      <AppContainer className="home_page_wrap">
        <div>
          <Cover />
          <BannerRow />
        </div>
      </AppContainer>
    </>
  );
}
