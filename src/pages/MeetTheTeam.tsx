import DonateComponent from "@/components/Donate/DonateComponent";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import TeamCard, { StaffMember } from "@/components/MeetTheTeam/TeamCard";

import athman from "@/assets/images/meet-the-team/athman.jpeg";
import chebet from "@/assets/images/meet-the-team/chebet.jpeg";
import esther from "@/assets/images/meet-the-team/esther.jpeg";
import faith from "@/assets/images/meet-the-team/faith.jpeg";
import ishmael from "@/assets/images/meet-the-team/ishmael.jpeg";
import maryMother from "@/assets/images/meet-the-team/mary-mother.jpeg";
import maryNyanya from "@/assets/images/meet-the-team/mary-nyanya.jpeg";
import mary from "@/assets/images/meet-the-team/mary.jpeg";
import rose from "@/assets/images/meet-the-team/rose.jpeg";
import yvonne from "@/assets/images/meet-the-team/yvonne.jpeg";

function MeetTheTeam() {
  return (
    <main className="space-y-12">
      <Header />
      <section className="container mx-auto flex max-w-[90%] flex-col items-center gap-10 md:pb-6 lg:pb-12">
        <h1 className="text-5xl font-bold">Meet our Staff</h1>

        <div className="flex w-full flex-col items-center gap-6 md:gap-10">
          <div className="grid w-full grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:w-1/2 lg:gap-12">
            {staff.slice(0, 2).map(({ id, name, role, bg, image }) => (
              <TeamCard
                key={id}
                name={name}
                role={role}
                bg={bg}
                image={image}
              />
            ))}
          </div>
          <div className="grid w-full grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-4">
            {staff.slice(2).map(({ id, name, role, bg, image }) => (
              <TeamCard
                key={id}
                name={name}
                role={role}
                bg={bg}
                image={image}
              />
            ))}
          </div>
        </div>
      </section>
      <DonateComponent isIndexPage={false} />
      <Footer />
    </main>
  );
}

export default MeetTheTeam;

const staff: StaffMember[] = [
  {
    id: 1,
    name: "Yvonne ter Avest",
    role: "Co-Founder",
    bg: "#0097F5",
    image: yvonne,
  },
  {
    id: 2,
    name: "Esther Themba",
    role: "Community Manager",
    bg: "#FFA10C",
    image: esther,
  },
  {
    id: 3,
    name: "Madam Faith",
    role: "Social Worker",
    bg: "#FFA10C",
    image: faith,
  },
  {
    id: 4,
    name: "Madam Mary",
    role: "House mother",
    bg: "#003D63",
    image: mary,
  },
  {
    id: 5,
    name: "Madam Rose",
    role: "House mother",
    bg: "#0097F5",
    image: rose,
  },
  {
    id: 6,
    name: "Madam Mary",
    role: "Nyanya",
    bg: "#8C1823",
    image: maryNyanya,
  },
  {
    id: 7,
    name: "Madam Chebet",
    role: "House mother",
    bg: "#0097F5",
    image: chebet,
  },
  {
    id: 8,
    name: "Madam Mary",
    role: "House mother",
    bg: "#8C1823",
    image: maryMother,
  },
  {
    id: 9,
    name: "Sir Athman",
    role: "Driver",
    bg: "#003D63",
    image: athman,
  },
  {
    id: 10,
    name: "Sir Ishmael",
    role: "Carpenter & Wood instructor",
    bg: "#FFA10C",
    image: ishmael,
  },
];
