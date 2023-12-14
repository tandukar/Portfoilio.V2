import { GoHome } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";


const Nav = () => {
  return (
    <div className="rounded-2xl bg-gray-800 p-4 fixed md:right-5 h-auto">
      <div className="grid grid-rows-3 gap-10 py-4">
        <div>
          <a href="#" className="text-white hover:text-gray-300">
            <GoHome className= "h-6 w-6"/>
          </a>
        </div>
        <div>
          <a href="#" className="text-white hover:text-gray-300">
            <FiShoppingBag className= "h-6 w-6"/>
          </a>
        </div>
        <div>
          <a href="#" className="text-white hover:text-gray-300">
            <FiMail className= "h-6 w-6"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
