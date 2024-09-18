import Footer from "@/components/Footer/Footer";
import Ishmael from "@/assets/ishmael.svg";
import furnitureImage from "@/assets/furniture_workshop.svg";
import farmingImage from "@/assets/farming_image.svg";
import DonateComponent from "@/components/Donate/DonateComponent";
import HeaderLayout from "@/components/Header/HeaderLayout";

const Projects = () => {
  return (
    <>
      <HeaderLayout />
      <div className="m-10 flex flex-col items-center justify-center sm:mx-40 sm:my-20 sm:items-start">
        <div className="sm:max-w-[650px]">
          <h1 className="flex items-center text-lg font-semibold text-primary-text sm:text-xl">
            <span className="mr-3 inline-block w-8 border-t-2 border-gray-800 sm:w-14"></span>
            OUR PROJECTS
          </h1>
          <p className="my-5 text-base font-medium text-primary1000">
            In order to help the home to become financially stable and for the
            children to learn how to become more independent in their future
            lives, some self-initiative income generating projects were started
            at the Diani Children’s Village.
          </p>
        </div>
        <div>
          <div className="relative flex items-center justify-between sm:my-20">
            <img
              src={farmingImage}
              alt="furniture image"
              className="hidden sm:-mt-16 sm:block"
            />
            <div className="sm:absolute sm:right-0 sm:top-0">
              <h1 className="relative flex items-center text-lg font-semibold text-secondary600 sm:text-xl">
                <span className="absolute left-0 w-8 border-t-2 border-gray-800 sm:w-14"></span>
                <span className="ml-10 sm:ml-16">FARMING</span>
              </h1>
              <img
                src={farmingImage}
                alt="furniture image"
                className="sm:hidden"
              />
              <div className="gap-40 sm:flex">
                <p className="my-5 text-base font-medium text-primary1000 sm:max-w-[450px]">
                  To ensure that we are food secure and are serving our children
                  the best diets, we put a section of the land under DCV to
                  farming and poultry farming. From the farm, we harvest fresh
                  vegetables, and eggs which help to support our kitchen.
                  <br />
                  <br />
                  The farm is also a very good learning resource for our
                  children, because they get to learn simple agricultural
                  practices which they may apply later on in life.
                </p>
              </div>
            </div>
          </div>
          <div className="sm:mb-20 sm:mt-10">
            <h1 className="relative flex items-center text-lg font-semibold text-secondary600 sm:text-xl">
              <span className="absolute left-0 w-8 border-t-2 border-gray-800 sm:w-14"></span>
              <span className="ml-10 sm:ml-16">
                THE FURNITURE <br className="block sm:hidden" />
                WORKSHOP
              </span>
            </h1>
            <img
              src={furnitureImage}
              alt="furniture image"
              className="sm:hidden"
            />
            <div className="gap-40 sm:flex">
              <p className="my-5 text-base font-medium text-primary1000 sm:max-w-[450px]">
                A few years ago, we built a furniture-workshop. The main aim of
                this project is to teach the children some basic skills to
                improve their employment opportunities in the future.
                <br />
                <br />
                Several sponsors and well-wishers have helped to equip the
                workshop with all the necessary tools and materials.
                <br />
                <br />
                The workshop manager, Ishmael, has a lot of experience in
                woodwork and makes the most fantastic pieces. Hotels, schools
                and individuals are supporting this project by placing their
                orders for example beds, shelves, cupboards, chairs, tables etc.
              </p>
              <img
                src={furnitureImage}
                alt="furniture image"
                className="hidden sm:-mt-16 sm:block"
              />
            </div>
            <div className="flex gap-4 xl:-mt-24">
              <img src={Ishmael} alt="Ishmael image" />
              <div>
                <p className="text-lg font-semibold text-primary1000">
                  Ishmael
                </p>
                <p className="text-base font-medium text-primary1000">
                  Workshop Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DonateComponent isIndexPage={false} />
      <Footer />
    </>
  );
};

export default Projects;
