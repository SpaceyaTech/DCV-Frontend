import DonateComponent from "@/components/Donate/DonateComponent";
import Footer from "@/components/Footer/Footer";
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
      <Graduation />
      <Gallery />
      <TestimonialCaroussel />
      <TestimonialStaff />
      <DonateComponent isIndexPage={true} />
      <Footer />
    </>
  );
}
