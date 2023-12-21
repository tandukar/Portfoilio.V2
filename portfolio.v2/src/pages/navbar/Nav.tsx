import { GoHome } from "react-icons/go";
import { FiMail } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";

const Nav = () => {
  return (
    // <div className="rounded-full bg-black p-1 fixed md:right-5 h-auto border-solid border-2  border-slate-400 ">
    <div className="rounded-full bg-black p-1 fixed md:right-5 h-auto ">
      <div className="grid grid-rows-3 gap-5">
        <div className="bg-slate-200  rounded-3xl h-11 w-11 flex items-center  justify-center text-black">
          <a href="#" className="">
            <GoHome className="h-5 w-5" />
          </a>
        </div>
        <div className="hover:bg-slate-200  transition duration-700 ease-in-out rounded-3xl h-11 w-11 flex items-center text-white justify-center hover:text-black">
          <a href="/#/projects" className="">
            <FiShoppingBag className="h-5 w-5" />
          </a>
        </div>
        <div className="hover:bg-slate-200 transition duration-700 ease-in-out rounded-3xl h-11 w-11 flex items-center text-white justify-center hover:text-black">
          <a href="#" className="">
            <FiMail className="h-5 w-5" />
          </a>
        </div>
        <div className="hover:bg-slate-200  transition duration-700 ease-in-out rounded-3xl h-11 w-11 flex items-center text-white justify-center hover:text-black">
          <a href="#" className="">
            <FiMoon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
