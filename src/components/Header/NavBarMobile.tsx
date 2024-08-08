import logo from "/logo.svg";
import { Menu01Icon } from "hugeicons-react";
const NavBarMobile = () => {
  return (
    <nav className="mx-auto mt-4 flex w-full max-w-[90%] items-center justify-between rounded-lg bg-white p-2 shadow-2xl lg:hidden">
      <img src={logo} alt="logo" loading="lazy" />
      <div className="flex items-center gap-2 rounded-md bg-neutral-base-white px-4 py-3 shadow-xl">
        <p className="font-bold">Menu</p>
        <Menu01Icon size={15} color="black" />
      </div>
    </nav>
  );
};

export default NavBarMobile;
