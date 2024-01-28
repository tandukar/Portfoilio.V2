import  { useRef } from "react";
import { FiMail, FiMoon, FiShoppingBag } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import Aboutme from "../aboutme/Aboutme";
import Connect from "../connect/Connect";
import Home from "../home/Home";
import Projects from "../projects/Projects";



type NavItemProps = {
  icon: React.ElementType;
  href: string;
  label: string;
  onClick: () => void;
}



const  NavItem: React.FC<NavItemProps> = ({ icon, href, onClick }) => {
  const IconComponent = icon;

  return (
    <div className="hover:bg-slate-200 transition duration-700 ease-in-out rounded-3xl h-11 w-11 flex items-center text-white justify-center hover:text-black">
      <a href="#" onClick={onClick}>
        <IconComponent className="h-5 w-5" />
      </a>
    </div>
  );
};

const Portfolio = () => {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const connectRef = useRef(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="rounded-full bg-black p-1 fixed md:right-5 right-3 h-auto z-50">
        <div className="grid grid-rows-3 gap-5">
          <NavItem
            icon={GoHome}
            label="Home"
            onClick={() => scrollToSection(homeRef)} href={""}          />
          <NavItem
            icon={FiShoppingBag}
            label="Projects"
            onClick={() => scrollToSection(projectsRef)}
            href={""} 
          />
          <NavItem
            icon={FiMail}
            label="Mail"
            onClick={() => scrollToSection(connectRef)}
            href={""} 
          />
          <NavItem
            icon={FiMoon}
            label="Moon"
            onClick={() => scrollToSection(aboutMeRef)}
            href={""} 
          />
        </div>
      </div>
      {/* Your components */}
      <div ref={homeRef}><Home/></div>
      <div ref={aboutMeRef}><Aboutme/></div>
      <div ref={projectsRef}><Projects/></div>
      <div ref={connectRef}><Connect/></div>
    </div>
  );
};

export default Portfolio;
