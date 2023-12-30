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

  //TODO:    build this section like this https://v4.brittanychiang.com

  return (
    // <div className={`h-custom grid grid-cols-2 gap-5 bg-white shadow-md rounded-3xl overflow-hidden`}>
    //   <div className={`h-full ${isImageOnLeft ? "col-span-1 order-2" : "col-span-1 order-last"} rounded-3xl p-5`}>
    //     <img className="object-cover w-full h-full rounded-3xl" src={img} alt=""/>
    //   </div>
    //   <div  className={`h-full ${isImageOnLeft ? " order-last" : " order-1"} py-5 px-3 flex flex-col justify-center`} >
    //     <h2 className="text-xl font-bold text-slate-700 mt-10 text-center">
    //       {title}
    //     </h2>
    //     <p className="text-center font-semibold text-slate-500 my-9">
    //       {description}
    //     </p>

    //     <a href={href} className="text-slate-600 hover:text-custom-beige2 hover:bg-custom text-lg font-bold py-2 flex items-center justify-center transition-all duration-300 rounded-3xl">
    //       <span className="m-2">Code</span>
    //       <FaGithub />
    //     </a>
    //   </div>
    // </div>

    <div >
      <div className="w-full h-custom grid grid-cols-5  relative ">
        <div className="z-50 right-0  text-slate-600 absolute top-60 transform -translate-y-1/2">
          <div className="w-custom1 text-white  bg-teal-800 h-36">
            <p className=" text-lg p-5 w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ultrices, quam eget cursus congue, sem nisi vestibulum elit, a
              euismod nulla erat vel orci.
            </p>
          </div>
          <ul className="text-right font-semibold text-lg mt-4">
            <li className="inline-block mr-4">React</li>
            <li className="inline-block mr-4">Node</li>
            <li className="inline-block mr-4">Express</li>
            <li className="inline-block">MongoDB</li>
          </ul>
          <ul className="text-right text-2xl font-semibold  mt-4">
            <li className="inline-block mr-4">
              <FaGithub />
            </li>
          </ul>
        </div>
        <img
          className="object-cover col-span-3 w-full h-custom max-h-custom bg-slate-900"
          src={img}
          alt=""
        />
        <div className="w-full h-full col-span-2 grid-rows-4 py-6 gap-2  ">
          <div className="text-right text-lg font-medium text-emerald-500">
            Featured Project
          </div>

          <div className="text-right text-3xl font-bold text-slate-700">Project Name</div>
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
      description:
        "A comprehensive solution designed to streamline healthcare operations, providing efficient patient care by seamlessly managing appointment, doctors and patients in a user-friendly platform.",
    },
    {
      href: "https://github.com/tandukar/Tour",
      img: "https://i.ytimg.com/vi/J-EFD3hyDFQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB7lcRAD87MQKPFVlkNvVd-CSheWA",
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
    //might need to change this to slate 50
    <div className="py-16 flex  justify-center">
      <div className="h-screen w-custom  ">
        <h2 className=" flex items-center text-3xl font-bold text-slate-700 mb-8">
          <span className="text-custom-beige2 mr-2 font-semibold text-2xl align-middle ">
            01 <span className="text-3xl text-bold">.</span>
          </span>
          Some Things I've Built
        </h2>

        <div className="flex items-center justify-center">
          <div className="grid grid-rows w-custom gap-16">
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
