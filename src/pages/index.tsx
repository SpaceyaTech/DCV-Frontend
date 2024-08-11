import DonateComponent from "@/components/Donate/DonateComponent";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import NewsAlert from "@/components/NewsAlert/NewsAlert";
export default function Index() {
  return (
    <>
      <Header />
      <NewsAlert />
      <DonateComponent />
      <Footer />
    </>
  );
}
