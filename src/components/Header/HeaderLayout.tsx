import InfoHeader from "./InfoHeader";
import NavBar from "./NavBar";
const HeaderLayout = () => {
  return (
    <header className="text-sm font-medium md:text-base lg:text-lg">
      <InfoHeader />
      <NavBar />
    </header>
  );
};

export default HeaderLayout;
