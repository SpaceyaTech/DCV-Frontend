import React from "react";
import Logo from "/src/stories/assets/logo.png";
import FacebookIcon from "/src/stories/assets/facebook.png";
import DonationsDesktop from "/src/stories/assets/dontations-desktop.png";

const Footer = () => {
  return (
    <div className="container py-24">
      <div className="lg:grid-col-3 lg:flex">
        <div className="space-y-4 lg:w-1/2">
          <div>
            <div className="flex items-center gap-4">
              <img src={Logo} alt="dcv logo" />
              <h1 className="font-santoshi font-bold text-background-blue md:text-3xl">
                Diani Children's Village
              </h1>
            </div>
          </div>
          <div className="max-w-md font-santoshi text-lg">
            (DCV) was established in 1994 with the mission of providing a safe
            home for orphans, neglected, and abandoned children.
          </div>
          <div className="flex items-center">
            <div className="">Follow us on:</div>
            <div className="flex items-center">
              <img src={FacebookIcon} alt="facebook logo" className="" />
              <h2>Diani Children's Village</h2>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src={DonationsDesktop}
            alt="dotations call to action"
            className="hidden lg:block"
          />
        </div>
        <div className="font-santoshi text-lg text-[#898384]">
          <div className="flex flex-col space-y-3 text-[#898384] lg:text-right">
            <a href="#">About us</a>
            <a href="#">Our projects</a>
            <a href="#">News</a>
            <a href="#">Meet our staff</a>
            <a href="#">Meet the children</a>
          </div>
          <div className="mt-6 flex gap-4">
            <div className="text-nowrap">
              <a href="#">Terms and Conditions</a>
            </div>
            <div>
              <a href="#">Privacy</a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <h1>
          Copyright © Diani Children’s Home, 2024. Designed with ❤️ by
          In4lytics
        </h1>
      </div>
    </div>
  );
};

export default Footer;
