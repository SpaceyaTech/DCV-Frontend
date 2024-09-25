import DecorativeImageTop from "@/assets/Hero-Deco-Mobile-Top.png";
import DecorativeImageBottom from "@/assets/Hero-Deco-Mobile-Bottom.png";
import { Button } from "../ui/button";

const index = () => {
  return (
    <div className="relative bottom-32 mx-auto w-[90%] rounded-xl bg-white text-base">
      <img
        className="rounded-t-xl"
        src={DecorativeImageTop}
        alt="Top decorative pattern mobile"
      />

      <div className="flex flex-col justify-center gap-y-4 p-2 pb-4">
        <p className="text-[#898384]">
          {" "}
          Because every child deserves an amazing <br></br>childhood
        </p>

        <p className="text-3xl font-bold text-[#006AAC]">
          Support Diani <br></br> Children’s Village
        </p>

        <p className="text-[18px] leading-[27px] text-[#726C6C]">
          Over the years, DCV has served as a <br></br> sanctuary for over 100
          children, <br></br> transforming lives through dedicated <br></br>care
          and support.
        </p>

        <Button className="h-[46px] w-[296px] self-center rounded-[67px] bg-[#0097F5] text-[18px] transition-all ease-linear hover:scale-105 hover:bg-[#0097F5]">
          Support us today 💛
        </Button>
      </div>

      <img
        className="rounded-b-xl"
        src={DecorativeImageBottom}
        alt="Bottom decorative pattern mobile"
      />
    </div>
  );
};

export default index;
