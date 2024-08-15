import { Button } from "../ui/button";
import heartIcon from "@/assets/hearticon.png";

interface ListItem {
  id: number;
  title: string;
  description: string;
}

export interface ChidrenCardProps {
  image: string;
  list: ListItem[];
}

function ChildrenCard({ image, list }: ChidrenCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 md:px-8 lg:flex-row lg:gap-8">
      <img src={image} alt="age 1-5" className="object-cover lg:mr-6" />

      <div className="flex flex-col gap-6">
        <ul className="flex list-none flex-col gap-6 text-base font-normal">
          {list.map(({ id, title, description }) => (
            <li className="flex gap-3" key={id}>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1"
              >
                <rect
                  y="0.515625"
                  width="16"
                  height="16"
                  rx="8"
                  fill="#FFA10C"
                />
              </svg>

              <p className="flex-1">
                <b>{title}</b>
                {description}
              </p>
            </li>
          ))}
        </ul>

        <Button
          size="default"
          className="mt-8 flex items-center gap-2 self-center rounded-full bg-primary-main text-base font-medium text-white lg:mt-0 lg:self-start"
        >
          Support us today{" "}
          <img src={heartIcon} alt="heart" loading="lazy" className="w-4" />
        </Button>
      </div>
    </div>
  );
}

export default ChildrenCard;
