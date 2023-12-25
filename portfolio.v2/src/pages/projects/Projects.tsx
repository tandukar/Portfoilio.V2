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

const Projects = () => {
  return (
    <div className="bg-slate-50 py-16">
      <div className="container mx-auto">
        <h2 className=" flex items-center justify-center text-3xl font-bold text-slate-900 mb-8">
          My Projects
        </h2>

        <div className="flex items-center justify-center">
          <div className="grid grid-rows-3 w-3/5 gap-10">
            <a href ="/#/projects">
            <div className="h-72 grid grid-cols-3 bg-white shadow-md rounded-3xl overflow-hidden">
              <div className="h-full rounded-3xl p-10">
                <div className="h-full bg-green-600"></div>
              </div>
              <div className="h-full col-span-2 p-2">
                <h2 className="  font-bold text-slate-900 my-10">
                  My Projects
                </h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Debitis quas distinctio eaque iure neque. Id enim nobis
                  praesentium qui earum, error rerum unde non consequuntur nam,
                  aliquam doloremque eaque eos?
                </p>
              </div>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
