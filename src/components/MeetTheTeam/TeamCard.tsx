import React from "react";

import yvonne from "@/assets/images/meet-the-team/yvonne.jpeg";

function TeamCard() {
  return (
    <div className="flex h-96 w-full max-w-72 flex-col overflow-hidden rounded-xl bg-primary-main">
      <div className="h-3/4">
        <img src={yvonne} alt="" className="size-full object-cover" />
      </div>
      <div className="mt-3.5 h-1/4 rounded-b-xl border border-primary-main bg-white">
        <div className="flex flex-col p-2.5">
          <h2 className="text-xl font-medium text-primary-1000">
            Yvonne ter Avest
          </h2>

          <p className="text-sm italic text-gray-600">Co-Founder</p>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
