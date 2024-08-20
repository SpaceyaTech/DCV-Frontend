import ContactForm from "@/components/Contact/ContactForm";
import Footer from "@/components/Footer/Footer";
import ContactHeader from "@/components/Contact/ContactHeader";
import contactImage from "/src/stories/assets/contact-background.png";
import ContactMap from "@/components/Contact/ContactMap";

const Contact = () => {
  return (
    <div className="">
      <ContactHeader />
      <ContactMap />
      <div className="mt-48 bg-white">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
