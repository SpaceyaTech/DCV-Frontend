import React from "react";
import Header from "@/components/Header";
import ContactForm from "@/components/Contact/ContactForm";
import callIcon from "@/assets/call-icon.png";

const ContactHeader = () => {
  return (
    <section className="">
      <header className="h-[90vh] bg-contact-bg-mobile bg-cover bg-no-repeat md:bg-contact-bg-desktop">
        <Header />
      </header>
      <div className="-mt-36 bg-form-background bg-contain bg-center bg-no-repeat text-center">
        <div className="space-y-6 pt-24">
          <h1 className="font-santoshi italic text-gray-500 drop-shadow-md">
            It takes a community to raise an African Child{" "}
          </h1>
          <h2 className="mt-12 font-santoshi text-5xl font-bold text-[#006AAC] drop-shadow-md">
            We'd love to hear from you!
          </h2>
          <h3 className="font-santoshi font-semibold text-[#676262]">
            Call us on
          </h3>
          <button className="mx-auto flex items-center justify-center gap-2">
            <img
              src={callIcon}
              alt="call icon"
              style={{ width: "16px", height: "16px" }}
            />
            <h4 className="font-santoshi text-2xl text-[#694217]">
              +254 791 630 666
            </h4>
          </button>
          <h5>OR</h5>
          <div className="md:pb-36">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;
