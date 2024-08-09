import Header from "@/components/Header";
import NewsAlert from "@/components/NewsAlert/NewsAlert";
import TestimonialCaroussel from "@/components/Testimonials/TestimonialCaroussel";
import TestimonialStaff from "@/components/Testimonials/TestimonialStaff";
export default function Index() {
  return (
    <>
      <Header />
      <NewsAlert />
      <TestimonialCaroussel />
      <TestimonialStaff />
    </>
  );
}
