import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Home = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center h-screen bg-black ">
        <div className="grid grid-cols-2">
          <div className="text-neutral-300 grid grid-rows-3 gap-3 ">
            <h1 className="text-4xl font-bold text-white  ">
              Hey, I'm Pragyo
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-2 block">
                Fullstack Developer.
              </span>
            </h1>
            <div className="grid grid-cols-3 gap-4 h-10">
              <button className="bg-gray-800 py-2 px-4 rounded-full flex items-center  ">
                <FaLinkedin className=" mr-2 text-lg" />
                LinkedIn
              </button>
              <button className="bg-gray-800 py-2 px-4 rounded-full flex items-center ">
                <FaGithub className=" mr-2 text-lg" />
                Github
              </button>
              <button className="bg-gray-800 py-2 px-4 rounded-full flex items-center ">
                <FiMail className=" mr-2 text-lg" />
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
