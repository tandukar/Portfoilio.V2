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
};
const ProjectsItems: React.FC<ProjectsItemsProps> = ({ href,title, description }) => {
  return (
    <a href={href}>
      <div className="h-custom grid grid-cols-3 bg-white shadow-md rounded-3xl overflow-hidden">
        <div className="h-full col-span-2  rounded-3xl py-6 px-6">
          <div className="h-full bg-green-600"></div>
        </div>
        <div className="h-full py-5">
          <h2 className="  font-bold text-slate-900 my-10">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
};
const Projects = () => {
  const projectItems = [
    { href: "/#/projects", title: "Patient Management System", description: "This is a desciption for patient management service here in this system a hospital can manage patients " },
    { href: "/#/projects", title: "Patient Management System", description: "This is a desciption for patient management service here in this system a hospital can manage patients " },
    { href: "/#/projects", title: "Patient Management System", description: "This is a desciption for patient management service here in this system a hospital can manage patients " },

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
              <ProjectsItems key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
