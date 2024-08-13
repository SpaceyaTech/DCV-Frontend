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
      <section className="container mx-auto flex w-full max-w-screen-xl flex-col items-center gap-16 border border-red-500 py-12 font-lato">
        <div className="flex w-full max-w-xl flex-col items-center gap-12 border-blue-500 text-center">
          <h3 className="text-[32px] font-bold leading-10">
            Meet our vibrant, lovely and amazing kids from all over Africa
          </h3>

          <div className="flex w-full items-center justify-between gap-3 rounded-full border border-primary-main bg-white px-3 py-2 shadow shadow-primary-main">
            <button
              className={cn(
                "rounded-full px-8 py-3 text-base text-primary-main transition-colors duration-500 ease-in hover:bg-primary-main hover:text-white",
                ageBracket === "Age 1-5" && "bg-primary-main text-white",
              )}
              onClick={() => setAgeBracket("Age 1-5")}
            >
              Age 1-5
            </button>

            <button
              className={cn(
                "rounded-full px-8 py-3 text-base text-primary-main transition-colors duration-500 ease-in hover:bg-primary-main hover:text-white",
                ageBracket === "Age 6-12" && "bg-primary-main text-white",
              )}
              onClick={() => setAgeBracket("Age 6-12")}
            >
              Age 6-12
            </button>

            <button
              className={cn(
                "rounded-full px-8 py-3 text-base text-primary-main transition-colors duration-500 ease-in hover:bg-primary-main hover:text-white",
                ageBracket === "Age 13-18+" && "bg-primary-main text-white",
              )}
              onClick={() => setAgeBracket("Age 13-18+")}
            >
              Age 13-18+
            </button>
          </div>
        </div>
        <ChildrenCard />
      </section>
      <Footer />
    </main>
  );
}

export default MeetTheChildren;
