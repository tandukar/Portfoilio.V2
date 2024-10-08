import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "../navbar/Nav";
import Nav from "../navbar/Nav";
import "./SocialIcons";
import SocialIcons from "./SocialIcons";

const Portfoilo = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center  ">
      <div className="grid md:grid-cols-2  mx-auto  gap-40  items-center">
        <div className="grid grid-rows-3 w-60">
          <div className="text-neutral-300  md:ml-0 md:w-96 ">
            <h1 className="text-5xl  text-neutral-800 font-poppins">
              Fullstack Mern Developer.
            </h1>
          </div>
          <div className="text-slate-600 md:text-justify mt-3 font-sans text-center">
            <p>
              Hey there! I'm Pragyo Tandukar. A dedicated and enthusiastic
              fullstack web developer hailing from the beautiful city of
              Lalitpur, Nepal.
              <img
                src={"wired-flat-18-location-pin-red.gif"}
                alt="Location Pin GIF"
                className=" inline-block h-7 w-7 align-bottom"
              />
            </p>
          </div>

          <div className="grid grid-cols-3 w-36 py-2 ">
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

        <div>
          {/* <img
            src={"catGif.gif"}
            alt="Location Pin GIF"
          /> */}
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Portfoilo;
