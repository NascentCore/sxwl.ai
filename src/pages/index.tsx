import Cover from "@/components/home/Cover";
import AppContainer from "@/components/AppContainer";

export default function Home() {
  return (
    <>
      <AppContainer className="home_page_wrap">
        <div>
          <Cover />
        </div>
      </AppContainer>
    </>
  );
}
