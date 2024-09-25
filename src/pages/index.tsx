import DonateComponent from "@/components/Donate/DonateComponent";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import HeroCardDesktop from "@/components/HeroCardSectionDesktop";
import HeroCardMobile from "@/components/HeroCardSectionMobile";
import { isMobile } from "react-device-detect";
import NewsAlert from "@/components/NewsAlert/NewsAlert";
import Graduation from "@/components/Gallery/Graduation";
import TestimonialCaroussel from "@/components/Testimonials/TestimonialCaroussel";
import TestimonialStaff from "@/components/Testimonials/TestimonialStaff";

import SupportChildren from "@/components/support-the-children/SupportChildren";

export default function Index() {
  return (
    <section className="relative">
      <Header bg="bg-hero-background" />
      {isMobile ? <HeroCardMobile /> : <HeroCardDesktop />}
      <SupportChildren />
      <NewsAlert />
      <Graduation />
      {/* <Gallery /> */}
      <TestimonialCaroussel />
      <TestimonialStaff />
      <DonateComponent isIndexPage={true} />
      <Footer />
    </section>
  );
}
