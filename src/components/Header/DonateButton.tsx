import { Button } from "../ui/button";
import heartIcon from "@/assets/hearticon.png";

const DonateButton = () => {
  return (
    <Button
      size="lg"
      className="hidden items-center gap-2 rounded-xl bg-primary-main text-xl font-medium text-white lg:flex"
    >
      Donate
      <img src={heartIcon} alt="heart" loading="lazy" />
    </Button>
  );
};

export default DonateButton;
