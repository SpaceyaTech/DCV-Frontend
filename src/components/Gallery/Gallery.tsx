import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Image02Icon } from "hugeicons-react";
import galleryImage01 from "@/assets/galleryimage01.png";
import galleryImage02 from "@/assets/galleryimage03.png";
import galleryImage03 from "@/assets/galleryimage02.png";
import galleryImage04 from "@/assets/galleryimage05.png";
import galleryImage05 from "@/assets/galleryimage06.png";
import galleryImage06 from "@/assets/galleryimage04.png";
import galleryImage07 from "@/assets/galleryimage09.png";
import galleryImage08 from "@/assets/galleryimage08.png";
import galleryImage09 from "@/assets/galleryimage07.png";
import galleryMobile from "@/assets/gallerymobile.svg";
import { CircleArrowRight02Icon } from "hugeicons-react";

const Gallery = () => {
  return (
    <div className="my-20 flex w-full flex-col items-center justify-center">
      <div className="flex w-[90%] items-center justify-between sm:justify-center">
        <h1 className="my-10 text-3xl font-semibold text-secondary600 sm:gap-4 sm:text-5xl">
          Gallery
        </h1>
        <CircleArrowRight02Icon className="block sm:hidden" />
      </div>
      <img src={galleryMobile} alt="gallery" className="w-[90%] sm:hidden" />
      <div className="hidden flex-row gap-2 sm:flex">
        <div>
          <div className="mb-2 flex flex-row gap-2">
            <img src={galleryImage01} alt="gallery image 1" />
            <img src={galleryImage02} alt="gallery image 2" />
          </div>
          <div className="flex flex-row gap-2">
            <img src={galleryImage03} alt="gallery image 3" />
            <img src={galleryImage04} alt="gallery image 4" />
            <img src={galleryImage05} alt="gallery image 5" />
          </div>
        </div>
        <div>
          <img src={galleryImage06} alt="gallery image 6" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <img src={galleryImage07} alt="gallery image 7" />
            <img src={galleryImage08} alt="gallery image 8" />
          </div>
          <img src={galleryImage09} alt="gallery image 9" />
        </div>
      </div>
      <p className="my-10 w-[80%] text-center text-2xl font-semibold sm:w-1/3">
        Want to see more pictures and moments from Diani Children’s Village?
      </p>
      <Link to="/gallery" className="flex justify-center">
        <Button className="gap-2 rounded-full bg-secondary600 px-16 py-6 text-xl sm:w-fit">
          Check out our gallery
          <Image02Icon className="fill-white text-xl text-secondary600" />
        </Button>
      </Link>
    </div>
  );
};

export default Gallery;
