import DonateComponent from "@/components/Donate/DonateComponent";
import DonationMethods from "@/components/Donate/DonationMethods";
import WhyDonate from "@/components/Donate/WhyDonate";
import Footer from "@/components/Footer/Footer";
import HeaderLayout from "@/components/Header/HeaderLayout";

const Donate = () => {
  return (
    <>
      <HeaderLayout />
      <WhyDonate />
      <DonationMethods />
      <DonateComponent />
      <Footer />
    </>
  );
};

export default Donate;
