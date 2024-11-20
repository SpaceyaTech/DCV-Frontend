import React from "react";

import teenBoy from "@/assets/images/teen-boy.png";
import teenGirl from "@/assets/images/teen-girl.png";
import { cn } from "@/lib/utils";

function StatsSection() {
  return (
    <section className="flex flex-col items-center gap-6 px-6 py-4 md:flex-row">
      {stats.map((stat, i) => (
        <StatCard key={stat.id} index={i} stat={stat} />
      ))}
    </section>
  );
}

export default StatsSection;

const StatCard = ({ index, stat }: { index: number; stat: StatsProps }) => {
  return (
    <div
      className={cn(
        "flex w-full items-end gap-4 rounded-2xl bg-white px-2 pt-1 md:items-center md:rounded-3xl md:px-4 md:pt-3",
        index % 2 === 0 ? "flex-row" : "flex-row-reverse",
      )}
    >
      <div className="relative w-1/2 overflow-hidden md:w-3/5">
        <img
          src={stat.image}
          alt={stat.title}
          className="relative z-50 object-cover"
        />
        <div
          className={cn(
            "absolute left-[10%] top-1/2 aspect-square w-2/3 rounded-full bg-gradient-to-b",
            `from-[${stat.primaryColor}] to-[#FFF3E0]`,
            stat.primaryColor === "#0097F5" && "from-[#0097F5]",
          )}
        />
      </div>

      <div className="aspect-square h-full w-1/2 p-2 md:w-2/5">
        <div
          className={cn(
            "flex size-full items-center justify-center ring-1 ring-offset-2",
            `bg-[${stat.primaryColor}] ring-[${stat.primaryColor}]`,
          )}
          style={{ borderRadius: "40% 60% 65% 35% / 40% 35% 65% 60%" }}
        >
          <div className="flex flex-col items-center px-3 text-center text-white lg:gap-2">
            <h6 className="text-xl font-bold sm:text-2xl lg:text-4xl">
              {stat.title}
            </h6>
            <p className="text-[8px] sm:text-[10px] lg:text-sm">{stat.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

type StatsProps = {
  id: number;
  image: string;
  title: string;
  desc: string;
  primaryColor: string;
};

const stats: StatsProps[] = [
  {
    id: 1,
    image: teenBoy,
    title: "30 years",
    desc: "is how long we have kept Diani Children’s village up and running.",
    primaryColor: "#FFA10C",
  },
  {
    id: 2,
    image: teenGirl,
    title: "102",
    desc: "Children have been under our care.",
    primaryColor: "#0097F5",
  },
];
