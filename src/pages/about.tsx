import WhatWeDo from "@/components/About/WhatWeDo";
import WhoWeAre from "@/components/About/WhoWeAre";
import DonateComponent from "@/components/Donate/DonateComponent";
import Footer from "@/components/Footer/Footer";
import HeaderLayout from "@/components/Header/HeaderLayout";

const About = () => {
  return (
    <>
      <HeaderLayout />
      <WhoWeAre />
      <WhatWeDo />
      <DonateComponent />
      <Footer />
    </>
  );
};

export default About;
