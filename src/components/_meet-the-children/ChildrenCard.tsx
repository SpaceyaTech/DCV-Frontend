import { Button } from "../ui/button";
import heartIcon from "@/assets/hearticon.png";

interface ListItem {
  id: number;
  title: string;
  description: string;
}

interface ChidrenCardProps {
  image: string;
  list: ListItem[];
}

function ChildrenCard({ image, list }: ChidrenCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 md:px-8 lg:flex-row lg:gap-8">
      <img src={image} alt="age 1-5" className="object-cover lg:mr-6" />

      <div className="flex flex-col space-y-6">
        <ul className="flex list-disc flex-col gap-6 text-base font-normal">
          {list.map(({ id, title, description }) => (
            <li className="marker-size" key={id}>
              <b>{title}</b>
              {description}
            </li>
          ))}
        </ul>

        <Button
          size="default"
          className="ms:self-start flex items-center gap-2 self-center rounded-full bg-primary-main text-base font-medium text-white"
        >
          Support us today{" "}
          <img src={heartIcon} alt="heart" loading="lazy" className="w-4" />
        </Button>
      </div>
    </div>
  );
}

export default ChildrenCard;
