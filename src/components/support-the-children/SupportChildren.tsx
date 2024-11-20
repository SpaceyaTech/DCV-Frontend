import cover1 from "@/assets/images/dcv-sign-post.jpeg";

function SupportChildren() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 p-6 md:gap-16">
      {/* top */}
      <div className="space-y-4 md:space-y-0">
        <img
          src={cover1}
          alt="dcv-sign-post"
          className="mr-8 aspect-video w-full rounded-2xl object-cover md:float-left md:w-1/2"
          loading="lazy"
        />
        <h4 className="text-center text-3xl font-bold text-[#FFB134] md:mb-3 md:text-left md:text-4xl">
          A refuge for the <br className="hidden md:block" /> vulnerable
          children
        </h4>
        <p className="text-base font-normal text-primary-1000 md:text-lg">
          Diani Children’s Village (DCV) was established in 1994 with the
          mission of providing a safe home for orphans, neglected, and abandoned
          children. Located at Diani Beach - Galu Kinondo, approximately 35 km
          south of Mombasa, Kenya, DCV offers essential services including
          healthcare, education, recreation, and skill-building opportunities to
          foster hope and a foundation for a future independent life. Over the
          years, DCV has served as a sanctuary for over 100 children,
          transforming lives through dedicated care and support.
          <br />
          <br />
          We are a dedicated organization that rescues and cares for abandoned,
          neglected, and orphaned children in Kwale County. Working closely with
          the Children’s Department Office, local and general hospitals, the
          police, and the judiciary, we provide a safe and nurturing environment
          for these vulnerable children. Our current residents include
          approximately 25 children, ranging from infants as young as two months
          to teenagers up to 17 years old. We ensure that the older children
          receive proper education and care, creating a supportive community
          where every child can thrive.
        </p>
      </div>
      {/* bottom */}
      <div className="w-full overflow-hidden rounded-xl md:rounded-2xl">
        <video
          aria-label=" video"
          controls
          className="aspect-video max-h-[464px] w-full"
          autoPlay={false}
          controlsList="nodownload"
          muted
        >
          <source
            src="https://videos.pexels.com/video-files/28916960/12515708_640_360_60fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}

export default SupportChildren;
