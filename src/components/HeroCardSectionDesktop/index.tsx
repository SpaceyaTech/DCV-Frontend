import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <div className="relative bottom-36 mx-auto flex w-fit max-w-6xl flex-col items-center justify-center gap-y-8 rounded-2xl bg-white px-36 py-16 text-center font-santoshi text-base">
      <div className="flex flex-col items-center gap-2">
        <p className="text-lg italic leading-5 text-[#898384]">
          Because every child deserves an amazing childhood
        </p>

        <h2 className="text-5xl font-bold text-[#006AAC]">
          Support Diani Children’s Village
        </h2>
      </div>

      <p className="text-lg text-[#726C6C]">
        Over the years, DCV has served as a sanctuary for over 100 children,
        transforming lives <br></br> through dedicated care and support.
      </p>

      <Button className="h-[46px] w-[296px] self-center rounded-[67px] bg-[#0097F5] text-[20px] transition-all ease-linear hover:scale-105 hover:bg-[#0097F5]">
        <NavLink to="donate">Support us today 💛</NavLink>
      </Button>
    </div>
  );
};

export default index;
