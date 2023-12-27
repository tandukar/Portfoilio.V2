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

type ProjectsItemsProps = {
  href: string;
  title: string;
  description: string;
};

const ProjectsItems: React.FC<ProjectsItemsProps & { index: number }> = ({
  href,
  title,
  description,
  index,
}) => {
  console.log("Index:", index);

  const isOdd = index % 2 !== 0;
  const isImageOnLeft = isOdd;

  return (
    <a href={href}>
      <div
        className={`h-custom grid grid-cols-3 bg-white shadow-md rounded-3xl overflow-hidden`}
      >
        <div
          className={`h-full ${
            isImageOnLeft ? "col-span-2 order-2" : "col-span-2 order-last"
          } rounded-3xl py-6 px-6`}
        >
          <div className="h-full bg-green-600"></div>
        </div>
        <div
          className={`h-full ${
            isImageOnLeft ? "col-span-1 order-last" : "col-span-1 order-1"
          } py-5 pl-6`}
        >
          <h2 className="font-bold text-slate-900 my-10">{title}</h2>
          <p>{description}</p>

          <a  href=""> View Code</a>
        </div>
      </div>
    </a>
  );
};

const Projects = () => {
  const projectItems = [
    {
      href: "https://github.com/tandukar/PatientManagementSystem",
      title: "Patient Management System",
      description:
        "The Patient Management System is a comprehensive solution designed to streamline healthcare operations, providing efficient patient care by seamlessly managing appointment, doctors and patients in a user-friendly platform.",
    },
    {
      href: "https://github.com/tandukar/Tour",
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
        <h2 className=" flex items-center justify-center text-3xl font-bold text-slate-900 mb-8">
          My Projects
        </h2>

        <div className="flex items-center justify-center">
          <div className="grid grid-rows w-3/5 gap-10">
            {projectItems.map((item, index) => (
              <ProjectsItems key={index} index={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
