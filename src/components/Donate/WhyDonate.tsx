import DonateHero1 from "@/assets/images/donate/donate-hero-1.png";
import DonateHero2 from "@/assets/images/donate/donate-hero-2.png";
import { CheckmarkCircle02Icon } from "hugeicons-react";

const WhyDonate = () => {
  return (
    <section className="container mt-12 space-y-6 md:mt-24 md:space-y-24">
      {/* Why Donate */}
      <div className="flex flex-col justify-between sm:flex-row">
        <div className="space-y-8 md:w-1/2">
          <h1 className="flex items-center gap-4 text-lg font-bold uppercase text-[#037ECC] md:text-2xl">
            <hr className="w-12 border border-[#1D2130] md:w-[72px]" />
            Why Donate?
          </h1>
          <h2 className="text-3xl font-bold leading-8 text-[#1D2130] md:text-5xl md:leading-[57.6px]">
            Why your support matters?
          </h2>
          <p className="text-lg text-primary-1000">
            We are dedicated to providing a safe and nurturing environment for
            abandoned, orphaned, and vulnerable children.
          </p>
          <ul className="space-y-3 text-lg text-primary-1000">
            Your donations help us:
            <li className="flex items-start gap-1 pt-3">
              <div className="mt-1 flex items-center">
                <CheckmarkCircle02Icon
                  className="mb-1 text-primary-1000"
                  size={18}
                />
              </div>
              <div>Provide nutritious meals and clean water.</div>
            </li>
            <li className="flex items-start gap-1">
              <div className="mt-1 flex items-center">
                <CheckmarkCircle02Icon
                  className="mb-1 text-primary-1000"
                  size={18}
                />
              </div>
              <div>Offer quality education and school supplies.</div>
            </li>
            <li className="flex items-start gap-1">
              <div className="mt-1 flex items-center">
                <CheckmarkCircle02Icon
                  className="mb-1 text-primary-1000"
                  size={18}
                />
              </div>
              <div>Ensure access to healthcare and medical services.</div>
            </li>
            <li className="flex items-start gap-1">
              <div className="mt-1 flex items-center">
                <CheckmarkCircle02Icon
                  className="mb-1 text-primary-1000"
                  size={18}
                />
              </div>
              <div>Create a loving and supportive home.</div>
            </li>
          </ul>
        </div>

        <img
          src={DonateHero1}
          alt="Donate Hero 1"
          className="my-10 h-full object-cover md:my-0"
        />
      </div>

      {/* How to donate */}
      <div className="flex flex-col justify-between sm:flex-row-reverse">
        <div className="space-y-8 md:w-1/2">
          <h1 className="flex items-center gap-4 text-lg font-bold uppercase text-[#FAA014] md:text-2xl">
            <hr className="w-12 border border-[#1D2130] md:w-[72px]" />
            How to donate
          </h1>
          <h2 className="text-3xl font-bold leading-8 text-[#1D2130] md:text-5xl md:leading-[57.6px]">
            Ways to help us help more children
          </h2>
          <p className="text-lg text-primary-1000">
            You can make a one-time donation or set up a recurring gift to
            provide ongoing support
          </p>
          <ul className="space-y-3 text-lg text-primary-1000">
            <li className="flex items-start gap-1">
              <div className="mt-1 flex items-center">
                <CheckmarkCircle02Icon
                  className="mb-1 text-primary-1000"
                  size={18}
                />
              </div>
              <div>
                Online Donation: Using MPESA Paybill or Euro number, you can
                securely donate.
              </div>
            </li>

            <li className="flex items-start gap-1">
              <div className="mt-1 flex items-center">
                <CheckmarkCircle02Icon
                  className="mb-1 text-primary-1000"
                  size={18}
                />
              </div>
              <div>
                Bank Transfer: Directly transfer funds to our bank account.
              </div>
            </li>

            <li className="flex items-start gap-1">
              <div className="mt-1 flex items-center">
                <CheckmarkCircle02Icon
                  className="mb-1 text-primary-1000"
                  size={18}
                />
              </div>
              <div>
                In-Kind Donations: Donate goods or services at our residence
                that benefit the children.
              </div>
            </li>
          </ul>
        </div>

        <img
          src={DonateHero2}
          alt="Donate Hero 2"
          className="my-10 h-full object-cover md:my-0"
        />
      </div>
    </section>
  );
};

export default WhyDonate;
