import FacebookIcon from "@/assets/icons/facebook-icon.svg";
import JanPoot from "@/assets/images/jan-poot.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const testimonials = [
  {
    id: 1,
    text: "  This home give a future to kids who lost there parents. Let us hope without parents they can have a happy and good future.",
    author: "John Doe",
  },
  { id: 2, text: "I love using this every day.", author: "Jane Smith" },
  { id: 3, text: "Highly recommend to everyone.", author: "Sam Wilson" },
  { id: 3, text: "Highly recommend to everyone.", author: "Sam Wilson" },

  { id: 3, text: "Highly recommend to everyone.", author: "Sam Wilson" },
  { id: 3, text: "Highly recommend to everyone.", author: "Sam Wilson" },
];

const TestimonialCaroussel = () => {
  return (
    <div className="mx-auto max-w-[1376px] rounded-[40px] border-secondary800 bg-secondary100 px-8 py-16 md:border-4 md:px-20">
      <Carousel className="flex flex-col md:flex-row">
        <div className="space-y-5 sm:space-y-12 md:w-1/2">
          <h3 className="text-lg font-normal sm:text-2xl">A word from:</h3>
          <h4 className="text-3xl font-bold sm:text-[64px]">Our Visitors</h4>
          <p className="text-lg">
            Here’s what our visitors have to say about their{" "}
            <br className="hidden md:block" />
            experience at Diani Children’s Village.
          </p>
          {/* show in desktop */}
          <div className="relative hidden w-36 md:flex">
            <CarouselPrevious className="absolute bottom-0 left-0 size-16 border-neutrals300 bg-secondary100" />
            <CarouselNext className="absolute bottom-0 right-0 size-16 border-neutrals300 bg-secondary100" />
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="space-y-8">
                <p className="text-2xl font-bold text-secondary800 md:text-3xl">
                  <span className="-mt-10 text-5xl font-bold text-neutrals900">
                    “
                  </span>
                  <br />
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={JanPoot}
                      alt="Jan Poot"
                      className="rounded-full"
                    />
                    <img
                      src={FacebookIcon}
                      alt="Facebook icon"
                      className="absolute -right-2 -top-2"
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-neutrals900">
                      {testimonial.author}
                    </p>
                    <p className="text-lg font-normal text-[#726C6C]">
                      From Belgium
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>

        {/* show in mobile */}
        <div className="relative mt-10 flex md:hidden">
          <CarouselPrevious className="absolute bottom-0 left-0 size-10 border-neutrals300 bg-secondary100" />
          <CarouselNext className="absolute bottom-0 right-0 size-10 border-neutrals300 bg-secondary100" />
        </div>
      </Carousel>
    </div>
  );
};

export default TestimonialCaroussel;
