const Projects = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid grid-cols-3 h-3/4 w-1/2 gap-3" >
        <div className="h-full bg-red-600"></div>
        <div className="h-full w-full grid grid-rows-2 col-span-2  gap-1">
          <div className="h-full bg-red-600"></div>
          <div className="h-full bg-red-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
