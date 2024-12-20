import boyImage from "@/assets//boy-in-hat.png";
import DonationsMobile from "@/assets/donations-mobile.png";
import DonationsDesktop from "@/assets/dontations-desktop.png";
import heartIcon from "@/assets/heart-icon.png";
import { Link, NavLink } from "react-router-dom";

interface DonateComponentProps {
  isIndexPage: boolean;
}

const DonateComponent: React.FC<DonateComponentProps> = ({ isIndexPage }) => {
  return (
    <div
      className={`relative rounded-t-[96px] pb-32 md:pb-0 ${
        isIndexPage ? "bg-background-blue" : "bg-neutral-base-white"
      }`}
    >
      <div className="container md:flex md:gap-36 md:py-10">
        {!isIndexPage && (
          <div className="mt-32 block w-full py-10 md:hidden">
            <img
              src={DonationsDesktop}
              alt="donations call to action"
              className="-mt-28 size-44 translate-x-1/2"
            />
          </div>
        )}
        <div className="md:ml-32 md:flex md:max-w-[40rem] md:items-center md:gap-8">
          <img
            src={boyImage}
            alt="boy with a hat"
            className="mx-auto max-w-32 md:mx-0 md:max-w-full"
          />
          <h1
            className={`mx-auto max-w-sm text-center font-santoshi text-2xl font-bold md:max-w-full md:text-left md:text-4xl ${
              isIndexPage ? "text-white" : "text-primary-main"
            }`}
          >
            Are you ready to be part of their success story?
          </h1>
        </div>
        <div className="space-y-4 md:mt-12">
          <p
            className={`px-4 text-center font-santoshi text-lg font-normal md:px-0 md:text-left lg:max-w-[20rem] ${
              isIndexPage ? "text-white" : ""
            }`}
          >
            Any amount, whether big or small, means the world to us. By
            donating, you're investing in their hopes and dreams.
          </p>
          <button
            className={`mx-auto flex items-center gap-2 rounded-full px-8 py-2 transition-all ease-in-out hover:scale-105 md:mx-0 md:mt-6 ${
              isIndexPage
                ? "bg-white text-background-blue"
                : "bg-background-blue text-white"
            }`}
          >
            <h1 className="font-santoshi text-lg font-bold md:text-[20px]">
              <Link to="/donate">Donate to DCV today</Link>
            </h1>
            <img src={heartIcon} alt="heart icon" />
          </button>
        </div>
        {isIndexPage && (
          <div className="absolute block w-full py-10 md:hidden">
            <img
              src={DonationsMobile}
              alt="donations call to action"
              className="translate-x-1/2"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DonateComponent;
