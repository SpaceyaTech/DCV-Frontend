import { CallRinging04Icon, MailOpen01Icon } from "hugeicons-react";
import vettedImage from "@/assets/vetted.svg";
import confetti from "@/assets/confetti.svg";

import React from "react";

const InfoHeader = () => {
  return (
    <div className="grid grid-rows-1 md:grid-cols-2">
      <div className="flex items-center gap-6 bg-transparent md:gap-6 lg:bg-primary-100">
        <img src={vettedImage} alt="vetted" />
        <p className="flex items-center gap-4 text-primary-text">
          Vetted Organization - GlobalGiving 2017
          <img src={confetti} className="hidden lg:w-6" alt="confetti" />
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 bg-secondary200 px-4 py-3 text-secondary1000 md:flex-row md:justify-end md:gap-6 md:py-0 lg:gap-8">
        <a
          href="tel:254791630666"
          className="flex items-center gap-2 hover:underline"
        >
          <CallRinging04Icon
            data-testid="call-icon"
            color="#6A4100"
            size={20}
          />
          +254791630666
        </a>
        <a
          href="mailto:info@dianichildrensvillage.org"
          className="flex items-center gap-2 hover:underline"
        >
          <MailOpen01Icon
            data-testid="mail-open-icon"
            color="#6A4100"
            size={20}
          />
          info@dianichildrensvillage.org
        </a>
      </div>
    </div>
  );
};

export default InfoHeader;
