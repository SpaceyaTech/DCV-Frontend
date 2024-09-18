import React from "react";
import Header from "@/components/Header";
import ContactForm from "@/components/Contact/ContactForm";
import callIcon from "@/assets/call-icon.png";

const ContactHeader = () => {
  return (
    <section className="">
      <header className="h-[90vh]">
        <Header bg="bg-hero-background-2" />
      </header>
      <div className="mx-4 -mt-48 rounded-[3rem] bg-form-background bg-cover bg-no-repeat text-center md:mx-0 md:-mt-36 md:rounded-none md:bg-contain md:bg-center">
        <div className="space-y-6 pt-24">
          <h1 className="mx-auto max-w-xs text-center font-santoshi text-xl italic text-gray-500 md:mx-0 md:max-w-full md:text-lg md:drop-shadow-md">
            It takes a community to raise an African Child{" "}
          </h1>
          <h2 className="mx-auto mt-12 max-w-sm font-santoshi text-3xl font-bold text-[#006AAC] md:mx-0 md:max-w-full md:text-5xl md:drop-shadow-md">
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
