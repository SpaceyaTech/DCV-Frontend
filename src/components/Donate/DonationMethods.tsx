import { CheckmarkCircle02Icon } from "hugeicons-react";
import DonateHero1 from "@/assets/images/donate/donate-hero-1.png";
import MpesaLogo from "@/assets/images/donate/mpesa-logo.png";
import NCBABankLogo from "@/assets/images/donate/ncbabank-logo.png";
import RaboBankLogo from "@/assets/images/donate/rabobank-logo.png";
import GlobalGivingLogo from "@/assets/images/donate/global-giving-logo.png";

const DonationMethods = () => {
  return (
    <section className="container my-12 space-y-6 md:my-32 md:space-y-28">
      {/* Donation Methods */}
      <div>
        <h1 className="text-center text-3xl font-bold leading-8 text-[#1D2130] md:text-5xl md:leading-[57.6px]">
          Donation Methods
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="flex flex-col items-start gap-2 rounded-2xl border-4 border-[#FAA01480]/50 bg-white p-4 md:flex-row md:items-center">
            <img
              src={MpesaLogo}
              alt="Mpesa Logo"
              className="h-40 rounded-2xl"
            />
            <div>
              <h3 className="mb-6 text-xl font-bold">M-PESA</h3>
              <p className="mb-2 flex gap-2 text-lg text-[#726C6C]">
                Paybill Number: <b> 345146</b>{" "}
              </p>
              <p className="flex gap-2 text-lg text-[#726C6C]">
                Account number: <b> DIANI CHILDREN'S VILLAGE</b>{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 rounded-2xl border-4 border-[#FAA01480]/50 bg-white p-4 md:flex-row md:items-center">
            <img
              src={NCBABankLogo}
              alt="NCBA Bank KSH Logo"
              className="h-40 rounded-2xl"
            />
            <div>
              <h3 className="mb-6 text-xl font-bold">NCBA BANK (KSH)</h3>
              <p className="mb-2 flex gap-2 text-lg text-[#726C6C]">
                Account name: <b> Diani Children’s Village</b>{" "}
              </p>
              <p className="mb-2 flex gap-2 text-lg text-[#726C6C]">
                Account number: <b> 7521940017</b>{" "}
              </p>
              <p className="flex gap-2 text-lg text-[#726C6C]">
                Swift code: <b>CBAFKENX </b>{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 rounded-2xl border-4 border-[#FAA01480]/50 bg-white p-4 md:flex-row md:items-center">
            <img
              src={NCBABankLogo}
              alt="NCBA Bank EUR Logo"
              className="h-40 rounded-2xl"
            />
            <div>
              <h3 className="mb-6 text-xl font-bold">NCBA BANK (EUR)</h3>
              <p className="mb-2 flex gap-2 text-lg text-[#726C6C]">
                Account name: <b> Diani Children’s Village</b>{" "}
              </p>
              <p className="mb-2 flex gap-2 text-lg text-[#726C6C]">
                Account number: <b> 7521940025</b>{" "}
              </p>
              <p className="flex gap-2 text-lg text-[#726C6C]">
                Swift code: <b>CBAFKENX </b>{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 rounded-2xl border-4 border-[#FAA01480]/50 bg-white p-4 md:flex-row md:items-center">
            <img
              src={RaboBankLogo}
              alt="RABO Bank Logo"
              className="h-40 rounded-2xl"
            />
            <div>
              <h3 className="mb-6 text-xl font-bold">
                RABO BANK (NETHERLANDS)
              </h3>
              <p className="mb-2 flex gap-2 text-lg text-[#726C6C]">
                Account name: <b> Stitching Diani Childrens Village</b>{" "}
              </p>
              <p className="flex gap-2 text-lg text-[#726C6C]">
                Account number: <b> NL67RABO0311470505</b>{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 rounded-2xl border-4 border-[#FAA01480]/50 bg-white p-4 md:flex-row md:items-center">
            <img
              src={GlobalGivingLogo}
              alt="Global Giving Logo"
              className="h-40 rounded-2xl"
            />
            <div>
              <h3 className="mb-6 text-xl font-bold">GLOBAL GIVING.ORG</h3>
              <p className="mb-2 flex gap-2 text-lg text-[#726C6C]">
                Donate through GlobalGiving.
              </p>
              <p className="flex gap-2 text-lg font-bold text-[#A7A3A3]">
                Click this link:
                <a
                  href="https://bit.ly/3AhkVt2"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-main"
                >
                  {" "}
                  https://bit.ly/3AhkVt2
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Get Involved */}
      <div className="flex flex-col justify-between sm:flex-row">
        <div className="space-y-8 md:w-1/2">
          <h1 className="flex items-center gap-4 text-lg font-bold uppercase text-[#037ECC] md:text-2xl">
            <hr className="w-12 border border-[#1D2130] md:w-[72px]" />
            Get involved
          </h1>
          <h2 className="text-3xl font-bold leading-8 text-[#1D2130] md:text-5xl md:leading-[57.6px]">
            More ways to help
          </h2>
          <p className="text-lg text-primary-1000">
            We understand that we are blessed in different ways, thus we have
            made sure everyone can help us in their own capacity
          </p>
          <ul className="space-y-3 text-lg text-primary-1000">
            <li className="flex items-start gap-1" data-testid="list-item">
              <div className="mt-1 flex items-center" aria-hidden="true">
                <CheckmarkCircle02Icon
                  className="mb-1 text-primary-1000"
                  size={18}
                />
              </div>
              <div>
                Volunteer: Join our team and make a hands-on difference.
              </div>
            </li>

            <li className="flex items-start gap-1" data-testid="list-item">
              <div className="mt-1 flex items-center" aria-hidden="true">
                <CheckmarkCircle02Icon
                  className="mb-1 text-primary-1000"
                  size={18}
                />
              </div>
              <div>
                Fundraise: Organize a fundraiser to support our mission.
              </div>
            </li>

            <li className="flex items-start gap-1" data-testid="list-item">
              <div className="mt-1 flex items-center" aria-hidden="true">
                <CheckmarkCircle02Icon
                  className="mb-1 text-primary-1000"
                  size={18}
                />
              </div>
              <div>
                Spread the Word: Share our cause on social media and help us
                reach more people.
              </div>
            </li>
          </ul>
        </div>

        <img
          src={DonateHero1}
          alt="Donate Hero 1"
          className="my-10 h-full object-cover md:my-0"
        />
      </div>
    </section>
  );
};

export default DonationMethods;
