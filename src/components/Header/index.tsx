import InfoHeader from "./InfoHeader";
import NavBar from "./NavBar";
const index = () => {
  return (
    <header className="min-h-[80vh] border border-red-600 bg-hero-background bg-cover bg-center text-sm font-medium md:text-base lg:text-lg">
      <InfoHeader />
      <NavBar />
    </header>
  );
};

export default index;
