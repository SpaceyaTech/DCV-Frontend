import Header from "@/components/Header";
import HeroCardDesktop from "@/components/HeroCardSectionDesktop";
import HeroCardMobile from "@/components/HeroCardSectionMobile";
import { isMobile } from "react-device-detect";

export default function Index() {
  return (
    <>
      <Header />
      {isMobile ? <HeroCardMobile /> : <HeroCardDesktop />}
    </>
  );
}
