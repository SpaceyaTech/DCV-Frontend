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
      className="flex h-96 w-full max-w-72 flex-col overflow-hidden rounded-xl bg-primary-main"
      style={{ backgroundColor: bg }}
    >
      <div className="h-3/4">
        <img src={image} alt="" className="h-72 w-full object-cover" />
      </div>
      <div
        className="mt-3.5 h-1/4 rounded-b-xl border border-primary-main bg-white"
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
