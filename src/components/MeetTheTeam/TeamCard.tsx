export interface StaffMember {
  id?: number;
  name: string;
  role: string;
  bg: string;
  image: string;
}

function TeamCard({ name, role, bg, image }: StaffMember) {
  return (
    <div
      className="flex h-[424px] w-full flex-col overflow-hidden rounded-xl bg-primary-main sm:h-96 sm:max-w-72"
      style={{ backgroundColor: bg }}
    >
      <div className="h-4/5">
        <img
          src={image}
          alt={name}
          className="size-full object-cover"
          loading="lazy"
        />
      </div>
      <div
        className="lg:mt-2.0 mt-1.5 h-1/5 rounded-b-xl border border-primary-main bg-white"
        style={{ borderColor: bg }}
      >
        <div className="flex flex-col p-2.5">
          <h2 className="text-xl font-medium text-primary-1000">{name}</h2>

          <p className="text-sm italic text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
