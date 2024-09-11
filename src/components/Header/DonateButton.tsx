import { Button } from "../ui/button";
import heartIcon from "@/assets/hearticon.png";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import englandFlag from "@/assets/england-flag.svg";
import germanyFlag from "@/assets/german-flag.svg";
import { NavLink } from "react-router-dom";

const DonateButton = () => {
  return (
    <div className="hidden items-center gap-8 lg:flex">
      <Tabs>
        <TabsList defaultValue="england">
          <TabsTrigger value="england" className="flex items-center gap-2">
            <img src={englandFlag} alt="england" />
            ENG
          </TabsTrigger>
          <TabsTrigger value="germany" className="flex items-center gap-2">
            <img src={germanyFlag} alt="germany" />
            GER
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Button
        size="lg"
        className="hidden items-center gap-2 rounded-xl bg-primary-main text-xl font-medium text-white lg:flex"
      >
        <NavLink to="donate">Donate</NavLink>
        <img src={heartIcon} alt="heart" loading="lazy" />
      </Button>
    </div>
  );
};

export default DonateButton;
