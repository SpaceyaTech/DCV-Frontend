import { Button } from "../ui/button";
import NewsCard from "./NewsCard";
import { SmileIcon } from "hugeicons-react";
import { CircleArrowRight02Icon } from "hugeicons-react";
import trumpet02 from "@/assets/trumpet_6909355 2.svg";
import trumpet03 from "@/assets/trumpet_6909355 3.svg";

const NewsAlert = () => {
  return (
    <div className="mx-auto my-10 flex max-w-[1440px] flex-col items-center justify-center sm:mx-24">
      <div className="flex w-[90%] items-center justify-between sm:justify-center">
        <div className="mt-10 flex items-center justify-center text-3xl font-bold text-secondary600 sm:gap-4">
          <img
            src={trumpet02}
            alt="Trumpet"
            className="hidden h-8 w-auto sm:inline"
          />
          <span className="mx-2 sm:mx-0">News alert</span>
          <img
            src={trumpet03}
            alt="Trumpet"
            className="hidden h-8 w-auto sm:inline"
          />
        </div>
        <CircleArrowRight02Icon className="mt-10 block sm:hidden" />
      </div>
      <NewsCard />
      <a
        href="https://www.globalgiving.org/projects/globalgiving2023"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="w-full gap-2 rounded-full bg-secondary600 px-20 py-6 text-xl sm:px-8">
          Read more good news
          <SmileIcon className="fill-white text-xl text-secondary600" />
        </Button>
      </a>
    </div>
  );
};

export default NewsAlert;
