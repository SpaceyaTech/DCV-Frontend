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
    <div className="flex items-center gap-8 px-8">
      <img src={image} alt="age 1-5" className="mr-6 object-cover" />

      <div className="space-y-4">
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
          className="flex items-center gap-2 rounded-full bg-primary-main text-base font-medium text-white"
        >
          Support us today{" "}
          <img src={heartIcon} alt="heart" loading="lazy" className="w-4" />
        </Button>
      </div>
    </div>
  );
}

export default ChildrenCard;
