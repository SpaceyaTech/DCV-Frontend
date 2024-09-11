import { useEffect, useState } from "react";
import Logo from "/logo.svg";
import FacebookIcon from "@/assets/facebook.png";
import DonationsDesktop from "@/assets//dontations-desktop.png";
import FooterBackground from "@/assets//footer-bg.png";
import FooterBGMobile from "@/assets//footer-bgmobile.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className="pt-24">
      <div className="lg:grid-col-3 container lg:flex">
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
            <Link className="hover:underline" to="about">
              About us
            </Link>
            <Link className="hover:underline" to="projects">
              Our projects
            </Link>
            <Link className="hover:underline" to="staff">
              Meet our staff
            </Link>
            <Link className="hover:underline" to="children">
              Meet the children
            </Link>
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
      <div className="relative mt-12 text-center">
        <h1>
          Copyright © Diani Children’s Home, 2024. Designed with ❤️ by
          In4lytics
        </h1>
      </div>
      {isMobile ? (
        <img
          src={FooterBGMobile}
          alt="mobile footer background image"
          className="w-full"
        />
      ) : (
        <img
          src={FooterBackground}
          alt="footer background image"
          className="container"
        />
      )}
    </footer>
  );
};

export default Footer;
