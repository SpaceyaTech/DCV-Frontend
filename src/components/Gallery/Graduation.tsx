import { Button } from "../ui/button";
import graduationImage01 from "@/assets/graduationimage01.svg";
import graduationImage02 from "@/assets/graduationimage02.svg";
import favouriteIcon from "@/assets/favourite_icon.svg";
import handIcon from "@/assets/hand_icon.svg";
import { Link, NavLink } from "react-router-dom";

const Graduation = () => {
  return (
    <div className="my-20 flex w-full flex-col items-center justify-center">
      <h1 className="text-center text-3xl font-bold text-primary600 sm:text-5xl">
        Cliff and Henry's Graduation
      </h1>
      <p className="my-1 italic">From the MPESA FOUNDATION ACADEMY</p>
      <div className="z-10 -mb-20 mt-16 flex flex-row items-center justify-center gap-5 sm:-mb-40">
        <img
          src={graduationImage01}
          alt="graduation image1"
          className="w-1/3 rounded-3xl border border-primary600 p-1 sm:w-1/2 sm:rounded-[37px]"
        />
        <img
          src={graduationImage02}
          alt="graduation image2"
          className="w-1/3 rounded-3xl border border-primary600 p-1 sm:w-1/2 sm:rounded-[37px]"
        />
      </div>
      <div className="mt-5 flex min-h-[350px] w-[90%] flex-col items-center justify-center rounded-3xl bg-primary-blue px-5 sm:w-[80%]">
        <p className="text-md mt-12 text-center font-bold text-primary1000 sm:mt-36 sm:w-[50%] sm:text-lg">
          Witnessing such milestones wouldn’t be possible without your donations
          and support!
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/donation"
            className="flex w-full items-center justify-center"
          >
            <Button className="w-[90%] gap-2 rounded-full bg-primary600 px-20 py-6 text-xl sm:px-8">
              Donate to DCV today
              <img src={favouriteIcon} className="w-8" alt="favourite icon" />
            </Button>
          </Link>
          <Link to="/meet" className="flex w-full items-center justify-center">
            <Button className="w-[90%] gap-2 rounded-full border border-primary600 bg-transparent px-20 py-6 text-xl text-primary-text sm:px-8">
              <NavLink to="children">Meet the children</NavLink>{" "}
              <img src={handIcon} alt="hand icon" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Graduation;
