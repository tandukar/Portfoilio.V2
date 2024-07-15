import { FaGithub } from "react-icons/fa";
import patient from "../../assets/images/patient.avif";
import travel from "../../assets/images/travel.png";

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
      <div className="w-full h-custom grid grid-cols-5  relative z-10  ">
        <div
          className={`z-50  ${
            isImageOnLeft ? "col-span-3 order-1  left-0 " : "col-span-3 right-0"
          }  text-slate-600  rounded-md absolute top-60 transform -translate-y-1/2 space-y-3 mt-2`}
        >
          <div className="md:w-custom1 text-white  bg-teal-800   w-full rounded-t-md shadow-md">
            <p className=" text-lg p-5 w-full ">{description}</p>
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
                <li key={index} className="inline-block px-2 ">
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
            <li className="inline-block px-2">
              <a href={href} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`object-cover bg-white ${
            isImageOnLeft ? "col-span-3 order-1  ml-10" : "col-span-3  "
          } relative group cursor-pointer`}
        >
          <div className="relative rounded-md overflow-hidden group">
            <div className="absolute inset-0 bg-custom-beige1 opacity-50 transition-opacity duration-1000 group-hover:opacity-0"></div>
            <img
              className={`object-cover w-full bg-white h-custom max-h-custom  rounded-md transition-opacity duration-1000 group-hover:opacity-100`}
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
            }   md:text-3xl text-2xl  font-bold text-slate-700 w-full  `}
          >
            <h2 className="px-2">{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectItems = [
    {
      href: "https://github.com/tandukar/MicroLibraryServices",
      img: "https://cdn.dribbble.com/userupload/14787405/file/original-6b735c7cbd1fb2f1a74e68c053a1f77f.jpg?resize=1024x768",
      title: "Micro Library Services",
      tech: ["Django", "RabbitMQ", "Celery"],
      description:
        "A  microservices-based library management application covering authentication, borrowing, book management, and fine management.",
    },
    {
      href: "https://github.com/tandukar/PatientManagementSystem",
      img: patient,
      // img: "https://cdn.dribbble.com/users/7496607/screenshots/15855305/media/148b400e76efcfdfd968d2130ce6234a.jpg?resize=800x600&vertical=center",
      title: "Patient Management System",
      tech: ["MERN", "Redux Toolkit", "Tailwind CSS"],
      description:
        "A comprehensive solution designed to streamline healthcare operations, providing efficient patient care by seamlessly managing appointment, doctors and patients in a user-friendly platform.",
    },
    {
      href: "https://github.com/tandukar/Tour",
      // img: "https://cdn.dribbble.com/userupload/11166770/file/original-a4fbecd3cc9bb782a4f7ede9c0c348cc.jpg?resize=1024x768",
      img: travel,
      title: "Tour Management System",
      tech: ["Python", "Django", "HTML", "CSS", "Bootstrap"],

      description:
        "Tour Management System: Discover, select, and effortlessly purchase curated tour packages for a seamless travel experience.",
    },
  ];
  return (
    <div className="py-16 flex  justify-center h-full ">
      <div className=" md:w-custom w-full  h-full  md:ml-6">
        <h2 className=" flex items-center text-3xl font-bold text-slate-700 mb-8">
          <span className="text-custom-beige2 mr-2 font-semibold text-2xl align-middle ">
            02 <span className=" text-3xl text-bold">.</span>
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
