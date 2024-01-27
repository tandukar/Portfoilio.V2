import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "../navbar/Nav";
import Nav from "../navbar/Nav";
import "./SocialIcons";
import SocialIcons from "./SocialIcons";

const Home = () => {
  return (
      <div className="min-h-screen flex items-center md:justify-center mt-0 md:mt-12  "> 
      <div className="grid md:grid-cols-2 grid-rows-1  mx-auto md:gap-40 items-center">
        <div className="grid grid-rows-3 w-96 md:order-1 order-2">
          <div className="text-neutral-300  md:ml-0 md:w-96 ">
            <h1 className="md:text-5xl text-4xl md:text-left  text-center text-neutral-800 font-poppins">
              Fullstack Web Developer.
            </h1>
          </div>
          <div className="text-slate-600 md:text-justify md:mt-3 mt-4 font-sans text-center md:px-0 px-2">
            <p>
              Hey there! I'm Pragyo Tandukar. A dedicated and enthusiastic
              fullstack web developer hailing from the beautiful city of
              Lalitpur, Nepal.
              <img
                // src={"../../src/assets/images/wired-flat-18-location-pin-red.gif"}
                src={"wired-flat-18-location-pin-red.gif"}
                alt="Location Pin GIF"
                className=" inline-block h-6 w-6 align-bottom"
              />
            </p>
          </div>

          <div className="md:grid md:grid-cols-3 w-full md:w-36 py-2 md:justify-start md:items-start flex items-center justify-center md:gap-2 gap-3 ">
            <SocialIcons
              link="https://www.linkedin.com/in/pragyo-tandukar-1291b6233/"
              icon={<FaLinkedin />}
            />
            <SocialIcons
              link="https://github.com/tandukar"
              icon={<FaGithub />}
            />
            <SocialIcons
              link="mailto:tandukarpragyo123@gmail.com"
              icon={<FiMail />}
            />
          </div>
        </div>
        <div className="order-1 flex items-center justify-center">
          {/* <img src={"../../src/assets/images/catGif.gif"} alt="Cute Cat" /> */}
          <img src={"catGif.gif"} alt="Cute Cat" />
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Home;
