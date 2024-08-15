import React from "react";

import DonateComponent from "@/components/Donate/DonateComponent";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import TeamCard from "@/components/MeetTheTeam/TeamCard";

function MeetTheTeam() {
  return (
    <main className="space-y-12">
      <Header />
      <section className="container mx-auto flex max-w-screen-xl flex-col items-center gap-10 border border-red-400">
        <h1 className="text-xl font-bold sm:text-2xl lg:text-5xl">
          Meet our Staff
        </h1>

        <div className="flex flex-col items-center gap-6 md:gap-10">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <TeamCard />
            <TeamCard />
          </div>
          <div className="grid w-full grid-cols-1 gap-8 border border-green-600 md:grid-cols-2 lg:grid-cols-4">
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
      </section>
      <DonateComponent isIndexPage={false} />
      <Footer />
    </main>
  );
}

export default MeetTheTeam;
