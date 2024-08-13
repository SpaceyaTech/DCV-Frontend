import DecorativeImageTop from "@/assets/Hero-Decorative-1.png";
import DecorativeImageBottom from "@/assets/Hero-Decorative-2.png";
import { Button } from "../ui/button";

const index = () => {
  return (
    <div className="mx-auto w-fit rounded-xl bg-white text-base">
      <div className="flex flex-col items-center justify-center gap-y-4 text-center">
        <img
          className="rounded-t-xl"
          src={DecorativeImageTop}
          alt="Top decorative pattern desktop"
        />
        <p className="text-[18px] italic text-[#898384]">
          {" "}
          Because every child deserves an amazing childhood
        </p>

        <p className="text-5xl font-bold text-[#006AAC]">
          Support Diani Children’s Village
        </p>

        <p className="text-[18px] leading-[27px] text-[#726C6C]">
          Over the years, DCV has served as a sanctuary for over 100 children,
          transforming lives <br></br> through dedicated care and support.
        </p>

        <Button className="h-[46px] w-[296px] self-center rounded-[67px] bg-[#0097F5] text-[20px]">
          Support us today 💛
        </Button>
        <img
          className="rounded-b-xl"
          src={DecorativeImageBottom}
          alt="Bottom decorative pattern desktop"
        />
      </div>
    </div>
  );
};

export default index;
