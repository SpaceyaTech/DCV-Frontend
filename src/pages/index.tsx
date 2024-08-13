import DonateComponent from "@/components/Donate/DonateComponent";
import Header from "@/components/Header";
import HeroCardDesktop from "@/components/HeroCardSectionDesktop";
import HeroCardMobile from "@/components/HeroCardSectionMobile";
import { isMobile } from "react-device-detect";

import NewsAlert from "@/components/NewsAlert/NewsAlert";
import Graduation from "@/components/Gallery/Graduation";
import Gallery from "@/components/Gallery/Gallery";
import TestimonialCaroussel from "@/components/Testimonials/TestimonialCaroussel";
import TestimonialStaff from "@/components/Testimonials/TestimonialStaff";
export default function Index() {
  return (
    <>
      <Header />
      {isMobile ? <HeroCardMobile /> : <HeroCardDesktop />}
      <NewsAlert />
      <DonateComponent />
      <Graduation />
      <Gallery />
      <TestimonialCaroussel />
      <TestimonialStaff />
    </>
  );
}
