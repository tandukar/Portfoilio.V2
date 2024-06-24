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
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
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
      <div className="fixed bottom-2 md:right-5 md:top-1/2 md:h-64 transform md:-translate-y-1/2 md:translate-x-0 -translate-x-1/2 left-1/2 md:left-auto bg-slate-800 md:bg-black p-2 rounded-full z-50 flex md:items-center justify-center md:justify-start">
        <div className="grid grid-cols-4 md:grid-rows-4 md:grid-cols-1 gap-3 md:gap-5">
          <NavItem
            icon={GoHome}
            label="Home"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection(homeRef);
            }}
            href="#home"
          />
          <NavItem
            icon={FiShoppingBag}
            label="Projects"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection(projectsRef);
            }}
            href="#projects"
          />
          <NavItem
            icon={MdOutlinePersonalVideo}
            label="About me"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection(aboutMeRef);
            }}
            href="#about-me"
          />
          <NavItem
            icon={FiMail}
            label="Mail"
            onClick={(event) => {
              event.preventDefault();
              console.log("Clicked mail");
            }}
            href="mailto:tandukarpragyo123@gmail.com"
          />
        </div>
      </div>
      {/* Your components */}
      <div ref={homeRef} id="home">
        <Home />
      </div>
      <div ref={aboutMeRef} id="about-me">
        <Aboutme />
      </div>
      <div ref={projectsRef} id="projects">
        <Projects />
      </div>
      <div ref={connectRef} id="connect">
        <Connect />
      </div>
    </div>
  );
};

export default Portfolio;
