import AboutHero1 from "@/assets/images/about/about-hero-1.png";
import AboutHero2 from "@/assets/images/about/about-hero-2.png";

const WhoWeAre = () => {
  return (
    <section className="container mt-12 space-y-24 md:mt-24">
      {/* Who we Are */}
      <div className="flex flex-col justify-between sm:flex-row">
        <div className="space-y-8 md:w-1/2">
          <h1 className="flex items-center gap-4 text-lg font-bold uppercase text-[#037ECC] md:text-2xl">
            <hr className="w-12 border border-[#1D2130] md:w-[72px]" />
            Who We Are
          </h1>
          <h2 className="text-3xl font-bold leading-8 text-[#1D2130] md:text-5xl md:leading-[57.6px]">
            Nurturing Hope and <br /> Building Futures
          </h2>
          <p className="text-lg text-primary-1000">
            Founded in 1994, Diani Children’s Village was established with a
            profound mission: to provide orphans, neglected, and abandoned
            children with a loving and nurturing environment. Over the years, we
            have grown into a registered charity supported primarily by
            dedicated staff who are committed to transforming the lives of these
            vulnerable children.{" "}
          </p>
        </div>

        <img
          src={AboutHero1}
          alt="About Hero 1"
          className="my-10 h-full object-cover md:my-0"
        />
      </div>

      {/* Our purpose */}
      <div className="flex flex-col justify-between sm:flex-row-reverse">
        <div className="space-y-8 md:w-1/2">
          <h1 className="flex items-center gap-4 text-lg font-bold uppercase text-[#FAA014] md:text-2xl">
            <hr className="w-12 border border-[#1D2130] md:w-[72px]" />
            Our Purpose
          </h1>
          <h2 className="text-3xl font-bold leading-8 text-[#1D2130] md:text-5xl md:leading-[57.6px]">
            Empowering Every Child to Thrive
          </h2>
          <p className="text-lg text-primary-1000">
            At our home, we ensure that each child's basic needs, such as
            healthcare, education, and recreation, are met, giving them the hope
            and foundation they need for an independent life. Our goal is to
            support them until they are ready to embark on their own journeys,
            equipped with the skills and confidence to thrive.
          </p>
        </div>

        <img
          src={AboutHero2}
          alt="About Hero 2"
          className="my-10 h-full object-cover md:my-0"
        />
      </div>
    </section>
  );
};

export default WhoWeAre;
