const sections = [
  {
    title: "Safe Haven",
    description:
      "We offer a nurturing and secure environment where children can thrive without fear. Our dedicated staff ensures that every child feels safe and cared for around the clock.",
  },
  {
    title: "Education",
    description:
      "We prioritize education, providing access to quality schooling, tutoring, and extracurricular activities. Our goal is to empower children with the knowledge and skills they need for a brighter future.",
  },
  {
    title: "Health and wellness",
    description:
      "We focus on the holistic health of our children by providing regular medical check-ups, nutritious meals, and psychological support.",
  },
  {
    title: "Life skills development",
    description:
      "We equip children with essential life skills through vocational training, workshops, and mentorship programs.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="container mt-10 md:mt-24">
      <h1 className="flex items-center justify-center gap-4 text-lg font-bold uppercase text-[#037ECC] md:text-2xl">
        <hr className="w-12 border border-[#1D2130] md:w-[72px]" />
        What We Do
      </h1>
      <h2 className="mt-8 text-center text-3xl font-bold leading-8 text-[#1D2130] md:text-5xl md:leading-[57.6px]">
        Making a Difference,
        <br /> One Life at a Time.
      </h2>

      <div className="grid-col-1 mb-10 mt-10 grid gap-7 md:mb-28 md:mt-20 md:grid-cols-2 md:gap-14 md:px-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="text-2xl font-bold">{section.title}</h3>
            <p className="mt-2 text-lg text-primary-1000">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
