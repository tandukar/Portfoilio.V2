import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Aboutme = () => {
  return (
    <div className="flex items-center justify-center text-justify h-screen">
      <div className="w-custom">
        <h2 className="flex items-center text-3xl font-bold text-slate-700 mb-8">
          <span className="text-custom-beige2 mr-2 font-semibold text-2xl ">
            01 <span className="text-3xl text-bold">.</span>
          </span>
          About Me
        </h2>

        <VerticalTimeline lineColor="#535C5A  " layout="1-column-left">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#115e59", color: "#ffff  " }}
            contentArrowStyle={{ borderRight: "7px solid  #115e59" }}
            iconStyle={{ background: "#33BFA8" }}
            icon={
              <img
                src="../../src/assets/images/skillz.jpg"
                className="object-fit"
              ></img>
            }
            iconOnClick={() => {
              console.log("clicked");
            }}
          >
            <div className="vertical-timeline-element-title font-semibold text-2xl">
              Your Skills
            </div>

            <div className="vertical-timeline-element-subtitle">
              <div className="grid grid-rows py-3 mt-3  gap-5">
                <div className="inline-flex font-semibold">
                  Frontend Stack
                  <span className="border-l-2 mx-2 h-8   border-white ml-4"></span>
                  <div className="inline-flex gap-4">
                    <img
                      className="h-8 ml-1"
                      src="https://skillicons.dev/icons?i=html,css"
                    ></img>
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
                <div className="inline-flex font-semibold">
                  Backend Stack
                  <span className="border-l-2 mx-2 h-8   border-white ml-5"></span>
                  <div className="inline-flex gap-4">
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

                <div className="inline-flex font-semibold">
                  Database Stack
                  <span className="border-l-2 mx-2 h-8 border-white ml-4"></span>
                  <img
                    className="h-7 ml-1"
                    src="https://skillicons.dev/icons?i=express,nodejs"
                  ></img>
                </div>
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#115e59", color: "#ffff  " }}
            contentArrowStyle={{ borderRight: "7px solid  #115e59" }}
            icon={
              <img
                src="../../src/assets/images/experience.png "
                className="object-fill"
              ></img>
            }
            iconStyle={{ background: "#ffff" }}
          >
            <div className="vertical-timeline-element-title font-bold">
              Your Work Experience
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#115e59", color: "#ffff  " }}
            contentArrowStyle={{ borderRight: "7px solid  #115e59" }}
            iconStyle={{ background: "#33BFA8" }}
          >
            <div className="vertical-timeline-element-title font-bold">
              Your Education
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#115e59", color: "#ffff  " }}
            contentArrowStyle={{ borderRight: "7px solid  #115e59" }}
            iconStyle={{ background: "#33BFA8" }}
          >
            <div className="vertical-timeline-element-title font-bold">
              Your Resume
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Aboutme;
