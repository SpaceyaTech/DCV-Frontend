import { Button } from "../ui/button";
import NewsCard from "./NewsCard";
import { SmileIcon } from "hugeicons-react";
import { CircleArrowRight02Icon } from "hugeicons-react";
import trumpet01 from "@/assets/trumpet_6909355 2.svg";
import trumpet02 from "@/assets/trumpet_6909355 3.svg";

const NewsAlert = () => {
  return (
    <div className="mx-auto my-10 flex max-w-[1440px] flex-col items-center justify-center sm:mx-24">
      <div className="flex w-[90%] items-center justify-between sm:justify-center">
        <div className="mt-10 flex items-center justify-center text-3xl font-semibold text-secondary600 sm:gap-4 sm:text-5xl">
          <img
            src={trumpet01}
            alt="Trumpet"
            className="hidden h-10 w-auto sm:inline"
          />
          <span className="mx-2 sm:mx-0">News alert</span>
          <img
            src={trumpet02}
            alt="Emoji"
            className="hidden h-10 w-auto sm:inline"
          />
        </div>
        <CircleArrowRight02Icon className="mt-10 block sm:hidden" />
      </div>
      <NewsCard />
      {/* <a
        href="https://www.globalgiving.org/projects/globalgiving2023"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center"
      >
        <Button className="gap-2 rounded-full bg-secondary600 px-16 py-6 text-xl ease-in-out hover:scale-105 hover:bg-secondary600 sm:w-fit sm:px-8">
          Read more good news
          <SmileIcon className="fill-white text-xl text-secondary600" />
        </Button>
      </a> */}
    </div>
  );
};

export default NewsAlert;
