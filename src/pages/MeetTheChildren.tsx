import React from "react";

import ChildrenCard from "@/components/_meet-the-children/ChildrenCard";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";

function MeetTheChildren() {
  const [ageBracket, setAgeBracket] = React.useState("Age 1-5");
  return (
    <main className="space-y-12">
      <Header />
      <section className="container mx-auto flex w-full max-w-screen-xl flex-col items-center gap-16 font-lato sm:px-4 md:py-6 lg:py-12">
        <div className="flex w-full max-w-xl flex-col items-center gap-12 text-center">
          <h3 className="text-2xl font-bold leading-10 lg:text-[32px]">
            Meet our vibrant, lovely and amazing kids from all over Africa
          </h3>

          <div className="no-scrollbar flex w-full items-center justify-between gap-1.5 overflow-x-scroll rounded-full border-primary-main bg-white px-2 py-2 md:gap-3 md:border md:px-3 md:shadow md:shadow-primary-main">
            <button
              className={cn(
                "text-nowrap rounded-full px-3 py-1.5 text-base text-primary-main transition-colors duration-500 ease-in hover:bg-primary-main hover:text-white md:py-2 lg:px-8",
                ageBracket === "Age 1-5" && "bg-primary-main text-white",
              )}
              onClick={() => setAgeBracket("Age 1-5")}
            >
              Age 1-5
            </button>

            <button
              className={cn(
                "text-nowrap rounded-full px-3 py-1.5 text-base text-primary-main transition-colors duration-500 ease-in hover:bg-primary-main hover:text-white md:py-2 lg:px-8",
                ageBracket === "Age 6-12" && "bg-primary-main text-white",
              )}
              onClick={() => setAgeBracket("Age 6-12")}
            >
              Age 6-12
            </button>

            <button
              className={cn(
                "text-nowrap rounded-full px-3 py-1.5 text-base text-primary-main transition-colors duration-500 ease-in hover:bg-primary-main hover:text-white md:py-2 lg:px-8",
                ageBracket === "Age 13-18+" && "bg-primary-main text-white",
              )}
              onClick={() => setAgeBracket("Age 13-18+")}
            >
              Age 13-18+
            </button>
          </div>
        </div>

        <div className="w-full">
          {ageBracket === "Age 1-5" && (
            <ChildrenCard image="/age-5.png" list={age5List} />
          )}
          {ageBracket === "Age 6-12" && (
            <ChildrenCard image="/age-12.png" list={age12List} />
          )}
          {ageBracket === "Age 13-18+" && (
            <ChildrenCard image="/age-18.png" list={age18List} />
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default MeetTheChildren;

const age5List = [
  {
    id: 1,
    title: "Children at this age range",
    description:
      " are often newly admitted and are just beginning to adjust to the environment and routines of life at the Diani Children’s Village.",
  },
  {
    id: 2,
    title: "Circumstances leading to their stay: ",
    description:
      "Most are orphaned, neglected, or abandoned. Some are brought in by police, hospitals, or members of the public.",
  },
  {
    id: 3,
    title: "Education: ",
    description: `Once they reach 4 years old, they attend "St Elizabeth Nursery School," which is located a few kilometers away from the village.`,
  },
  {
    id: 4,
    title: "Activities: ",
    description:
      "They participate in age-appropriate games and activities to help them develop social and cognitive skills.",
  },
];

const age12List = [
  {
    id: 1,
    title: "Schooling: ",
    description: `These children attend "St Angelo Primary School Academy," which helps them integrate with other children from different families and backgrounds.`,
  },
  {
    id: 2,
    title: "Extracurricular Activities: ",
    description:
      "In their free time, they are encouraged to engage in sports, learn basic skills at the furniture workshop, and participate in DIY skills",
  },
  {
    id: 3,
    title: "Integration and Development: ",
    description:
      "The aim is to provide a normal life atmosphere, fostering social skills and personal development.",
  },
  {
    id: 4,
    title: "Activities: ",
    description:
      "They participate in age-appropriate games and activities to help them develop social and cognitive skills.",
  },
];

const age18List = [
  {
    id: 1,
    title: "Education and Future Preparation: ",
    description:
      "Several children in this age bracket attend boarding schools, colleges, or universities. They return home during holidays.",
  },
  {
    id: 2,
    title: "Involvement and Mentorship: ",
    description:
      "Older children often work towards their professional careers and occasionally visit to mentor and encourage younger children.",
  },
  {
    id: 3,
    title: "Extended Support: ",
    description:
      "Youngsters aged 16-25 who did not grow up at DCV also benefit from the educational program and assist with daily tasks during their breaks.",
  },
  {
    id: 4,
    title: "Activities: ",
    description:
      "They participate in age-appropriate games and activities to help them develop social and cognitive skills.",
  },
];
