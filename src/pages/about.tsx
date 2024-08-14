import WhatWeDo from "@/components/About/WhatWeDo";
import WhoWeAre from "@/components/About/WhoWeAre";
import DonateComponent from "@/components/Donate/DonateComponent";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";

const About = () => {
  return (
    <>
      <Header />
      <WhoWeAre />
      <WhatWeDo />
      <DonateComponent />
      <Footer />
    </>
  );
};

export default About;
