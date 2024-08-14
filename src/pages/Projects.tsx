import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import Ishmael from "@/assets/ishmael.svg";
import furnitureImage from "@/assets/furniture_workshop.svg";
import DonateComponent from "@/components/Donate/DonateComponent";

const Projects = () => {
  return (
    <>
      <Header />
      <div className="mx-10 my-10 flex flex-col items-center justify-center">
        <div>
          <h1 className="text-lg font-semibold text-primary-text sm:text-5xl">
            <span className="mr-3 inline-block w-8 border-t-2 border-gray-800"></span>
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
          <div>
            <h1 className="relative flex items-center text-lg font-semibold text-secondary600 sm:text-5xl">
              <span className="absolute left-0 w-8 border-t-2 border-gray-800"></span>
              <span className="ml-10 flex flex-col">
                THE FURNITURE
                <br />
                WORKSHOP
              </span>
            </h1>
            <img src={furnitureImage} alt="furniture image" />
            <p className="my-5 text-base font-medium text-primary1000">
              A few years ago, we built a furniture-workshop. The main aim of
              this project is to teach the children some basic skills to improve
              their employment opportunities in the future.
              <br />
              <br />
              Several sponsors and well-wishers have helped to equip the
              workshop with all the necessary tools and materials.
              <br />
              <br />
              The workshop manager, Ishmael, has a lot of experience in woodwork
              and makes the most fantastic pieces. Hotels, schools and
              individuals are supporting this project by placing their orders
              for example beds, shelves, cupboards, chairs, tables etc.
            </p>
            <div className="flex gap-4">
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
