const Connect = () => {
  return (
    <div className="h-custom1 w-full mt-16 ">
      <div className="h-full w-full grid grid-rows-7 gap-4">
        <div className="flex flex-col row-span-1 justify-center items-center font-bold text-slate-700">
          <p className="text-teal-500 font-medium text-lg mb-4">
            04<span className="font-medium text-lg mb-10">. What’s Next?</span>
          </p>
          <h1 className="text-5xl mb-12">Get in Touch</h1>
          <p className="text-md text-center md:w-custom1 mb-10">
            Feel free to reach out if you have any questions, ideas, or just
            want to say hello! I'm looking forward to hearing from you.
          </p>
          <button className="hover:bg-teal-600 border-2 mt-7 rounded-md hover:text-white border-teal-600 active:bg-teal-600 p-3 w-36">
            Say Hello
          </button>
        </div>

        <div className="mt-auto w-full row-span-1 flex flex-col justify-center items-center text-center text-sm font-bold text-slate-700 p-6">
          <p>Copyright &copy; 2024. All rights are reserved.</p>
        </div>
      </div>
    </div>
  );
};
 
export default Connect;
