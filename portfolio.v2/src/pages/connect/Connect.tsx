const Connect = () => {
  return (
    <div className="h-custom1 w-full mt-16">
      <div className="h-full w-full grid grid-rows-6 gap-4">
        <div className="flex justify-center items-center text-5xl font-bold text-slate-700">
          <p className="text-teal-500 font-medium text-lg mb-4">
            04<span className="font-medium text-lg">. What’s Next?</span>
          </p>
        </div>
        <div className="flex justify-center items-center text-5xl font-bold text-slate-700">
          <h1>Get in Touch</h1>
        </div>
        <div className="h-full w-96 mt-8 flex flex-col justify-center items-center text-center text-md font-bold text-slate-700 mx-auto my-auto">
          <p>
            Feel free to reach out if you have any questions, ideas, or just
            want to say hello! I'm looking forward to hearing from you.
          </p>
          <button className="text-teal-700 border-2 border-solid border-teal-700 p-3 rounded-md mt-8 hover:bg-teal-700  transition duration-300 ease-in-out">
            Say Hello
          </button>
        </div>
        <div className="h-full w-96 row-span-3 flex flex-col justify-end items-center text-center text-sm font-bold text-slate-700 mx-auto ">
          <p className="p-10">Designed & Built By me</p>
        </div>
      </div>
    </div>
  );
};

export default Connect;
