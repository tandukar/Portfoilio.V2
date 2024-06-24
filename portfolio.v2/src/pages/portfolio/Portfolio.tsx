import { useRef } from "react";
import { FiMail, FiMoon, FiShoppingBag } from "react-icons/fi";
import { MdOutlinePersonalVideo } from "react-icons/md";
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
};

const NavItem: React.FC<NavItemProps> = ({ icon, href, onClick }) => {
  const IconComponent = icon;

  return (
    <div className="hover:bg-slate-200 transition duration-700 ease-in-out rounded-3xl md:h-11 w-11 flex items-center text-white justify-center hover:text-black">
      <a href={href} onClick={onClick}>
        <IconComponent className="md:h-5 md:w-5 h-10 w-6 " />
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
      {/* <div className="rounded-full bg-black p-1 fixed md:right-5 right-2 h-auto z-50 flex items-center justify-center top-1/2 transform -translate-y-1/2">
        <div className="mx-auto grid grid-rows-3 gap-5"> */}

        <div className="fixed bottom-2 md:right-5 md:top-1/2 md:h-64 transform md:-translate-y-1/2   md:translate-x-0 -translate-x-1/2 left-1/2 md:left-auto bg-slate-800 md:bg-black p-2 rounded-full z-50 flex md:items-center justify-center md:justify-start">
        <div className="grid grid-cols-4 md:grid-rows-4 md:grid-cols-1 gap-3 md:gap-5">
          <NavItem
            icon={GoHome}
            label="Home"
            onClick={() => scrollToSection(homeRef)}
            href={""}
          />
          <NavItem
            icon={FiShoppingBag}
            label="Projects"
            onClick={() => scrollToSection(projectsRef)}
            href={""}
          />
          <NavItem
            icon={MdOutlinePersonalVideo}
            label="About me"
            onClick={() => scrollToSection(aboutMeRef)}
            href={""}
          />
          <NavItem
            icon={FiMail}
            label="mail"
            onClick={() => console.log("Clicked mail")}
            href={"mailto:tandukarpragyo123@gmail.com"}
          />
        </div>
      </div>
      {/* Your components */}
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutMeRef}>
        <Aboutme />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={connectRef}>
        <Connect />
      </div>
    </div>
  );
};

export default Portfolio;
