import logo from "/logo.svg";
import closeIcon from "@/assets/icons/close.png";
import { Menu01Icon } from "hugeicons-react";
import DonateButtonLangs from "./DonateButton";
import Navlinks from "./Navlinks";
import {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { Link, NavLink } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import englandFlag from "@/assets/england-flag.svg";
import germanyFlag from "@/assets/german-flag.svg";
import heartIcon from "@/assets/hearticon.png";
import { useState } from "react";

const NavBarMobile = () => {
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/projects", text: "Our projects" },
    { to: "/news", text: "" },
    { to: "/staff", text: "Meet our staff" },
    { to: "/children", text: "Meet our children" },
    { to: "/contact", text: "Contact Us" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative top-3 mx-auto mt-4 flex w-full max-w-[90%] items-center justify-between rounded-xl bg-white p-2 shadow-2xl">
      <Link to="/">
        <img src={logo} alt="logo" loading="lazy" className="md:w-14 lg:w-16" />
      </Link>
      <Navlinks />
      <DonateButtonLangs />
      <Drawer open={isOpen}>
        <DrawerTrigger>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="menuBtn flex items-center gap-2 rounded-md border bg-neutral-base-white px-4 py-3 shadow-xl lg:hidden"
          >
            <p className="font-bold">Menu</p>
            <Menu01Icon data-testid="menu-icon" size={15} color="black" />
          </button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <Tabs>
                    <TabsList defaultValue="england">
                      <TabsTrigger
                        value="england"
                        className="flex items-center gap-2"
                      >
                        <img src={englandFlag} alt="england" />
                        ENG
                      </TabsTrigger>
                      <TabsTrigger
                        value="germany"
                        className="flex items-center gap-2"
                      >
                        <img src={germanyFlag} alt="germany" />
                        GER
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                <button
                  className="rounded-full border border-neutral-400 p-2"
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <img src={closeIcon} alt="close" loading="lazy" />
                </button>
              </div>
              {/* Remove the wrapping button */}
              <div className="mt-6 flex w-1/2 flex-col gap-4 text-left font-sans font-normal">
                {navLinks.map((link) => (
                  <NavLink
                    key={crypto.randomUUID()}
                    className={({ isActive }) =>
                      [
                        isActive
                          ? "active max-w-fit rounded-2xl border border-primary-700 bg-primary-100 px-4 py-2 text-primary-1000"
                          : "text-neutral-500",
                      ].join("")
                    }
                    to={link.to}
                  >
                    {link.text}
                  </NavLink>
                ))}
              </div>
            </DrawerTitle>
          </DrawerHeader>
          <DrawerFooter>
            <Button
              size="lg"
              className="max-w-fit items-center gap-2 rounded-xl bg-primary-main text-xl font-medium text-white hover:scale-95 hover:bg-primary-main lg:flex"
            >
              <NavLink to="/donate">Donate</NavLink>
              <img src={heartIcon} alt="heart" loading="lazy" />
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default NavBarMobile;
