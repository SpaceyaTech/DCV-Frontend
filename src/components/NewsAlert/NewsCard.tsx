import newsImage01 from "@/assets/newsimage01.svg";
import newsImage02 from "@/assets/newsimage02.svg";
import newsImage03 from "@/assets/newsimage03.svg";

const NewsCard = () => {
  const data = [
    {
      img: newsImage01,
      title: "Baby Saumu's reunion",
      description:
        "Saumu has been reunited with her grandmother and father! We are overjoyed for her.",
    },
    {
      img: newsImage02,
      title: "Our babies' wellbeing",
      description:
        "All the babies under our care are in good shape and health.",
    },
    {
      img: newsImage03,
      title: "Global Giving Report:",
      description: (
        <>
          The report is out and has been approved. Click link to access:{" "}
          <a
            href="https://www.globalgiving.org/projects/globalgiving2023"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-text underline"
          >
            Globalgiving2023
          </a>
        </>
      ),
    },
  ];

  return (
    <div className="my-10 flex flex-col gap-4 sm:flex-row sm:gap-8">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <img src={item.img} alt={item.title} />
          <div className="z-10 -mt-20 flex min-h-40 max-w-[300px] flex-col items-center justify-center rounded-lg bg-neutral-base-white p-4">
            <h3 className="text-xl font-semibold text-primary-text">
              {item.title}
            </h3>
            <p className="text-center">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
