import logo from "/logo.svg";
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

const NavBarMobile = () => {
  return (
    <nav className="relative top-3 mx-auto mt-4 flex w-full max-w-[90%] items-center justify-between rounded-xl bg-white p-2 shadow-2xl">
      <img src={logo} alt="logo" loading="lazy" className="md:w-14 lg:w-16" />
      <Navlinks />
      <DonateButtonLangs />
      <Drawer>
        <DrawerTrigger>
          <button
            type="button"
            className="menuBtn flex items-center gap-2 rounded-md border bg-neutral-base-white px-4 py-3 shadow-xl lg:hidden"
          >
            <p className="font-bold">Menu</p>
            <Menu01Icon data-testid="menu-icon" size={15} color="black" />
          </button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Mobile Menu is under construction</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default NavBarMobile;
