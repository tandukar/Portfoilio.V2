import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Tooltip } from "react-tooltip";

const Aboutme = () => {
  return (
    <div className="flex items-center justify-center text-justify   ">
      <Tooltip id="my-tooltip" />

      <div className="w-custom h-full  ">
        <h2 className="flex items-center text-3xl font-bold text-slate-700 mb-8">
          <span className="text-custom-beige2 mr-2 font-semibold text-2xl ">
            01 <span className="text-3xl text-bold">.</span>
          </span>
          About Me
        </h2>

        <VerticalTimeline
          lineColor="linear-gradient(to bottom, #2ecc71, #1abc9c, #3498db, #206a5d, #006000)"
          layout="1-column-left"
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#115e59",
              color: "#ffff",
              borderRadius: "15px",
              boxShadow: "none",
            }}
            contentArrowStyle={{ borderRight: "10px solid  #115e59" }}
            iconStyle={{ background: "#33BFA8" }}
            icon={
              <img
                // src="../../src/assets/images/skillz.jpg"
                src="skillz.jpg"
                className="object-fit"
              ></img>
            }
          >
            <div className="vertical-timeline-element-title font-semibold text-2xl">
              Skills
            </div>

            <div className="vertical-timeline-element-subtitle pl-5  ">
              <div className="grid md:grid-rows  py-3 mt-3  gap-5">
                <div className="md:inline-flex font-semibold text-center ">
                  Frontend Stack
                  <span className="md:border-l-2 mx-2 h-8  border-white ml-4"></span>
                  <div className="inline-flex gap-4">
                    <a
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="HTML and CSS"
                    >
                      <img
                        className="h-8 ml-1"
                        src="https://skillicons.dev/icons?i=html,css"
                      ></img>
                    </a>

                    <img
                      className="h-8 "
                      src="https://skillicons.dev/icons?i=react,tailwind"
                    ></img>
                    <img
                      className="h-8 "
                      src="https://skillicons.dev/icons?i=js,ts"
                    ></img>
                  </div>
                </div>
                <div className="md:inline-flex font-semibold text-center grid-rows-2  ">
                  Backend Stack{" "}
                  <span className="md:border-l-2 mx-2 h-8  border-white ml-5"></span>
                  <div className="inline-flex gap-4 ">
                    <img
                      className="h-8 ml-1"
                      src="https://skillicons.dev/icons?i=nodejs,express"
                    ></img>
                    <img
                      className="h-8 "
                      src="https://skillicons.dev/icons?i=python,django"
                    ></img>
                  </div>
                </div>

                <div className="md:inline-flex font-semibold text-center">
                  Database Stack{" "}
                  <span className="md:border-l-2 mx-2 h-8 border-white ml-4"></span>
                  <div className="inline-flex gap-4">
                    <img
                      className="h-8 ml-1"
                      src="https://skillicons.dev/icons?i=mysql,sqlite"
                    ></img>
                    <img
                      className="h-8 "
                      src="https://skillicons.dev/icons?i=postgresql,mongo"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#115e59",
              color: "#ffff",
              borderRadius: "15px",
              boxShadow: "none",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #115e59" }}
            icon={
              <img
                // src="../../src/assets/images/experience.png "
                src="experience.png"
                alt="Experience"
                className="object-fill"
              ></img>
            }
            iconStyle={{ background: "#ffff" }}
          >
            <div className="vertical-timeline-element-title font-semibold  text-2xl">
              Experience
            </div>

            <div className="vertical-timeline-element-subtitle pl-5">
              <div className="grid grid-rows py-3 md:mt-3 gap-5">
                {/* Freelance */}
                <div className="text-lg font-bold">
                  Freelance
                  <div className="text-md font-medium md:ml-4">
                    - Hotel Management System
                    <span className="text-sm md:ml-4 italic">
                      &lt;/Full Stack Developer&gt;
                    </span>
                  </div>
                </div>

                {/* Work Experience */}
                <div className="text-lg font-bold mt-3 md:mt-0">
                  Work Experience
                  <div className="text-md font-medium md:ml-4">
                    - Flaresight
                    <span className="text-sm md:ml-4 italic">
                      &lt;/Backend Developer&gt;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#115e59",
              color: "#ffff",
              borderRadius: "15px",
              boxShadow: "none",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #115e59" }}
            iconStyle={{ background: "#33BFA8" }}
            icon={
              <img
                // src="../../src/assets/images/experience.png "
                src="academic-hat.png"
                alt="education"
                className="object-cover"
              ></img>
            }
          >
            <div className="vertical-timeline-element-title font-semibold  text-2xl">
              Education
            </div>

            <div className="vertical-timeline-element-subtitle pl-5">
              <div className="flex items-center">
                <div className="md:w-20 w-14 mt-2 ">
                  <img
                    className="md:h-14 h-12 "
                    src="herald.png"
                    alt="Herald College Logo"
                  />
                </div>
                <div className="md:ml-4 ml-1">
                  <div className="mt-4 font-semibold">
                    Herald College Kathmandu (HCK)
                  </div>
                  <div className="flex flex-wrap">
                    <span className="text-sm">
                      BSc (Hons) Computer Science (BIT)
                    </span>
                    <span className="text-sm md:ml-10">2021 - 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <div className="flex justify-center items-center">
          <button
            onClick={() => {
              open("Resume.pdf");
            }}
            className="hover:bg-teal-600 border-2 font-bold rounded-md text-slate-700 hover:text-white border-teal-600 active:bg-teal-600 p-4 w-44 "
          >
            View my Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
