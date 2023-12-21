import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "../navbar/Nav";
import Nav from "../navbar/Nav";
import "./SocialIcons";
import SocialIcons from "./SocialIcons";
// import { lazy, Suspense } from 'react';

const Home = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center  ">
      <div className="grid md:grid-cols-2  mx-auto  gap-40  items-center">
        <div className="grid grid-rows-3 w-96">
          <div className="text-neutral-300  md:ml-0 md:w-96 ">
            <h1 className="text-5xl  text-neutral-800 font-poppins">
              Fullstack Mern Developer.
              {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-2 block">
                Fullstack Developer.
              </span> */}
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

            {/* I'm an enthusiastic web developer
            with a deep passion for technology and a particular interest in MERN
            stack development. With a background in computer science, I approach
            web development with a blend of precision and creativity, aiming to
            make a positive impact through my work. */}
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
          <img src={"catGif.gif"} alt="Location Pin GIF" />
        </div>
      </div>
      <Nav />
      <div className="absolute left-[-50px] bottom-28 transform -rotate-90">
        <div className="text-lg text-slate-600 font-semibold">
          2023 <span className="text-amber-400 tracking-widest ">Pragyo Tandukar.</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
