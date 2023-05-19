import Cover from "@/components/home/Cover";
import Description from "@/components/home/Description";
import QrCodePanel from "@/components/home/QrCodePanel";
import AppContainer from "@/components/AppContainer";

export default function Home() {
  return (
    <>
      <AppContainer className="home_page_wrap">
        <div>
          <Cover />
          <Description />
          <QrCodePanel />
        </div>
      </AppContainer>
    </>
  );
}
