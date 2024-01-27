import { FaGithub } from "react-icons/fa";

type ProjectsItemsProps = {
  href: string;
  title: string;
  img: string;
  tech: Array<string>;
  description: string;
};

const ProjectsItems: React.FC<
  ProjectsItemsProps & { index: number; tech: Array<string> }
> = ({ href, title, img, description, tech, index }) => {
  console.log("Index:", index);

  const isOdd = index % 2 !== 0;
  const isImageOnLeft = isOdd;

  return (
    <div>
      <div className="w-full h-custom grid grid-cols-5  relative ">
        <div
          className={`z-50  ${
            isImageOnLeft ? "col-span-3 order-1  left-0 " : "col-span-3 right-0"
          }  text-slate-600 absolute top-60 transform -translate-y-1/2`}
        >
          <div className="w-custom1 text-white  bg-teal-800 h-36 rounded-md shadow-md">
            <p className=" text-lg p-5 w-full">{description}</p>
          </div>
          <ul
            className={` ${
              isImageOnLeft
                ? "col-span-3 order-1  text-left "
                : "col-span-3 text-right"
            } font-semibold text-md mt-4 space-x-2 `}
          >
            {tech &&
              tech.map((techItem, index) => (
                <li key={index} className="inline-block ">
                  {techItem}
                </li>
              ))}
          </ul>
          <ul
            className={`${
              isImageOnLeft
                ? "col-span-3 order-1  text-left "
                : "col-span-3 text-right"
            } text-2xl font-semibold  mt-4`}
          >
            <li className="inline-block ">
              <a href={href} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`object-cover ${
            isImageOnLeft ? "col-span-3 order-1" : "col-span-3"
          } relative group cursor-pointer`}
        >
          <div className="relative rounded-md overflow-hidden">
            <div className="absolute inset-0 bg-custom-beige1 opacity-50 transition-opacity duration-300 group-hover:opacity-0"></div>
            <img
              className={`object-cover w-full h-custom max-h-custom bg-slate-900 rounded-md transition-opacity duration-300 group-hover:opacity-100`}
              src={img}
              alt=""
            />
          </div>
        </div>
        <div className="w-full h-full col-span-2 grid-rows-4 py-6 gap-2   ">
          <div
            className={` ${
              isImageOnLeft
                ? "col-span-3 order-1 text-left"
                : "col-span-3 text-right "
            }   text-lg font-medium text-emerald-500`}
          >
            Featured Project
          </div>

          <div
            className={` ${
              isImageOnLeft
                ? "col-span-3 order-1 text-left"
                : "col-span-3 text-right "
            }   text-3xl font-bold text-slate-700`}
          >
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectItems = [
    {
      href: "https://github.com/tandukar/PatientManagementSystem",
      img: "https://mir-s3-cdn-cf.behance.net/projects/404/0f4e8b185475539.Y3JvcCwxMzI2LDEwMzcsMCw2MjA.png",
      title: "Patient Management System",
      tech: ["MERN", "Redux Toolkit", "Tailwind CSS"],
      description:
        "A comprehensive solution designed to streamline healthcare operations, providing efficient patient care by seamlessly managing appointment, doctors and patients in a user-friendly platform.",
    },
    {
      href: "https://github.com/tandukar/Tour",
      img: "https://i.ytimg.com/vi/J-EFD3hyDFQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB7lcRAD87MQKPFVlkNvVd-CSheWA",
      title: "Tour Management System",
      tech: ["Python", "Django", "HTML", "CSS", "Bootstrap"],

      description:
        "Tour Management System: Discover, select, and effortlessly purchase curated tour packages for a seamless travel experience.",
    },
  ];
  return (
    //might need to change this to slate 50
    // <div className="py-16 flex  justify-center bg-custom-navy">
    <div className="py-16 flex  justify-center h-full bg-slate-500">
      <div className=" w-custom  h-full ">
        <h2 className=" flex items-center text-3xl font-bold text-slate-700 mb-8">
          <span className="text-custom-beige2 mr-2 font-semibold text-2xl align-middle ">
            02 <span className="text-3xl text-bold">.</span>
          </span>
          Some Things I've Built
        </h2>

        <div className="flex items-center justify-center ">
          <div className="grid grid-rows w-custom gap-24 ">
            {projectItems.map((item, index) => (
              <ProjectsItems
                key={index}
                index={index}
                {...item}
                img={item.img || ""}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
