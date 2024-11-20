import DonateComponent from "@/components/Donate/DonateComponent";
import Footer from "@/components/Footer/Footer";
import HeaderLayout from "@/components/Header/HeaderLayout";
import TeamCard, { StaffMember } from "@/components/MeetTheTeam/TeamCard";

import athman from "@/assets/images/meet-the-team/athman.jpeg";
import anthony from "@/assets/images/meet-the-team/anthony.png";
import chebet from "@/assets/images/meet-the-team/chebet.jpeg";
import faith from "@/assets/images/meet-the-team/faith.jpeg";
import ishmael from "@/assets/images/meet-the-team/ishmael.jpeg";
import maryMother from "@/assets/images/meet-the-team/mary-mother.jpeg";
import maryNyanya from "@/assets/images/meet-the-team/mary-nyanya.jpeg";
import rose from "@/assets/images/meet-the-team/rose.jpeg";

function MeetTheTeam() {
  return (
    <main className="space-y-12">
      <HeaderLayout />
      <section className="mx-auto flex flex-col items-center gap-10 lg:container md:pb-6 lg:max-w-[90%] lg:pb-12">
        <h1 className="text-3xl font-bold lg:text-5xl">Meet our Staff</h1>

        <div className="grid w-full grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-4">
          {staff.map(({ id, name, role, bg, image }) => (
            <TeamCard key={id} name={name} role={role} bg={bg} image={image} />
          ))}
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
    id: 3,
    name: "Madam Faith",
    role: "Social Worker",
    bg: "#FFA10C",
    image: faith,
  },
  {
    id: 11,
    name: "Anthony Matevu",
    role: "Communications Manager",
    bg: "#003D63",
    image: anthony,
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
