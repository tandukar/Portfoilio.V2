import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
// import { lazy, Suspense } from 'react';


const Home = () => {
// const LazyLoadedImage = lazy(() => import('wired-flat-18-location-pin-red.gif'));

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="grid md:grid-cols-2  ml-5 gap-48 ">
        <div className="grid grid-rows-3 md:ml-60 ">
          <div className="text-neutral-300  md:ml-0 md:w-96 ">
            <h1 className="text-5xl font-bold text-black">
              Fullstack Mern Developer.
              {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-2 block">
                Fullstack Developer.
              </span> */}
            </h1>
          </div>
          <div className="text-slate-700 text-justify flex items-center justify-center">
            <p>
              Hey there! I'm Pragyo Tandukar. A passionate fullstack <br></br>
              web developer based in Lalitpur, Nepal.
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

          <div className="grid grid-cols-3 gap-1  md:w-36 ">
            <FaLinkedin className=" text-3xl text-black" />
            <FaGithub className=" text-3xl text-black" />
            <FiMail className=" text-3xl text-black" />
          </div>
        </div>
        <div>
        <img
                src={"catGif.gif"}
                alt="Location Pin GIF"
                // className=" inline-block h-7 w-7 align-bottom"
              />


        </div>
      </div>
    </div>
  );
};

export default Home;
