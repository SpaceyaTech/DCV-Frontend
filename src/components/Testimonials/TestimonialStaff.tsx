import HammerIcon from "@/assets/icons/hammer-icon.svg";
import woman from "@/assets/images/woman-carrying-baby.png";
import RoseImg from "@/assets/images/rose.png";
import { SmileIcon } from "hugeicons-react";
import { Link } from "react-router-dom";

const TestimonialStaff = () => {
  return (
    <section className="mx-auto my-4 max-w-7xl p-4 sm:my-14">
      <div className="flex flex-col-reverse gap-10 md:flex-row">
        <div className="space-y-10 md:w-1/2">
          <p className="text-2xl font-bold text-secondary800 md:text-3xl">
            <span className="-mt-10 text-5xl font-bold text-neutrals900">
              “
            </span>
            <br />
            Working with DCV over two decades has been an overwhelming and
            deeply rewarding experience. Watching children come and go, seeing
            them transform from premature infants to stable young children in
            good health, has been incredible. Some leave as independent young
            adults, ready to face the world, while others find new homes through
            adoption, giving them the chance to grow up in a loving family
            environment. Witnessing these children thrive and develop into
            wonderful individuals is a true testament to the impact of our work.
          </p>
          <div className="flex items-center gap-4">
            <img
              src={RoseImg}
              alt="Rose, House Mother"
              className="rounded-full"
            />
            <div>
              <p className="text-2xl font-bold text-neutrals900">Rose</p>
              <p className="text-lg font-normal text-[#726C6C]">House Mother</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/staff"
              className="flex items-center justify-center gap-3 rounded-full bg-secondary600 px-5 py-[10.63px] text-center font-bold text-secondary100"
            >
              Meet the Staff
              <SmileIcon className="fill-secondary100 text-xl text-secondary600" />
            </Link>
            <Link
              to="projects"
              className="flex items-center justify-center gap-3 rounded-full border border-secondary600 bg-secondary100 px-5 py-[10.63px] text-center font-bold text-secondary600"
            >
              Discover projects we help with
              <img src={HammerIcon} alt="Hammer icon" />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src={woman}
            alt="Rose serving food"
            className="rounded-[39.44px]"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialStaff;
