import cover1 from "@/assets/images/support-the-children-1.png";
import cover2 from "@/assets/images/support-the-children-2.png";

function SupportChildren() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center gap-8 md:gap-10">
      {/* top */}
      <div className="flex w-full flex-col-reverse items-center gap-5 p-3 md:flex-row">
        <div className="flex-center h-80 w-full rounded-xl bg-support-the-children-1 bg-cover bg-no-repeat p-1 md:w-2/5">
          <img
            src={cover1}
            alt="cover 1"
            className="size-full rounded-lg object-cover"
          />
        </div>
        <div className="w-full text-primary-1000 md:w-3/5">
          <p className="text-base md:text-lg">
            Diani Children’s Village (DCV) was established in 1994 with the
            mission of providing a safe home for orphans, neglected, and
            abandoned children. Located at Diani Beach - Galu Kinondo,
            approximately 35 km south of Mombasa, Kenya, DCV offers essential
            services including healthcare, education, recreation, and
            skill-building opportunities to foster hope and a foundation for a
            future independent life. Over the years, DCV has served as a
            sanctuary for over 100 children, transforming lives through
            dedicated care and support.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex w-full flex-col-reverse items-center gap-5 p-3 md:flex-row-reverse">
        <div className="flex-center h-80 w-full rounded-xl bg-support-the-children-2 bg-cover bg-no-repeat p-1 md:w-2/5">
          <img
            src={cover2}
            alt="cover 2"
            className="size-full rounded-lg object-cover"
          />
        </div>
        <div className="w-full text-primary-1000 md:w-3/5">
          <p className="text-base md:text-lg">
            We are a dedicated organization that rescues and cares for
            abandoned, neglected, and orphaned children in Kwale County. Working
            closely with the Children’s Department Office, local and general
            hospitals, the police, and the judiciary, we provide a safe and
            nurturing environment for these vulnerable children. Our current
            residents include approximately 25 children, ranging from infants as
            young as two months to teenagers up to 17 years old. We ensure that
            the older children receive proper education and care, creating a
            supportive community where every child can thrive.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SupportChildren;
