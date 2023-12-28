// const Projects = () => {
//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="grid grid-cols-3 h-3/4 w-3/5 gap-1">
//         <div className="h-full bg-red-600"></div>
//         <div className="h-full w-full grid grid-rows-2 col-span-2  gap-1">
//           <div className="h-full grid grid-cols-2 gap-1">
//             <div className="h-full bg-red-600"></div>
//             <div className="h-full bg-red-600"></div>
//           </div>
//           <div className="h-full bg-red-600"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
import { FaGithub } from "react-icons/fa";

type ProjectsItemsProps = {
  href: string;
  title: string;
  img: string;
  description: string;
};

const ProjectsItems: React.FC<ProjectsItemsProps & { index: number }> = ({
  href,
  title,
  img,
  description,
  index,
}) => {
  console.log("Index:", index);

  const isOdd = index % 2 !== 0;
  const isImageOnLeft = isOdd;

  return (
    <div
      className={`h-custom grid grid-cols-2 gap-5 bg-white shadow-md rounded-3xl overflow-hidden`}
    >
      <div
        className={`h-full ${
          isImageOnLeft ? "col-span-1 order-2" : "col-span-1 order-last"
        } rounded-3xl p-5`}
      >
        <img
          className="object-cover w-full h-full rounded-3xl"
          src={img}
          alt=""
        />
      </div>
      <div
        className={`h-full ${
          isImageOnLeft ? " order-last" : " order-1"
        } py-5 px-3 flex flex-col justify-center`}
      >
        <h2 className="text-xl font-bold text-slate-700 mt-10 text-center">
          {title}
        </h2>
        <p className="text-center font-semibold text-slate-500 my-9">
          {description}
        </p>

        <a
          href={href}
          className="text-slate-600 hover:text-custom-beige2 hover:bg-custom text-lg font-bold py-2 flex items-center justify-center transition-all duration-300 rounded-3xl"
        >
          <span className="m-2">Code</span>
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectItems = [
    {
      href: "https://github.com/tandukar/PatientManagementSystem",
      img: "/hospital-CRM.jpg",
      title: "Patient Management System",
      description:
        "A comprehensive solution designed to streamline healthcare operations, providing efficient patient care by seamlessly managing appointment, doctors and patients in a user-friendly platform.",
    },
    {
      href: "https://github.com/tandukar/Tour",
      img: "/travel.jpg",
      title: "Tour Management System",
      description:
        "Tour Management System: Discover, select, and effortlessly purchase curated tour packages for a seamless travel experience.",
    },
    {
      href: "https://github.com/tandukar/tracka",
      title: "tracka",
      description:
        "Your go-to mobile app for streamlined task management. Organize, prioritize, and track tasks effortlessly with its intuitive interface, enhancing productivity on the go.",
    },
  ];
  return (
    <div className="bg-slate-50 py-16">
      <div className="container mx-auto">
        <h2 className=" flex items-center justify-center text-3xl font-bold text-slate-700 mb-8">
          My Projects
        </h2>

        <div className="flex items-center justify-center">
          <div className="grid grid-rows w-custom gap-10">
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
