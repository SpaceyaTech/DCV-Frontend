import InfoHeader from "./InfoHeader";
import NavBar from "./NavBar";
const index = ({ bg }: { bg: string }) => {
  return (
    <header
      className={`min-h-[80vh] ${bg} bg-cover bg-center text-sm font-medium md:text-base lg:text-lg`}
    >
      <InfoHeader />
      <NavBar />
    </header>
  );
};

export default index;
