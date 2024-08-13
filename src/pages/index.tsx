import Header from "@/components/Header";
import HeroCardDesktop from "@/components/HeroCardSectionDesktop";
import HeroCardMobile from "@/components/HeroCardSectionMobile";
import { isMobile } from "react-device-detect";

import NewsAlert from "@/components/NewsAlert/NewsAlert";
export default function Index() {
  return (
    <>
      <Header />
      {isMobile ? <HeroCardMobile /> : <HeroCardDesktop />}
      <NewsAlert />
    </>
  );
}
