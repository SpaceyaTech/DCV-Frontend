import DonateComponent from "@/components/Donate/DonateComponent";
import DonationMethods from "@/components/Donate/DonationMethods";
import WhyDonate from "@/components/Donate/WhyDonate";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";

const Donate = () => {
  return (
    <>
      <Header />
      <WhyDonate />
      <DonationMethods />
      <DonateComponent />
      <Footer />
    </>
  );
};

export default Donate;
